import { Payment } from "@/components/clientsTable/columns";
import api from "./invoicesService";

export type PaymentsData = {
  page: number;
  limit: number;
  clientNumber?: string;
  referenceMonth?: string;
};

export interface PaginatedPayments {
  data: Payment[];
  total: number;
  page: number;
  limit: number;
}

interface ApiResponsePaginatedPayments {
  data: {
    data: Payment[];
    meta: {
      total: number;
      page: number;
      limit: number;
    };
  };
}

export async function getPayments(
  { page, limit, clientNumber, referenceMonth }: PaymentsData = {
    page: 1,
    limit: 10,
  }
): Promise<PaginatedPayments> {
  const response = await api.get<ApiResponsePaginatedPayments>(
    "/energy-bills",
    {
      params: {
        page: String(page),
        limit: String(limit),
        ...(clientNumber && { clientNumber }),
        ...(referenceMonth && { referenceMonth }),
      },
    }
  );

  const paginated: PaginatedPayments = {
    data: response.data.data.data,
    total: response.data.data.meta.total,
    page: response.data.data.meta.page,
    limit: response.data.data.meta.limit,
  };
  console.log("Resposta da API:", paginated);
  return paginated;
}
