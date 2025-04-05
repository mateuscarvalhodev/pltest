import { useRef } from 'react';
import DemoPage from '@/components/clientsTable';
import { Button } from '@/components/ui/button';
import { uploadEnergyBill } from '@/services/uploadBillsService';
import { ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router';

export default function ClientsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      try {
        const result = await uploadEnergyBill(file);
        console.log('Upload successful:', result);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <>
      <div className="m-2 flex items-center gap-2">
        <NavLink
          to="/"
          className="bg-violet-600 p-2 rounded-xl flex items-center justify-center h-10"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </NavLink>
        <Button
          onClick={handleUploadClick}
          className="bg-red-300 text-white px-4 h-10 rounded-xl flex items-center"
        >
          Adicionar Boleto
        </Button>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="application/pdf"
        />
      </div>
      <div className="p-2">
        <DemoPage />
      </div>
    </>
  );
}