
import  Link  from  'next/link'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const NavbarDesktop = () => {
  return (
    <div className='flex items-center gap-x-5'>
      <div className='flex gap-4 items-center '>
        <Link href='/' className='hover:text-blue-500 cursor-pointer select-none transition-all duration-200 pl-0.5 ease-in-out active:text-blue-800 '>Home</Link>
        <Link href='/about' className='hover:text-blue-500 cursor-pointer select-none transition-all duration-200 ease-in-out active:text-blue-800 '>About</Link>
        <Link href='/services'className='hover:text-blue-500 cursor-pointer select-none transition-all duration-200 ease-in-out active:text-blue-800 '>Services</Link>
        <Link href='/products' className='hover:text-blue-500 cursor-pointer select-none transition-all duration-200 ease-in-out active:text-blue-800 '>Products</Link>
        <Link href='/contact' className='hover:text-blue-500 cursor-pointer select-none transition-all duration-200 ease-in-out active:text-blue-800'>Contact</Link>
      </div>
      <Separator orientation='vertical' className='h-7'/>
      <div className='gap-x-2 flex '>
         <Link href='/login'><Button variant='outline' className='text-primary border-2 border-primary  bg-transparent hover:bg-primary hover:text-white'>Login</Button></Link> 
         <Link href='/signup'><Button >Sign Up</Button></Link> 
      </div>
    </div>
  )
}

export default NavbarDesktop
