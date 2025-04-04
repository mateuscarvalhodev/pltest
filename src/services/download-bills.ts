
import api from './invoicesService';

export async function downloadPDF(id: number): Promise<void> {
  try {
    const response = await api.get(`/energy-bills/${id}/download`, {
      responseType: 'blob',
    })
    const blob = new Blob([response.data], { type: 'application/pdf' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url;
    link.setAttribute('download', `fatura-${id}.pdf`);
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Erro ao baixar o PDF:', error)
  }
}

export async function viewPDF(id: number | string): Promise<void> {
  try {
    const response = await api.get(`/energy-bills/${id}/download`, {
      responseType: 'blob',
    })
    const blob = new Blob([response.data], { type: 'application/pdf' })
    const url = window.URL.createObjectURL(blob)
    window.open(url, '_blank')
  } catch (error) {
    console.error('Erro ao visualizar o PDF:', error)
  }
}