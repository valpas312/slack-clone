import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Doc } from "../../../../convex/_generated/dataModel";
import { ChevronDown } from "lucide-react";

interface workspaceHeaderProps {
  workspace: Doc<"workspaces">;
}

export default function WorkspaceHeader({ workspace }: workspaceHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 h-[49px] gap-0.5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="transparent"
            className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
          >
            <span className="truncate">{workspace?.name}</span>
            <ChevronDown className="size-4 ml-1 shrink-0" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-64">
            <DropdownMenuItem className="cursor-pointer capitalize">
                <div className="size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2">
                    {workspace?.name.charAt(0).toUpperCase()}
                </div>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
