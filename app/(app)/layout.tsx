import { redirect } from "next/navigation";
import AppHeader from "@/components/app-header";
import loadSession from "@/lib/load-session";

async function AppLayout(props: React.PropsWithChildren) {
    const session = await loadSession();

    if (!session) {
        redirect("/auth/sign-in");
    }

    return (
        <div className="flex flex-col flex-1 space-y-4">
            <AppHeader />

            {props.children}
        </div>
    );
}

export default AppLayout;