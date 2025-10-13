import Image from "next/image";
import Header from "./components/header";
import Gallery from "./photos";
import FadeInOnScroll from "./components/scroll";
import { FadeInOnScrollFast } from "./components/scroll";
import Carousel from "./components/slidePics";
import ThingsToDo from "./components/thingsToDoSlider";
import ContactUs from "./components/contactUsForm";
import FooterSlider from "./components/footerSlider";
import Link from "next/link";

export default function Home() {
  return (
     <div className="w-full">

      <Header />
      {/* HERO SECTION */}
      <section className="relative w-full h-screen">
       {/* <Image
          className="mynd"
          src="/image.png"
          alt="minni vellir"
          fill
          style={{ objectFit: 'cover', boxShadow:'initial' }}
          priority
        />*/}
        <video src="https://res.cloudinary.com/ddnepgvbc/video/upload/v1760094569/HeroSection_nxtjsm.mp4" autoPlay muted loop playsInline></video>
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
       <section>

     { /*main content*/}

     { /*efraaa*/}

      <div style={{fontFamily: 'Garamond' ,color:'#6D706C'}} className="flex flex-col gap-20 p-0 pt-0">
     


        { /*prófa neðra eftir gordon ramsey*/}
        
        <FadeInOnScroll>
        <div className="slider-card">
        <div className="slider-text">
        <p id="farmhouse" className="pb-5" style={{fontFamily:'Garamond', color:'#3D3935'}}>MINNI-VELLIR</p>
        <h1  style={{fontFamily:'Garamond'}} className="text-4xl leading-relaxed" >The Farmhouse</h1>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}> Minni-Vellir Farmhouse offers comfortable accommodation for up to 10 people. Minni-Vellir Farmhouse offers comfortable accommodation for up to 10 people.</h3>
        </div>  
   
       <div className="pt-0 mt-12 min-w-[900px] h-[450px] shadow-xl overflow-hidden relative">
  <Carousel />
</div></div></FadeInOnScroll>

<FadeInOnScroll>
<div className="pl-10">
  <div className="pb-10">
<ThingsToDo ></ThingsToDo></div></div></FadeInOnScroll>

<div className="TTD-prof-bg">
<FadeInOnScroll>
<div className="TTD-introo">
<h1 style={{fontFamily:'Garamond'}} className="pb-0 pt-10 text-center">Things To Do</h1> 
<h5 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}> The area is very lively and there are a lot of things to do. Here are some of the most popular activities that allow you to enjoy your time while you explore the Icelandic nature and what our beautiful country has to offer. </h5>
</div></FadeInOnScroll>
<FadeInOnScroll>
 <div className="TTD-card">
        <div className="TTD-text">

        <h1  style={{fontFamily:'Garamond'}} className="text-4xl leading-relaxed" >Horseback riding</h1>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}> Go horseback riding in the area with our partner íshestar. You decide the journey, length and sightsees with a tour guide from íshestar. We provide everything else.</h3>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}> Let us know if you want to go horse riding!</h3>
        <button className="TTD-button"> 
          <a href='#contactus'>Contact us</a></button></div>  
   
       <div className="TTD-image">
        <img src="/image.png"></img>
</div></div></FadeInOnScroll>

<FadeInOnScroll>
<div className="TTD-card">
  <div className="TTD-image">
        <img src="/image.png"></img>
</div>
        <div className="TTD-text">
        <h1  style={{fontFamily:'Garamond'}} className="text-4xl leading-relaxed" >Bike rides</h1>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}> Explore the area on mountain bikes with our partner Bikes. You decide the journey, length and sightsees with a tour guide from Bikes. We provide everything else.</h3>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}> Let us know if you want to go on a bike trip!</h3>
        <button className="TTD-button"> 
          <a href='#contactus'>Contact us</a></button>
        </div>  
   
       </div>
       </FadeInOnScroll>

<FadeInOnScroll>
       <div className="TTD-card">
        <div className="TTD-text">

        <h1  style={{fontFamily:'Garamond'}} className="text-4xl leading-relaxed" >Hiking</h1>
        <h4 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}> Go on hikes on one of the beautiful mountains that surround the area with our dear friend Dóra. Dóra lives in the neighbourhood and knows all the mountains like the back of her hand.</h4>
        <h4 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}> Let us know if you want to go hiking!</h4>
        <button className="TTD-button"> 
          <a href='#contactus'>Contact us</a></button></div>  
   
       <div className="TTD-image">
        <img src="/image.png"></img>
</div></div></FadeInOnScroll></div>

{/*prófa location í TTD card*/}
<FadeInOnScroll>
<div className="TTD-card ">
  <div className="TTD-image">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.9376583668693!2d-20.22119742317767!3d63.98535687719389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d6ea3b46186fc1%3A0x3d0b3160ae87163c!2sMinni%20Vellir%20Farmhouse!5e0!3m2!1sen!2sis!4v1753712914686!5m2!1sen!2sis" 
          width="800" 
          height="400" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
</div>

        <div className="TTD-text">
           <p id="location" className="pb-5" style={{fontFamily:'Garamond', color:'#3D3935'}}>SOUTH ICELAND</p>
          <h1  className="text-4xl leading-relaxed" style={{ fontFamily: 'Garamond',color:'#3D3935', fontWeight:'500',  letterSpacing:'0.1em'}}>Location</h1>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}>Located in the South of Iceland at the heart of the farmers side of Iceland, Minni-Vellir provides guests with a beautiful scenery, pristine rivers, mountains and lands all around.   </h3>
        </div>
        </div>
</FadeInOnScroll>

<div className="footer">
<FooterSlider></FooterSlider>
<div className="contactus">
  <div className="contactusText">
  <h1 style={{color:'black', fontFamily:'Garamond'}}>Contact us</h1>
  <h3 className="text-xl font-light leading-relaxed" style={{color:'black', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}> Please contact us for bookings and/or if you have any questions.</h3>
  </div><ContactUs></ContactUs>
</div>
</div>

      </div>
      </section>
    </div>
    );
}
       