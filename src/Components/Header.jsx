import ABLogo from './../assets/AB Shoes Logo.svg'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <header className="fixed z-50 w-full">
        <div className="w-full bg-dark-blue py-2">
            <div className="w-fit mx-auto text-white text-xs md:text-sm">
                <p>Shipping free for orders above $50</p>
            </div>
        </div>

        <div className='w-full bg-white flex flex-row justify-start md:justify-center items-center px-10 lg:px-32 py-8'>
            <div className='w-fit'>
                <img src={ABLogo} alt="Site Logo" className='cursor-pointer h-6 md:h-full' />
            </div>

            <ul className='hidden md:block w-full md:flex flex-row justify-center items-center gap-x-[3rem] font-semibold'>
                <li className='cursor-pointer'>MEN</li>
                <li className='cursor-pointer'>WOMEN</li>
                <li className='cursor-pointer'>NEW ARRIVALS</li>
            </ul>

            <ul className='hidden w-fit md:flex flex-row justify-end items-center gap-x-[3rem]'>
                <li className='cursor-pointer'><PersonOutlineIcon /></li>
                <li className='cursor-pointer'><ShoppingCartIcon /></li>
            </ul>

            <div className='text-black ml-auto cursor-pointer md:hidden'>
                <MenuIcon />
            </div>
        </div>
    </header>
  )
}