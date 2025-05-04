import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Pencil, Trash } from "lucide-react"
interface CrudDropdownProps {
    onDelete?: () => void
}

export default function CrudDropdown({onDelete}: CrudDropdownProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Ellipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Pencil />
                    Editar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onDelete}>
                    <Trash />
                    Apagar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}