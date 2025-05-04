"use client"

import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarTrigger
} from "@/components/ui/menubar"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink
} from "@/components/ui/pagination"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Calendar as CalendarIcon, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ptBR } from "date-fns/locale"

import { getTransactions } from "@/actions/transaction-actions"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import TransactionsTableRow from "./table-row"
import { Input } from "@/components/ui/input"
import { DateRange } from "react-day-picker"
import { format } from "date-fns/format"

interface TransactionsTableProps {
    data: {
        content: Transaction[],
        totalPages: number,
        page: number,
        first: boolean,
        last: boolean,
    }

}

export default function TransactionsTable({ data }: TransactionsTableProps) {
    const [transactions, setTransactions] = useState<Transaction[]>(data.content)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const [totalPages, setTotalPages] = useState(data.totalPages)
    const [sort, setSort] = useState("date")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState<DateRange | undefined>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const startDateParam = date?.from ? format(date.from, "yyyy-MM-dd") : ""
        const endDateParam = date?.to ? format(date.to, "yyyy-MM-dd") : ""
        getTransactions({ page, size, sort, description, startDate: startDateParam, endDate: endDateParam })
            .then(data => {
                setTransactions(data.content)
                setPage(data.number)
                setSize(data.size)
                setTotalPages(data.totalPages)
                setIsLoading(false)
            })
            .catch(error => {
                console.error("Error fetching transactions:", error)
                setIsLoading(false)
            })

    }, [page, size, sort, description, date])

    return (
        <>
            <div>
                <Input 
                    placeholder="Filtrar por descrição..." 
                    className="mb-4" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd/LLL/y", {locale: ptBR})} -{" "}
                  {format(date.to, "dd/LLL/y", {locale: ptBR})}
                </>
              ) : (
                format(date.from, "dd/LLL/y", {locale: ptBR})
              )
            ) : (
              <span>Selecione uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
            </div>

            <Table>
                <TableCaption>
                    <Pagination>
                        <PaginationContent className="space-x-4">
                            <PaginationItem onClick={() => setPage(page - 1)} hidden={page === 0}>
                                <PaginationLink>
                                    <ChevronLeft />
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                {page + 1}/{totalPages}
                            </PaginationItem>
                            <PaginationItem onClick={() => setPage(page + 1)} hidden={page === totalPages - 1}>
                                <PaginationLink>
                                    <ChevronRight />
                                </PaginationLink>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </TableCaption>
                <TableHeader >
                    <TableRow className="border-b-2 border-slate-600">
                        <TableHead>Categoria</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead className="w-4/6">Descrição</TableHead>
                        <TableHead className="text-right">Valor</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isLoading ? (
                        <TableRow className="border-b-2 border-slate-600">
                            <TableCell colSpan={4} className="text-center">
                                Carregando...
                            </TableCell>
                        </TableRow>
                    ) : transactions.length === 0 ? (
                        <TableRow className="border-b-2 border-slate-600">
                            <TableCell colSpan={4} className="text-center">
                                Nenhuma transação encontrada.
                            </TableCell>
                        </TableRow>
                    ) : (
                        transactions.map(transaction => (
                            <TransactionsTableRow key={transaction.id} transaction={transaction} />
                        ))
                    )}
                </TableBody>
            </Table>
            <Menubar className="bg-slate-800 my-4">
                <MenubarMenu>
                    <MenubarTrigger>Ordenar por <ChevronDown size={16} /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarRadioGroup value={sort} onValueChange={setSort}>
                            <MenubarRadioItem value="date">Data</MenubarRadioItem>
                            <MenubarRadioItem value="description">Descrição</MenubarRadioItem>
                            <MenubarRadioItem value="amount">Valor</MenubarRadioItem>
                        </MenubarRadioGroup>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Registros por página <ChevronDown size={16} /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarRadioGroup value={size.toString()}>
                            <MenubarRadioItem value="5" onClick={() => setSize(5)}>5</MenubarRadioItem>
                            <MenubarRadioItem value="10" onClick={() => setSize(10)}>10</MenubarRadioItem>
                            <MenubarRadioItem value="20" onClick={() => setSize(20)}>20</MenubarRadioItem>
                        </MenubarRadioGroup>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>

    )
}
