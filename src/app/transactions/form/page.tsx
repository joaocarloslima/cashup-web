"use client"

import { getCategories } from "@/actions/category-actions";
import { createTransaction } from "@/actions/transaction-actions";
import NavBar from "@/components/nav-bar";
import TransactionTypeSelector from "@/components/transaction-type-selector";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Command } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ca } from "date-fns/locale";
import { ArrowLeft, CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";

const initialState = {
    values: {
        description: "",
        amount: 0,
        date: Date.now(),
        type: "EXPENSE",
        category: {
            id: 0,
            name: "",
            icon: ""
        }
    },
    errors: {
        description: "",
        amount: "",
        date: "",
        type: "",
        category: ""
    }
}

export default function TransactionsFormPage() {
    const [open, setOpen] = useState(false)
    const [categoryName, setCategoryName] = useState("")
    const [categoryId, setCategoryId] = useState(0)
    const [date, setDate] = useState(Date.now())

    const [state, formAction, pending] = useActionState(createTransaction, initialState)
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            setCategories(await getCategories())
        };
        fetchCategories();
        setCategoryName(categories[0]?.name)
    }, []);

    useEffect(() => {
        const selectedCategory = categories.find((category) => category.name === categoryName);
        if (selectedCategory) {
            setCategoryId(selectedCategory.id);
        }
    }, [categoryName, categories]);


    return (
        <>
            <NavBar active="movimentações" />

            <main className="flex justify-center items-center">
                <div className="bg-slate-900 min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold" >
                        Cadastrar Movimentação
                    </h2>

                    <form action={formAction} className="space-y-4 mt-6">
                        <div>
                            <Input
                                name="description"
                                placeholder="descreva a movimentação"
                                aria-invalid={!!state?.errors.description}
                                defaultValue={state?.values.description}

                            />
                            <span className="text-sm text-destructive">{state?.errors.description}</span>
                        </div>

                        <div className="flex gap-4 justify-between">
                            <div className="w-full">
                                <Input
                                    name="amount"
                                    type="number"
                                    step="0.01"
                                    min={0}
                                    placeholder="valor da movimentação"
                                    aria-invalid={!!state?.errors.amount}
                                    defaultValue={state?.values.amount}

                                />
                                <span className="text-sm text-destructive">{state?.errors.amount}</span>

                            </div>
                            <div>
                                <Input
                                    name="date"
                                    type="hidden"
                                    defaultValue={date}
                                />

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] justify-start text-left font-normal",
                                                !state.values.date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon />
                                            {date ? format(date, "dd/MM/yyyy") : <span>Data</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <span className="text-sm text-destructive">{state?.errors.date}</span>
                            </div>


                            <div>
                                <Input
                                    name="categoryId"
                                    type="hidden"
                                    defaultValue={categoryId}
                                />
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-[200px] justify-between"
                                        >
                                            {categoryName
                                                ? categories.find((category) => category.name === categoryName)?.name
                                                : "Selecione uma categoria"}
                                            <ChevronsUpDown className="opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Buscar categoria" className="h-9" />
                                            <CommandList>
                                                <CommandEmpty>Nenhuma categoria encontrada</CommandEmpty>
                                                <CommandGroup>
                                                    {categories.map((category) => (
                                                        <CommandItem
                                                            key={category.name}
                                                            value={category.name}
                                                            onSelect={(currentValue) => {
                                                                setCategoryName(currentValue === categoryName ? "" : currentValue)
                                                                setOpen(false)
                                                            }}
                                                        >
                                                            {category.name}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    categoryName === category.name ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>


                        <div>
                            <TransactionTypeSelector />
                        </div>



                        <div className="flex justify-around">
                            <Button variant="outline" asChild>
                                <Link href="/transactions">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button>
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}