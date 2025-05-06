"use client"
import { login } from "@/actions/user-actions"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useActionState } from "react"

const initialState = {
  error: "",
}

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState)
  
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">CashUp</CardTitle>
          <CardDescription>
            Controle suas finanças de forma simples e rápida
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={pending}>
                Login
              </Button>
              <span className="text-destructive text-sm">
                {state.error}
              </span>
            </div>
            <div className="mt-4 text-center text-sm">
              Ainda não tem conta? {" "}
              <Link href="/signup" className="underline underline-offset-4">
                Crie uma conta
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
