import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'

export type Payment = {
  id: number | string
  clientNumber: string
  referenceMonth: string
  dueDate: string
  client: {
    name: string
  }
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'clientNumber',
    header: 'Código do cliente',
  },
  {
    accessorFn: (row) => row.client?.name || 'N/A',
    id: 'name',
    header: 'Nome do cliente',
  },
  {
    accessorKey: 'referenceMonth',
    header: 'Mês de Referência',
  },
  {
    accessorKey: 'dueDate',
    header: 'Data de Vencimento',
    cell: ({ row }) => {
      const date = new Date(row.getValue('dueDate'))
      return date.toLocaleDateString('pt-BR')
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(payment.id))}
            >
              Copiar código de barras
            </DropdownMenuItem>
            <DropdownMenuItem>Visualizar PDF</DropdownMenuItem>
            <DropdownMenuItem>Fazer Download do PDF</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
