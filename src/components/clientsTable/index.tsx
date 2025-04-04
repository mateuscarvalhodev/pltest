import { useEffect, useState } from 'react'
import { Payment, columns } from './columns'
import { DataTable } from './data-table'
import { getPayments, PaymentsData, PaginatedPayments } from '@/services/energy-bills'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([])
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(1)
  const limit = 10

  useEffect(() => {
    const params: PaymentsData = { page, limit }
    getPayments(params)
      .then((result: PaginatedPayments) => {
        setData(result.data)
        setTotal(result.total)
      })
      .catch((error) => {
        console.error('Erro ao buscar faturas:', error)
      })
  }, [page])

  const totalPages = Math.ceil(total / limit)
  console.log('total pages: ', totalPages)

  return (
    <>
      <DataTable columns={columns} data={data} />
      <div className='mt-4'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => setPage((prev) => Math.max(prev - 1, 1))} aria-disabled={page === 1} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => {
              const current = i + 1
              return (
                <PaginationItem key={current}>
                  <PaginationLink onClick={() => setPage(current)} isActive={page === current}>
                    {current}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
            <PaginationItem>
              <PaginationNext onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} aria-disabled={page === totalPages} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}
