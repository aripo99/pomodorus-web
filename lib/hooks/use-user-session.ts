import { useContext } from "react";
import UserSessionContext from "@/components/user-session-context";

function useUserSession() {
    const { session } = useContext(UserSessionContext);

    return session;
}

export default useUserSession;