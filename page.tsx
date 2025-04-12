import { flows } from "@/app/data/flows"
import { FlowCard } from "@/components/flow-card"
import { Button } from "@/components/ui/button"
import { Plus, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function FlowsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">AI Flows</h2>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem checked>Show Running</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Show Completed</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Show Failed</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Show Pending</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Show Paused</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Flow
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {flows.map((flow) => (
          <FlowCard key={flow.id} flow={flow} />
        ))}
      </div>
    </div>
  )
}
