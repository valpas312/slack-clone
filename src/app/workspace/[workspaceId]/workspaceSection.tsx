interface WorkspaceSectionProps {
    children: React.ReactNode;
    label: string;
    hint: string;
    onNew: () => void;
}

export default function WorkspaceSection({
    children,
    label,
    hint,
    onNew,
}: WorkspaceSectionProps) {
    return (
        <div>
            {children}
        </div>
    );
}
