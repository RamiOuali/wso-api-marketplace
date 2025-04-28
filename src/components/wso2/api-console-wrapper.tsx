
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import { ApiConsole } from "@/components/wso2/api-console";
import { WSO2ApiManagerService } from "@/lib/wso2/api-manager-service";
import { AuthService } from "@/lib/auth-service";
import { WSO2DevPortalService } from "@/lib/wso2/api-service";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';
import type { API } from "@/lib/wso2/types";

interface ApiConsoleWrapperProps {
  baseUrl: string;
  api: API;
  applicationId: string;
}

export function ApiConsoleWrapper({ baseUrl, api, applicationId }: ApiConsoleWrapperProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [apiManagerService, setApiManagerService] = useState<WSO2ApiManagerService | null>(null);
  const [authService, setAuthService] = useState<AuthService | null>(null);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  useEffect(() => {
    const initServices = async () => {
      try {
        setLoading(true);
        
        // Initialize services
        const auth = new AuthService();
        setAuthService(auth);
        
        const apiManager = new WSO2ApiManagerService(baseUrl);
        setApiManagerService(apiManager);
        
        // Check if already registered with API Manager
        setIsRegistered(apiManager.hasValidCredentials());
        
        setLoading(false);
      } catch (err) {
        console.error("Error initializing services:", err);
        setError("Failed to initialize services. Please try again.");
        setLoading(false);
      }
    };
    
    initServices();
  }, [baseUrl]);

  const registerWithApiManager = async () => {
    if (!authService || !apiManagerService) {
      setError("Authentication service not initialized");
      return;
    }
    
    try {
      setIsRegistering(true);
      setError(null);
      
      // Get ID token from Identity Server
      const user = await authService.getUser();
      if (!user || !user.id_token) {
        throw new Error("No valid ID token available. Please log in again.");
      }
      
      // Register with API Manager using ID token
      await apiManagerService.registerClientWithIdToken(user.id_token);
      
      setIsRegistered(true);
    } catch (err) {
      console.error("Error registering with API Manager:", err);
      setError(`Failed to register with API Manager: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsRegistering(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!isRegistered) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>API Console Registration</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <p className="mb-4">
            To use the API Console, you need to register with the WSO2 API Manager. This will allow you to generate API keys and test the APIs.
          </p>
          
          <Button 
            onClick={registerWithApiManager} 
            disabled={isRegistering}
          >
            {isRegistering ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registering...
              </>
            ) : (
              "Register with API Manager"
            )}
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Create a bridge adapter that implements the WSO2AuthService interface
  // but uses our apiManagerService under the hood
  const authAdapter = {
    isAuthenticated: () => true,
    getValidAccessToken: async () => {
      if (!apiManagerService) return null;
      try {
        return await apiManagerService.getAccessToken();
      } catch (err) {
        console.error("Error getting API Manager access token:", err);
        return null;
      }
    }
  };

  // Create API service with our auth adapter
  const apiService = new WSO2DevPortalService(baseUrl, authAdapter);

  return (
    <ApiConsole 
      baseUrl={baseUrl} 
      api={api} 
      authService={authAdapter} 
      applicationId={applicationId} 
    />
  );
}
