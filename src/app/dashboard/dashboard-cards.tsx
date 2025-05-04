import { Sparkles, TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function DashbooardCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-2 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card rounded-2xl">
        <CardHeader className="relative">
          <CardDescription>Total de Receitas</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            R$ 1250.00
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Análise<Sparkles className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Você ganhou 20% a mais do que o mês passado
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card rounded-2xl">
        <CardHeader className="relative">
          <CardDescription>Total de Despesas</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            R$ 1234,00
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Análise <Sparkles className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Suas despesas estão diminuindo
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card rounded-2xl">
        <CardHeader className="relative">
          <CardDescription>Maior Despesa</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            R$ 4567,86
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Análise
          </div>
          <div className="text-muted-foreground">
            Seu maior gasto é com Educação
        </div>
        </CardFooter>
      </Card>
      <Card className="@container/card rounded-2xl">
        <CardHeader className="relative">
          <CardDescription>Saúde Financeira</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            74%
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Análise <Sparkles className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Reduza gastos com alimentação fora de casa  
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
