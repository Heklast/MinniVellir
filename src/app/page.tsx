"use client";
import Image from "next/image";
import Header from "./components/header";
import Gallery from "./photos";
import FadeInOnScroll from "./components/scroll";
import { FadeInOnScrollFast } from "./components/scroll";
import Carousel from "./components/slidePics";
import Accommodation from "./components/accommodationSection";
import ContactUs from "./components/contactUsForm";
import FooterSlider from "./components/footerSlider";
import Link from "next/link";
import TTDcard from "./components/TTDcard";
import LocationSection from "./components/locationSection";
import Area from './components/area'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, responsive, placeholder, AdvancedVideo } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { dpr, format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as fAuto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as qAuto } from "@cloudinary/url-gen/qualifiers/quality";
import { p } from "framer-motion/client";

const cld = new Cloudinary({ cloud: { cloudName: 'minnivellir' } });

export default function Home() {

  
 const myvideo = cld.video('HeroSection_nxtjsm');
 const farmhousePic=cld.image('ICE_6287-copy-scaled_srg3qp'); //ekki ahfa harðkoðað?
  return (
     <div className="w-full">
       

      <Header />
      {/* HERO SECTION */}
      <section id="home" className="relative w-full h-screen md:overflow-hidden">
       {/* <Image
          className="mynd"
          src="/image.png"
          alt="minni vellir"
          fill
          style={{ objectFit: 'cover', boxShadow:'initial' }}
          priority
        />*/}
        
       <AdvancedVideo
        cldVid={myvideo}
        autoPlay muted loop playsInline
         className="hero"
      />
       
       {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>*/}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center p-30 text-white bg-black/10 flex-col">
        <h2 style={{ fontFamily: 'Limelight' }} className="text-7xl font-bold ">MV</h2>
        <h2 style={{ fontFamily: 'Julius' }} className="text-[20px] text-center md:text-[20px]">Minni-Vellir Farmhouse</h2>
        <h2 style={{ fontFamily: 'Julius' }} className="text-[15px] text-center md:text-[20px]">Experience the South of Iceland</h2>
      </div>
       </section>
      
       <div className="p-5" style={{backgroundColor:'black'}}>
         <div className="bordertexti">
          <h2 style={{fontFamily:"Garamond", fontSize:"20px"} } className="text-[20px] block md:hidden text-center">
        Minni Vellir Farmhouse <br></br>
        851 Hella - Iceland
</h2>
        <h2 style={{fontFamily:"Garamond", fontSize:"20px"} } className="text-[20px] hidden md:block">Minni Vellir Farmhouse - 851 Hella - Iceland</h2>
        </div>
        </div>
       <section style={{fontFamily:'Garamond',color:'#3D3935'}}>

     { /*main content*/}

     { /*efraaa*/}

      <div className="flex flex-col gap-20 p-0 pt-0">
    
        { /*prófa neðra eftir gordon ramsey*/}
        
        <FadeInOnScroll>
       <div id="farmhouse" className="slider-card flex flex-col-reverse md:flex-row">
  <div className="slider-text">
    
    <h1 className="text-4xl leading-relaxed">The Old Farmhouse</h1>
    <p className="text-xl font-light leading-relaxed">
      
      According to ancient tales, the Minni-Vellir farm in Landsveit was first
      settled around 900 AD and has been inhabited, more-or-less continuously,
      ever since. The last residents of the old farmhouse were two brothers and
      their sister, who lived here for over fifty years, caring for the land and
      keeping its quiet traditions alive. <br /><br />

      The recently renovated farmhouse preserves its authentic charm while
      offering modern comfort and coziness. Inside, you’ll find a warm and
      inviting atmosphere — perfect for relaxing after a day of exploring the
      natural wonders of southern Iceland.
    </p>
  </div>

  <div className="">
    <AdvancedImage
          className="mynd"
          cldImg={farmhousePic}
          alt="minni vellir"
          fill
          style={{ objectFit: 'cover', boxShadow:'initial' }}
          priority
        />
  </div>
</div></FadeInOnScroll>

{/*ACCOMMODATION*/}
<Accommodation ></Accommodation>

<Area ></Area>


{/*THINGS TO DO*/}
<div className="TTD-prof-bg">
<FadeInOnScroll>
<div id="TTD" className="TTD-introo pl-10 pr-5 md:pr-20 md:pl-20 md:py-2 scroll-mt-10"
  >
<h1 className="pb-0 pt-10 md:text-center">Things To Do</h1> 
<h3 className="text-xl font-light leading-relaxed"> The area is very lively and there are a lot of things to do. Here are some of the most popular activities that allow you to enjoy your time while you explore the Icelandic nature and what our beautiful country has to offer. </h3>
</div></FadeInOnScroll>

<TTDcard title="Horseback riding" description={ <>
      Explore the area on horseback with our partner, Íshestar.  The area is reputed for the quality and variety of its riding paths.  Regardless of your riding experience, our partner 
      <a href="https://ishestar.is" target="_blank" rel="noopener noreferrer" style={{color: "brown"}}> 
       {" "} Íshestar {" "}
      </a> 
        will help provide an unforgettable experience.  You decide the length and pace of the ride with a tour guide and Íshestar and the amazing Icelandic horses take care of the rest.
    </>} imageSrc="https://res.cloudinary.com/minnivellir/image/upload/w_1200,h_800,q_auto,f_auto/20230717_164556_copy_pc8ljh" imageFirst={true} />
<TTDcard title="Bike rides" description={ <>
      Explore the area on e-mountain bikes with our partner
      <a href="https://bikecompany.is" target="_blank" rel="noopener noreferrer" style={{color: "brown"}}>
       {" "} Bike Company.
      </a>
    </>} imageSrc="https://res.cloudinary.com/minnivellir/image/upload/w_1200,h_800,q_auto,f_auto/BIKE-COMPANY-_Fredrik-Schenholm-2_n2zktj" imageFirst={false} />
<TTDcard title="Hiking" description="Go on hikes on top of or around one of the beautiful mountains of the area with our dear friend and next door neighbor, Dóra.  She knows the area and all the mountains as the back of her hand." imageSrc="https://res.cloudinary.com/minnivellir/image/upload/w_1200,h_800,q_auto,f_auto/hike_ykrpot" imageFirst={true} />
  </div>

{/*LOCATION*/}
<LocationSection ></LocationSection>

{/*FOOTER SECTION MEÐ MYNDUM OG CONTACT US*/}
<div className="footer">
  <div className="contactus  md:flex-row flex flex-col gap-8 md:items-start">
    <div className="contactusText w-full md:w-1/2 space-y-4">
      <h1 className="text-white text-3xl md:text-4xl font-semibold">Contact us</h1>
      <h3 className="text-white text-base md:text-lg font-light leading-relaxed">
        Please contact us for bookings and/or if you have any questions.
      </h3>
    </div>

    <div className="w-full md:w-1/2">
      <ContactUs />
    </div>
  </div>
</div>

      </div>
      </section>
    </div>
    );
}
       