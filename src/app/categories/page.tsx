import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";

async function getCategories() {
    const response = await fetch("http://localhost:8080/categories")
    return await response.json()
}

export default async function CategoriesPage() {
    const data: Category[] = await getCategories()

    return (
        <>
            <NavBar active="categorias" />

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold">Categorias</h2>

                    {data.length == 0 ?
                        <p>Nenhuma categoria cadastrada</p> :
                        data.map(category => <CategoryItem key={category.id} category={category} />)
                    }

                </div>
            </main>
        </>
    )
}