import { Book } from "lucide-react";

export default function CategoryItem(){
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <Book />
                <span>nome da categoria</span>
            </div>

            <div>
                <span>...</span>
            </div>
        </div>
    )
}