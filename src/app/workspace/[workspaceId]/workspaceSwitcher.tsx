import { Button } from "@/components/ui/button";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { useGetWorkSpace } from "@/features/workspaces/api/useGetWorkspace";
import { useGetWorkSpaces } from "@/features/workspaces/api/useGetWorkspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/useCreateWorkspaceModal";
import useWorkspaceId from "@/hooks/useWorkspaceId";
import { Loader } from "lucide-react";

export default function WorkspaceSwitcher() {

    // Hay que agregar funciones del router

  const workspaceId = useWorkspaceId();
  const { data: workspaces, isLoading: workspacesLoading } = useGetWorkSpaces();
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkSpace({id: workspaceId});

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_open, setOpen] = useCreateWorkspaceModal();

  const filteredWorkspaces = workspaces?.filter(
    (workspace) => workspace?._id !== workspaceId
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl">
          {workspaceLoading ? (
            <Loader className="size-5 animate-spin shrink-0" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem className="cursos-pointer flex-col justify-start items-start capitalize">
          { workspace?.name}
          <span className="text-xs text-muted-foreground">
            Active Workspace
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
