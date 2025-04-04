import DemoPage from '@/components/clientsTable';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'
import { NavLink } from 'react-router';


export default function clientsPage() {
  return (
    <>
      <div className='m-2 flex items-center gap-2'>
        <NavLink
          to='/'
          className='bg-violet-600 p-2 rounded-xl flex items-center justify-center h-10'>
          <ArrowLeft className='w-5 h-5 text-white' />
        </NavLink>
        <Button className='bg-red-300 text-white px-4 h-10 rounded-xl flex items-center'>
          Adicionar cliente
        </Button>
      </div>
      <div className='p-2'>
        <DemoPage />
      </div>
    </>
  )
}