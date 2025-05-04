import * as LucideIcons from "lucide-react";

interface IconProps {
    name: string
}

export default function Icon({ name }: IconProps){
    const LucidIcon = (LucideIcons as any)[name]

    if(!LucidIcon) return <LucideIcons.Ban color="red" />

    return <LucidIcon />
}