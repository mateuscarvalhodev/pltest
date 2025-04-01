// services/invoiceService.ts
import { invoicesMock } from '../mocks/invoicesMock'

export async function fetchInvoices(): Promise<typeof invoicesMock> {
  // return await axios.get('/api/invoices');
  return new Promise((resolve) => {
    setTimeout(() => resolve(invoicesMock), 300)
  });
}
