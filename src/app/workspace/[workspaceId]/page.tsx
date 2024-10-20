interface WorkspaceIdPageProps {
    params: {
        workspaceId: string;
    }
}

export default function WorkspaceIdPage({ params: { workspaceId } }: WorkspaceIdPageProps) {
    return <div>
        <h1>Workspace {workspaceId}</h1>
    </div>
}