// hooks/useAuth.js

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if token is in localStorage
    const storedSession =
      typeof window !== "undefined" ? localStorage.getItem("session") : null;
    const storedUser =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;

    if (storedSession && storedUser) {
      setSession(JSON.parse(storedSession));
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, []);

  const login = async ({ token, token_type, user }) => {
    try {
      const session = {
        token,
        token_type,
      };

      // Save user and token to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("session", JSON.stringify(session));
      }

      setUser(user);
      setSession(session);
      setIsAuthenticated(true);
      router.push("/");
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const logout = async () => {
    /* const response = await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      )
      .then((res) => res.data);
    console.log(response); */

    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("session");
    }
    setUser(null);
    setSession(null);
    setIsAuthenticated(false);
    router.push("/login");
  };

  return { isAuthenticated, user, session, login, logout, isLoading };
};
