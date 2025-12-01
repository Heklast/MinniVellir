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

const cld = new Cloudinary({ cloud: { cloudName: 'minnivellir' } });

export default function Home() {

  
 const myvideo = cld.video('HeroSection_nxtjsm');
  return (
     <div className="w-full">
       

      <Header />
      {/* HERO SECTION */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
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
         className="absolute inset-0 w-full h-full object-cover"
      />
       
       {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>*/}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center p-30 text-white bg-black/10 flex-col">
        <h2 style={{ fontFamily: 'Limelight' }} className="text-7xl font-bold ">MV</h2>
        <h2 style={{ fontFamily: 'Julius' }} className="text-[20px]">Minni-Vellir Farmhouse</h2>
        <h2 style={{ fontFamily: 'Julius' }} className="text-[20px]">Experience the South of Iceland</h2>
      </div>
       </section>
      
       <div className="p-5" style={{backgroundColor:'#DAD9D6'}}>
         <div className="bordertexti">
        <h2 style={{fontFamily:"Garamond", fontSize:"20px"}}>Minni Vellir Farmhouse - 851 Hella - Iceland</h2>
        <h3 style={{fontFamily:"Garamond"}}>minnivellir@gmail.com</h3></div>
        </div>
       <section style={{fontFamily:'Garamond',color:'#3D3935'}}>

     { /*main content*/}

     { /*efraaa*/}

      <div className="flex flex-col gap-20 p-0 pt-0">
     


        { /*prófa neðra eftir gordon ramsey*/}
        
        <FadeInOnScroll>
       <div id="farmhouse" className="slider-card">
  <div className="slider-text">
    <p className="pb-5">MINNI-VELLIR</p>
    <h1 className="text-4xl leading-relaxed">The Farmhouse</h1>
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

  <div className="w-full h-[320px] sm:h-[300px] md:h-[350px] shadow-xl overflow-hidden relative">
    <Carousel />
  </div>
</div></FadeInOnScroll>

{/*ACCOMMODATION*/}
<Accommodation ></Accommodation>

<Area ></Area>


{/*THINGS TO DO*/}
<div className="TTD-prof-bg">
<FadeInOnScroll>
<div id="TTD" className="TTD-introo">
<h1 className="pb-0 pt-10 text-center">Things To Do</h1> 
<h3 className="text-xl font-light leading-relaxed"> The area is very lively and there are a lot of things to do. Here are some of the most popular activities that allow you to enjoy your time while you explore the Icelandic nature and what our beautiful country has to offer. </h3>
</div></FadeInOnScroll>

<TTDcard title="Horseback riding" description=" Go horseback riding in the area with our partner Íshestar. You decide the journey, length and sightsees with a tour guide from Íshestar. We provide everything else." imageSrc="https://res.cloudinary.com/minnivellir/image/upload/w_1200,h_800,q_auto,f_auto/20230717_164556_copy_pc8ljh" imageFirst={true} />
<TTDcard title="Bike rides" description="Explore the area on e-mountain bikes with our partner the Bike company." imageSrc="https://res.cloudinary.com/minnivellir/image/upload/w_1200,h_800,q_auto,f_auto/BIKE-COMPANY-_Fredrik-Schenholm-2_n2zktj" imageFirst={false} />
<TTDcard title="Hiking" description="Go on hikes on top of or around one of the beautiful mountains of the area with our dear friend Dóra. Dóra is our next-door neighbour and knows all the mountains like the back of her hand." imageSrc="https://res.cloudinary.com/minnivellir/image/upload/w_1200,h_800,q_auto,f_auto/hike_ykrpot" imageFirst={true} />
  </div>

{/*LOCATION*/}
<LocationSection ></LocationSection>

{/*FOOTER SECTION MEÐ MYNDUM OG CONTACT US*/}
<div className="footer">
{/*<FooterSlider></FooterSlider>*/}
<div className="contactus">
  <div className="contactusText">
  <h1 style={{color:'white'}}>Contact us</h1>
  <h3 className="text-xl font-light leading-relaxed" style={{color:'white', fontWeight:'bold'}}> Please contact us for bookings and/or if you have any questions.</h3>
  </div><ContactUs></ContactUs>
</div>
</div>

      </div>
      </section>
    </div>
    );
}
       