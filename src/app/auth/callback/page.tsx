"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/lib/auth-service";

export default function Callback() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const authService = new AuthService();
  
  useEffect(() => {
    const handleCallback = async () => {
      try {
        await authService.handleCallback();
        window.dispatchEvent(new CustomEvent("wso2AuthSuccess"));
        const redirectPath = localStorage.getItem("wso2_identity_redirectAfterLogin") || "/";
        localStorage.removeItem("wso2_identity_redirectAfterLogin");
        router.push(redirectPath);
      } catch (error) {
        console.error("Callback error:", error);
        setError("Authentication failed. Please try again.");
        setTimeout(() => router.push("/"), 3000);
      }
    };
    handleCallback();
  }, [router]);
  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-red-50 border border-red-200 rounded p-4 text-red-700">
          {error}
        </div>
        <p className="mt-2 text-gray-600">Redirecting to home page...</p>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <p className="text-lg font-medium">Processing authentication...</p>
        <p className="text-gray-500 mt-2">Please wait while we complete the login process.</p>
      </div>
    </div>
  );
}
