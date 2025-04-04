// services/invoiceService.ts
import { invoicesMock } from '../mocks/invoicesMock'

export async function fetchInvoices(): Promise<typeof invoicesMock> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(invoicesMock), 300)
  });
}
