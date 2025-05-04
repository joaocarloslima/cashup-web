import NavBar from "@/components/nav-bar";
import TransactionsTable from "./data-table";
import { getTransactions } from "@/actions/transaction-actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function TransactionsPage() {
    const data = await getTransactions({
        page: 0,
        size: 10,
        sort: "date",
        description: "",
        
    })
    return (
        <>
            <NavBar active="movimentações" />

            <main className="flex justify-center items-center">
                <div className="bg-slate-900 min-w-2/3 p-6 rounded m-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold mb-4" >Movimentações</h2>
                    <Button asChild>
                        <Link href="/transactions/form">
                            <Plus />
                            Nova Movimentação
                        </Link>
                    </Button>

                </div>

                    <TransactionsTable data={data} />
                </div>
            </main>
        </>
    )
}