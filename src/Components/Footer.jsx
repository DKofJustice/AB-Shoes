import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import LogoWhite from "../assets/AB Shoes Logo White.svg"

export default function Footer() {
  return (
    <div className='bg-dark-blue flex flex-col justify-center items-center py-[5rem] gap-[7rem]'>
      <div className='text-white w-full max-w-[100rem] flex flex-row 
      justify-start items-center flex-wrap gap-[3rem] px-[2rem]'>
        <ul className='md:w-full max-w-[25rem] flex flex-col gap-[1rem]'>
          <li className='text-[1.3rem] font-semibold'>Contact</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>contact@abshoes.com</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Call us</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>FAQ / Contact Us</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Returns</li>
        </ul>

        <ul className='md:w-full max-w-[25rem] flex flex-col gap-[1rem]'>
          <li className='text-[1.3rem] font-semibold'>Shop</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Men’s Shoes</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Women’s Shoes</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Men’s Apparel</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Women’s Apparel</li>
        </ul>

        <ul className='md:w-full max-w-[25rem] flex flex-col gap-[1rem]'>
          <li className='text-[1.3rem] font-semibold'>Help</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Our stores</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Our Story</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Terms and Conditions</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Partnerships</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Cookie Policy</li>
          <li className='text-white/60 cursor-pointer hover:text-white'>Careers</li>
        </ul>

        <ul className='w-full max-w-[25rem] flex flex-col gap-[1rem]'>
          <li className='text-[1.3rem] font-semibold'>Follow us on</li>
          <ul className='w-full flex flex-row gap-[1rem]'>
            <li className='cursor-pointer'><TwitterIcon/></li>
            <li className='cursor-pointer'><InstagramIcon/></li>
            <li className='cursor-pointer'><PinterestIcon/></li>
            <li className='cursor-pointer'><FacebookIcon/></li>
          </ul>
        </ul>

        <div>
          <img src={LogoWhite} alt="" />
        </div>
      </div>

      <div>
        <p className='text-white/60'>© 2022 AB Shoes, B.V. All Rights Reserved.</p>
      </div>
    </div>
  )
}