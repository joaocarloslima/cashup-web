import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Pencil, Trash } from "lucide-react"


export default function CrudDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Ellipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Pencil />
                    editar
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash />
                    apagar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}