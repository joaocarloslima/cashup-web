"use client"
import { GalleryVerticalEnd } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const initialState = {
    values: {
        email: "",
        password: ""
    },  
    errors: {
        email: "",
        password: ""
    }
}

export function SignupForm() {
    
    
    return (
        <div className="flex flex-col gap-6">
            <form  >
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md">
                            <GalleryVerticalEnd className="size-6" />
                        </div>
                        <h1 className="text-xl font-bold">Estamos felizes por você estar aqui</h1>
                        <div className="text-center text-sm">
                            Digite seus dados para criar uma conta
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                
                                placeholder="m@example.com"
                                
                                required
                            />
                            <span className="text-destructive text-sm"></span>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                name="password"
                                id="password"
                                type="password"
                                
                                required
                            />
                            <span className="text-destructive text-sm"></span>
                        </div>
                        <Button className="w-full"  >
                            Criar Conta
                        </Button>
                        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                            <span className="relative z-10 bg-background px-2 text-muted-foreground">
                                ou
                            </span>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Já tem uma conta?{" "}
                            <Link href="/" className="underline underline-offset-4">
                                Faça login
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
