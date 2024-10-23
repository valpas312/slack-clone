import UserButton from "@/features/auth/components/UserButton";
import WorkspaceSwitcher from "./workspaceSwitcher";

export default function Sidebar() {
    return (
        <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-[4px]">
            <WorkspaceSwitcher />
            <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
                <UserButton />
            </div>
        </aside>
    );
}