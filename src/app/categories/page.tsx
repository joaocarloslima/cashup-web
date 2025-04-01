import { getCategories } from "@/actions/category-actions";
import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function CategoriesPage() {
    const data: Category[] = await getCategories()

    return (
        <>
            <NavBar active="categorias" />

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold">Categorias</h2>
                        <Button asChild>
                            <Link href="/categories/form">
                                <Plus />
                                nova categoria
                            </Link>
                        </Button>

                    </div>

                    {data.length == 0 ?
                        <p>Nenhuma categoria cadastrada</p> :
                        data.map(category => <CategoryItem key={category.id} category={category} />)
                    }

                </div>
            </main>
        </>
    )
}