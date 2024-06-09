import { useUserContext } from "../contexts/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const AuthComponent = (props: P) => {
    const { state } = useUserContext();

    if (typeof window === 'undefined') {
      // Return null if we're rendering on the server
      return null;
    }

    const router = useRouter();

    useEffect(() => {
      if (!state.isAuthenticated) {
        router.push('/Authentication');
      }
    }, [state.isAuthenticated, router]);

    if (!state.isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
