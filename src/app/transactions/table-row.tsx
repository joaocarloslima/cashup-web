"use client"

import { deleteTransaction } from "@/actions/transaction-actions";
import CrudDropdown from "@/components/crud-dropdown";
import Icon from "@/components/icon";
import { TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { toast } from "sonner";

interface TransactionsTableRowProps{
    transaction: Transaction
}

export default function TransactionsTableRow({ transaction }: TransactionsTableRowProps) {
    const isExpense = transaction.type === "EXPENSE"
    const color = isExpense ? "text-red-500" : "text-emerald-500"
    const [visible, setVisible] = useState(true)

    function handleDelete() {
        toast.promise(
            deleteTransaction(transaction.id),
            {
                loading: "Apagando...",
                success: () => {
                    setVisible(false)
                    return "Movimentação apagada com sucesso"
                },
                error: (error) => error.message
            }
        )
    }

    if (!visible) return null

    return (
        <TableRow className="border-b-2 border-slate-600">
            <TableCell align="center"><Icon name={transaction.category.icon} /></TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell className="w-1/2">{transaction.description}</TableCell>
            <TableCell className={`text-right ${color}`}>
                {isExpense ? "-" : "+"}
                R$ {transaction.amount}
            </TableCell>
            <TableCell align="center">
                <CrudDropdown onDelete={handleDelete}/>
            </TableCell>
        </TableRow>
    )
}