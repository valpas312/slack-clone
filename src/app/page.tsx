"use client";

import UserButton from "@/features/auth/components/UserButton";
import { useWorkSpaces } from "@/features/workspaces/api/useGetWorkspaces";
import { useEffect, useMemo } from "react";

export default function Home() {
  const { data, isLoading } = useWorkSpaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      console.log("Workspace ID", workspaceId);
    } else {
      console.log("Open create workspace modal");
    }
  }, [workspaceId, isLoading]);

  return (
    <div>
      <h1>Home</h1>
      <UserButton />
    </div>
  );
}
