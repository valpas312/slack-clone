import useCurrentMember from "@/features/members/api/useCurrentMember";
import { useGetWorkSpace } from "@/features/workspaces/api/useGetWorkspace";
import useWorkspaceId from "@/hooks/useWorkspaceId";
import {
  AlertTriangle,
  HashIcon,
  Loader,
  MessageSquareText,
  SendHorizonal,
} from "lucide-react";
import WorkspaceHeader from "./workspaceHeader";
import SidebarItem from "./sidebarItem";
import useGetChannels from "@/features/channels/api/useGetChannels";
import WorkspaceSection from "./workspaceSection";

export default function WorkspaceSidebar() {
  const workspaceId = useWorkspaceId();

  const { data: member, isLoading: memberLoading } = useCurrentMember({
    workspaceId,
  });
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkSpace({
    id: workspaceId,
  });

  const { data: channels, isLoading: channelsLoading } = useGetChannels({
    workspaceId,
  });

  if (memberLoading || workspaceLoading) {
    return (
      <div className="flex flex-col bg-[#5E2C5F] h-full items-center justify-center">
        <Loader className="size-5 animate-spin text-white" />
      </div>
    );
  }

  if (!member || !workspace) {
    return (
      <div className="flex flex-col gap-y-2 bg-[#5E2C5F] h-full items-center justify-center">
        <AlertTriangle className="size-5 text-white" />
        <p className="text-white text-sm">Workspace not found</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col bg-[#5E2C5F] h-full">
      <WorkspaceHeader
        workspace={workspace}
        isAdmin={member.role === "admin"}
      />
      <div className="flex flex-col px-2 mt-3">
        <SidebarItem label="Threads" icon={MessageSquareText} id="threads" />
        <SidebarItem label="Draft & sent" icon={SendHorizonal} id="drafts" />
        <WorkspaceSection
          label="Channels"
          hint="New channel"
          onNew={() => {}}
        >
          {channels?.map((item) => (
            <SidebarItem
              key={item._id}
              label={item.name}
              icon={HashIcon}
              id={item._id}
            />
          ))}
        </WorkspaceSection>
      </div>
    </div>
  );
}
