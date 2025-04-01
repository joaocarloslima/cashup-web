"use client"

import { createCategory } from "@/actions/category-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState= {
    values:{
        name: "",
        icon: ""
    },
    errors:{
        name: "",
        icons: ""
    }
}

export default function CategoryFormPage(){
    const [state, formAction, pending] = useActionState(createCategory, initialState)
    
    return (
        <>
           <NavBar active="categorias" />

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold">Cadastrar Categoria</h2>

                    <form action={formAction} className="space-y-4 mt-4">
                        
                        <div>
                            <Input 
                                name="name" 
                                placeholder="nome da categoria" 
                                aria-invalid={!!state?.errors.name} 
                                defaultValue={state?.values.name}
                            />
                            <span className="text-sm text-destructive">{state?.errors.name}</span>
                        </div>

                        <div>
                            <Input 
                                name="icon" 
                                placeholder="ícone da categoria" 
                                aria-invalid={!!state?.errors.icon}
                                defaultValue={state?.values.icon}
                             />
                            <span className="text-sm text-destructive">{state?.errors.icon}</span>
                        </div>

                        <div className="flex justify-between">
                            <Button asChild variant={"outline"}>
                                <Link href="/categories">
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