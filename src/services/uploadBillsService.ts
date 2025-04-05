import api from './invoicesService'

export async function uploadEnergyBill(file: File): Promise<any> {
  const formData = new FormData()
  formData.append('file', file)

  const response = await api.post('/energy-bills/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response.data
}