"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutCallback() {
  const router = useRouter();
  
  useEffect(() => {
    // Clear any remaining auth data from localStorage
    localStorage.removeItem("oidc.user:https://localhost:9444:zRIqsAoN_z1hekewdbuB52Ptx9Ea");
    
    // Redirect to home page
    router.push("/");
  }, [router]);
  
  return <div>Completing logout...</div>;
}
