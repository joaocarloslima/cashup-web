import NavBar from "@/components/nav-bar";

export default function TransactionsPage(){
    return (
        <>
            <NavBar active="movimentações" />

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold">Movimentações</h2>
                </div>
            </main>
        </>
    )
}