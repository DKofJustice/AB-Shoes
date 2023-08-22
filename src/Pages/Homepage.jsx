import { useState, useEffect } from "react"
import client from '../Contentful/index'
import FavoritesThumbnail from "../Components/FavoritesThumbnail";
import NewArrivalThumbnail from "../Components/NewArrivalThumbnail"
import NatureImage1 from "../assets/shoes-g455b3e3d8_1280 (1) 1.jpg"
import NatureImage2 from "../assets/shoes-gc2b3eab5a_1280 (1) 1.jpg"
import NatureImage3 from "../assets/walking-g5e1d978e9_1280 (1) 1.jpg"
import Leaf1 from "../assets/mdi_leaf.svg"
import Leaf2 from "../assets/solar_leaf-bold.svg"
import NewsletterImage from "../assets/NewsletterImage.jpg"

export default function Homepage() {

  const [favoritesData, setFavoritesData] = useState([]);
  const [newArrivalsData, setNewArrivalsData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [banner2Data, setBanner2Data] = useState([]);
  


  useEffect(() => {
    client.getEntries({ 
      content_type: 'product',
      'fields.collection': 'Favorites',
    })
    .then((response) => setFavoritesData(response.items))
    .catch(console.error)
  }, []);


  useEffect(() => {
    client.getEntries({ content_type: 'banner' })
    .then((response) => setBannerData(response.items))
    .catch(console.error)
  }, []);

  useEffect(() => { 
    client.getEntries({ content_type: 'banner2' })
    .then((response) => setBanner2Data(response.items))
    .catch(console.error)
  }, []);

  useEffect(() => {
    client.getEntries({ 
      content_type: 'product',
      'fields.collection': 'New Arrival',
    })
    .then((response) => setNewArrivalsData(response.items))
    .catch(console.error)
  }, []);

  console.log(banner2Data);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="w-full overflow-hidden h-screen md:max-h-screen">
        {bannerData.length > 0 && (
            <img
              src={bannerData[0].fields.bannerImage.fields.file.url}
              alt="banner-1"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="absolute w-full bottom-[10rem] md:left-[10rem] flex flex-col justify-start items-start
        gap-[2rem] px-[4rem] md:px-0">
          <h1 className="text-white font-semibold text-[1.3rem] md:text-[2rem]">Fast Paced Shoes</h1>
          <p className="text-white font-lemon text-xs md:text-base">Lorem Ipsum is simply dummy text</p>
          <button className="px-[1.6rem] md:px-[3rem] py-[0.5rem] bg-white rounded-md font-semibold
          text-xs md:text-base">SHOP NOW</button>
        </div>
      </div>




      <div className="py-[10rem] flex flex-col justify-start items-center gap-[6rem]">
        <h2 className="text-[1rem] md:text-[1.5rem] font-bold">OUR FAVORITES</h2>

        <ul className="w-full max-w-[90rem] md:px-[3rem] flex flex-row justify-center items-center 
        gap-[1rem] md:gap-[3rem] flex-wrap md:flex-nowrap">
          { favoritesData.map(favorite => {
            const { thumbnail, title } = favorite.fields;

            return <li key={favorite.sys.id}>
              <FavoritesThumbnail thumbnail={thumbnail.fields.file.url} title={title} />
              </li>
          }) }
        </ul>
      </div>



      <div className="relative">
        <div className="overflow-hidden h-screen md:max-h-screen">
         {banner2Data.length > 0 && (
            <img
              src={banner2Data[0].fields.banner.fields.file.url}
              alt="banner-2"
              className="w-full h-full object-cover"
            />
          )}
        </div>

          <div className="w-full bg-yellow absolute bottom-0 left-0 flex flex-col
            justify-start items-start">
            <div className="py-[5rem] relative md:left-[10rem] flex flex-col justify-start items-start
            gap-[2rem] px-[4rem] md:px-0">
              <h2 className="font-semibold text-[1.3rem] md:text-[2rem]">Fast paced shoes</h2>
              <p className="font-lemon text-xs md:text-base">Lorem Ipsum is simply dummy text</p>
              <button className="px-[1.6rem] py-[0.5rem] bg-black text-white rounded-md font-semibold
              md:px-[3rem] text-xs md:text-base">Shop Now</button>
            </div>
          </div>
      </div>




      <div className="py-[10rem] flex flex-col justify-start items-center gap-[6rem]">
        <h2 className="text-[1rem] md:text-[1.5rem] font-bold">New Arrivals</h2>

        <ul className="w-full max-w-[90rem] md:px-[3rem] flex flex-row justify-center items-center 
        gap-[1rem] md:gap-[3rem] flex-wrap md:flex-nowrap">
          { newArrivalsData.map(arrival => {
            const { thumbnail, title } = arrival.fields;

            return <li key={arrival.sys.id}>
              <NewArrivalThumbnail thumbnail={thumbnail.fields.file.url} title={title} />
              </li>
          }) }
        </ul>
      </div>




      <div className="py-[10rem] w-full flex flex-col justify-center items-center gap-[3rem]">
        <ul className="w-full max-w-full overflow-hidden flex flex-row justify-center items-center
        gap-[1rem]">
          <li><img src={NatureImage1} alt="" /></li>
          <li><img src={NatureImage2} alt="" /></li>
          <li><img src={NatureImage3} alt="" /></li>
        </ul>

        <ul className="w-full flex flex-row justify-center items-center gap-[3rem] md:gap-[8rem]">
          <li className="bg-[#FBEEEE] p-[1rem] md:p-[1.5rem] rounded-[50%]"><img src={Leaf1} alt="" /></li>
          <li className="bg-[#FBEEEE] p-[1rem] md:p-[1.5rem] rounded-[50%]"><img src={Leaf2} alt="" /></li>
          <li className="bg-[#FBEEEE] p-[1rem] md:p-[1.5rem] rounded-[50%]"><img src={Leaf1} alt="" /></li>
        </ul>

        <h2 className="text-[1rem] md:text-[1.5rem] font-bold">Information about recycling materials</h2>
        <p className="text-xs md:text-base text-black/60">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>

      <div className="relative w-full">
        <div className="w-full h-full absolute flex flex-row justify-center items-center overflow-hidden">
          <img src={NewsletterImage} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative py-[5rem] px-[3rem] w-full h-full flex flex-col justify-center items-center gap-[2rem]">
          <h2 className="text-white font-semibold text-[1rem] md:text-[1.5rem] text-center">WANT TO RECEIVE NEWS ABOUT OUR PRODUCTS?</h2>
          <p className="text-white font-semibold text-xs md:text-base text-center max-w-[40rem]">Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry&apos;s standard</p>
          <div className="pt-[3rem] w-full flex flex-col md:flex-row justify-center items-center gap-[2rem]">
            <input 
            type="text"
            placeholder="Enter your email here"
            className="w-[20rem] py-[0.5rem] border-b-2 border-black px-[3rem] placeholder:text-xs md:placeholder:text-base" 
            />
            <button className="px-[3rem] py-[0.5rem] text-xs md:text-base text-white font-semibold bg-dark-blue">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}