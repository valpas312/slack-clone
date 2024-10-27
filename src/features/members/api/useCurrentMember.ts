import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface UseCuttentMemberProps {
    workspaceId: Id<"workspaces">
}

export default function useCurrentMember({ workspaceId }: UseCuttentMemberProps) {
    const data = useQuery(api.members.current, { workspaceId });
    const isLoading = data === undefined;

    return {
        data,
        isLoading
    }
}