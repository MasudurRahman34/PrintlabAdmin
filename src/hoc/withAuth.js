import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect, memo } from "react";

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();
    const { isAuthenticated, isLoading, user } = useAuth();
    console.log("isAuthenticated", isAuthenticated, isLoading);

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated, router, isLoading, user]);

    if (isLoading) {
      return (
        <div className="container mx-auto min-h-[40vh] flex items-center justify-center">
          <p className="text-2xl font-semibold">Loading...</p>
        </div>
      ); // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  // Set a display name for easier debugging
  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return memo(WithAuth);
};

// Helper function to get the display name of the wrapped component
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;
