import { Button } from "@/components/ui/button";
import useWorkspaceId from "@/hooks/useWorkspaceId";
import { Info, Search } from "lucide-react";
import { useGetWorkSpace } from "@/features/workspaces/api/useGetWorkspace";

export default function Toolbar() {
    const workspaceId = useWorkspaceId();
    const { data } = useGetWorkSpace({id: workspaceId});
  return (
    <nav className="bg-[#481349] flex items-center justify-between h-10 p-1.5">
      <div className="flex-1" />
      <div className="min-w-[280px] max-[640px] grow-[2] shrink">
        <Button
          size="sm"
          className="bg-accent/25 hover:bg-accent-25 w-full justify-start h-7 px-2"
        >
          <Search size={14} className="mr-2 text-white" />
          <span className="text-white text-xs">
            Search {data?.name} workspace
          </span>
        </Button>
      </div>
      <div className="ml-auto flex-1 flex items-center justify-end">
        <Button variant="transparent" size="iconSm">
            <Info className="text-white size-5" />
        </Button>
      </div>
    </nav>
  );
}