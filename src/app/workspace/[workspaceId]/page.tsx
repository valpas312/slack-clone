"use client"

import { useGetWorkSpace } from "@/features/workspaces/api/useGetWorkspace";
import useWorkspaceId from "@/hooks/useWorkspaceId"

export default function WorkspaceIdPage() {
    const workspaceId = useWorkspaceId();
    const {data} = useGetWorkSpace({id: workspaceId});

    console.log(data);

    return <div>
        <h1>Workspace {workspaceId}</h1>
    </div>
}