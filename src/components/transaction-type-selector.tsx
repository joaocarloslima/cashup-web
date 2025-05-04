import {
    ToggleGroup,
    ToggleGroupItem,
  } from "@/components/ui/toggle-group"
  
  import { ArrowUpCircle, ArrowDownCircle } from "lucide-react"
  
  export default function TransactionTypeSelector() {
    return (
      <ToggleGroup type="single" defaultValue="card" className="gap-4 w-full">
        <ToggleGroupItem
          value="card"
          className="flex flex-col items-center justify-center w-28 h-20 border rounded-lg data-[state=on]:border-primary data-[state=on]:text-white"
        >
          <ArrowDownCircle className="w-6 h-6 mb-2 text-red-400" />
          Despesa
        </ToggleGroupItem>
        <ToggleGroupItem
          value="paypal"
          className="flex flex-col items-center justify-center w-28 h-20 border rounded-lg data-[state=on]:border-primary data-[state=on]:text-white"
        >
          <ArrowUpCircle className="w-6 h-6 mb-2 text-emerald-500" />
          Receita
        </ToggleGroupItem>
        
      </ToggleGroup>
    )
  }
  