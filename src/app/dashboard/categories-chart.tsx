"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { category: "Educação", total: 5784 },
  { category: "Alimentação", total: 3555 },
  { category: "Transporte", total: 2547 },
  { category: "Lazer", total: 987 },
  { category: "Moradia", total: 2100 },
]

const chartConfig = {
  total: {
    label: "Total",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function CategoriesChart() {
  return (
    <Card className="w-full rounded-2xl mt-6">
      <CardHeader>
        <CardTitle>Depesas por Categoria</CardTitle>
        <CardDescription>No mês atual</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="total" fill="var(--primary)" radius={8}  />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
