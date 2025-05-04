import { format } from "date-fns"
import { redirect } from "next/navigation"

const API_URL = "http://localhost:8080/transactions"

interface TransactionFilters{
    page: number,
    size: number,
    sort: string,
    description?: string,
    startDate?: string,
    endDate?: string,
}

export async function getTransactions(filters: TransactionFilters) {
    //await new Promise(resolve => setTimeout(resolve, 2000))
    const params = new URLSearchParams(filters as any)
    const url = new URL(API_URL)
    url.search = params.toString()
    const response = await fetch(url.toString())
    const data = await response.json()
    return data
}

export async function createTransaction(initialState: any, formData: FormData) {
    const data = {
        description: formData.get("description"),
        amount: formData.get("amount"),
        date: format(formData.get("date") as string, 'yyyy-MM-dd'),
        type: formData.get("type"),
        category: {
            id: formData.get("categoryId")
        }
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(API_URL, options)

    if (!response.ok){
        const errors = await response.json()
        return {
            values: {
                description: formData.get("description"),
                amount: formData.get("amount"),
                date: formData.get("date"),
                type: formData.get("type"),
                category: {
                    id: formData.get("category.id"),
                    name: formData.get("category.name"),
                    icon: formData.get("category.icon")
                }
            },
            errors: {
                description: errors.find((e: any) => e.field === "description")?.message,
                amount: errors.find((e: any) => e.field === "amount")?.message,
                date: errors.find((e: any) => e.field === "date")?.message,
                type: errors.find((e: any) => e.field === "type")?.message,
                categoryId: errors.find((e: any) => e.field === "category.id")?.message,
                categoryName: errors.find((e: any) => e.field === "category.name")?.message,
                categoryIcon: errors.find((e: any) => e.field === "category.icon")?.message
            }
        }
    }

    redirect("/transactions")
}

export async function deleteTransaction(id: number) {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(`${API_URL}/${id}`, options)


    if (response.status === 404) {
        throw new Error("movimentação não encontrada")
    }

    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Erro ao apagar categoria");
    }

    
}




