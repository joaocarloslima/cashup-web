'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <main className="flex justify-center items-center">
      <div className="bg-slate-900 min-w-2/3 space-y-4 p-6 rounded m-6">
        <h2 className="text-lg font-bold">Ops, um erro aconteceu</h2>
          <p className="text-destructive">{error.message}</p>

        <div className="flex justify-around gap-4">
          <Button onClick={() => reset()}>
            Tentar novamente
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="/">
              Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </div>

    </main>
  )
}