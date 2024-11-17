import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface UseGetMemberProps {
    workspaceId: Id<"workspaces">
}

export default function UseGetMembers({ workspaceId }: UseGetMemberProps) {
    const data = useQuery(api.members.get, { workspaceId });
    const isLoading = data === undefined;

    return {
        data,
        isLoading
    }
}