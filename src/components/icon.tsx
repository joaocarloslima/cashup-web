import * as LucideIcons from "lucide-react";

export default function Icon({ name }: { name: string }) {
    const LucideIcon = (LucideIcons as any)[name]

    if (!LucideIcon) return <LucideIcons.Ban color="red" />

    return <LucideIcon />
}