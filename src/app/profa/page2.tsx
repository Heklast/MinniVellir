import Image from "next/image";
import Header from "../components/header";
import Gallery from "../photos";
import FadeInOnScroll from "../components/scroll";
import { FadeInOnScrollFast } from "../components/scroll";
import Carousel from "../components/slidePics";
import ThingsToDo from "../components/thingsToDoSlider";
import ContactUs from "../components/contactUsForm";
import FooterSlider from "../components/footerSlider";
import Link from "next/link";

export default function Home() {
  return (
     <div className="w-full">
      
      <Header />
      {/* HERO SECTION */}
      <section className="relative w-full h-screen">
        <Image
          className="mynd"
          src="/image.png"
          alt="minni vellir"
          fill
          style={{ objectFit: 'cover', boxShadow:'initial' }}
          priority
        />
       {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>*/}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center p-30 text-white bg-black/10 flex-col">
        <h2 style={{ fontFamily: 'Limelight' }} className="text-7xl font-bold ">MV</h2>
        <h2 style={{ fontFamily: 'Julius' }} className="text-[20px]">Minni-Vellir Farmhouse</h2>
        <h2 style={{ fontFamily: 'Julius' }} className="text-[20px]">Experience the South of Iceland</h2>
      </div>
       </section>
      
       <div className=" p-10" style={{backgroundColor:'#DAD9D6'}}>
         <div className="bordertexti">
        <h2 style={{fontFamily:"Jura", fontSize:"20px"}}>Minni Vellir Farmhouse, Hella, Iceland</h2>
        <h3 style={{fontFamily:"Jura"}}>minnivellir@gmail.com</h3></div>
        <Link href="/profa">
  <button className="TTD-button">prófunarpage</button>
</Link>
        </div>
       <section>

     { /*main content*/}

     { /*efraaa*/}

      <div style={{fontFamily: 'Jura' ,color:'#6D706C'}} className="flex flex-col gap-20 p-0 pt-0">
     


        { /*prófa neðra eftir gordon ramsey*/}
        
        <FadeInOnScroll>
        <div className="slider-card">
        <div className="slider-text">
        <p id="farmhouse" className="pb-5" style={{fontFamily:'Jura', color:'#3D3935'}}>MINNI-VELLIR</p>
        <h1  className="text-4xl leading-relaxed" >The Farmhouse</h1>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}> Minni-Vellir Farmhouse offers comfortable accommodation for up to 10 people. Minni-Vellir Farmhouse offers comfortable accommodation for up to 10 people.</h3>
        </div>  
   
       <div className="pt-0 mt-12 min-w-[900px] h-[450px] shadow-xl overflow-hidden relative">
  <Carousel />
</div></div></FadeInOnScroll>
        

{/*prófa location í svipuðu og GR*/}
<FadeInOnScroll>
<div className="location-card ">
  <div className="w-full h-[200px] mt-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.9376583668693!2d-20.22119742317767!3d63.98535687719389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d6ea3b46186fc1%3A0x3d0b3160ae87163c!2sMinni%20Vellir%20Farmhouse!5e0!3m2!1sen!2sis!4v1753712914686!5m2!1sen!2sis" 
          width="800" 
          height="300" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>

        <div className="location-text">
           <p id="location" className="pb-5" style={{fontFamily:'Jura', color:'#3D3935'}}>SOUTH ICELAND</p>
          <h1  className="text-4xl leading-relaxed" style={{ fontFamily: 'Jura',color:'#3D3935', fontWeight:'500',  letterSpacing:'0.1em'}}>Location</h1>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}>Located in the South of Iceland at the heart of the farmers side of Iceland, Minni-Vellir provides guests with a beautiful scenery, pristine rivers, mountains and lands all around.   </h3>
        </div>
        </div>
</FadeInOnScroll>


{/*prófa nýtt things do to!!!!!*/ }
<FadeInOnScroll>
<div className="TTD-intro">
<h1 className="pb-0 text-center">Things To Do</h1> 
<h5 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}> The area is very lively and there are a lot of things to do. Here are some of the most popular activities that allow you to enjoy your time while you explore the Icelandic nature and what our beautiful country has to offer. </h5>
</div></FadeInOnScroll>
<FadeInOnScroll>
 <div className="TTD-card">
        <div className="TTD-text">

        <h1  className="text-4xl leading-relaxed" >Horseback riding</h1>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}> Go horseback riding in the area with our partner íshestar. You decide the journey, length and sightsees with a tour guide from íshestar. We provide everything else.</h3>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}> Let us know if you want to go horse riding!</h3>
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
        <h1  className="text-4xl leading-relaxed" >Bike rides</h1>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}> Explore the area on mountain bikes with our partner Bikes. You decide the journey, length and sightsees with a tour guide from Bikes. We provide everything else.</h3>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}> Let us know if you want to go on a bike trip!</h3>
        <button className="TTD-button"> 
          <a href='#contactus'>Contact us</a></button>
        </div>  
   
       </div>
       </FadeInOnScroll>

<FadeInOnScroll>
       <div className="TTD-card">
        <div className="TTD-text">

        <h1  className="text-4xl leading-relaxed" >Hiking</h1>
        <h4 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}> Go on hikes on one of the beautiful mountains that surround the area with our dear friend Dóra. Dóra lives in the neighbourhood and knows all the mountains like the back of her hand.</h4>
        <h4 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}> Let us know if you want to go hiking!</h4>
        <button className="TTD-button"> 
          <a href='#contactus'>Contact us</a></button></div>  
   
       <div className="TTD-image">
        <img src="/image.png"></img>
</div></div></FadeInOnScroll>


<div className="footer">
<FooterSlider></FooterSlider>
<div className="contactus">
  <div className="contactusText">
  <h1 style={{color:'black'}}>Contact us</h1>
  <h3 className="text-xl font-light leading-relaxed" style={{color:'black', fontFamily:'Jura', letterSpacing:'0.1em', fontWeight:'500'}}> Please contact us for bookings and/or if you have any questions.</h3>
  </div><ContactUs></ContactUs>
</div>
</div>


{/*PRÓFA NÝTT TTD LETUR OG PADDING*/}

<div className="TTD-prof-bg">
<FadeInOnScroll>
<div className="TTD-introo">
<h1 style={{fontFamily:'Garamond'}} className="pb-0 text-center">Things To Do</h1> 
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



{/*gamlaaaa*/}

<FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">
        <h1 id="farmhouse" className="text-3xl"  style={{ fontFamily: 'Jura', fontWeight: 'bold'}}>THE FARMHOUSE</h1>
        <h3 className="text-2xl" style={{color:'rgb(49, 50, 49)'}}> Minni-Vellir Farmhouse offers comfortable accommodation for up to 10 people.</h3>
        </div> </FadeInOnScroll>
   
<FadeInOnScrollFast>
        <div className='pt-0'>
        <Gallery /></div>
        </FadeInOnScrollFast>




{/*gamla location*/}

        <div className="flex flex-row pt-20 pl-20 justify-center ">
        <div className="flex flex-col gap-5 items-left">
          <h1 id="location" className="text-3xl" style={{ fontFamily: 'Jura', fontWeight: 'bold'}}>LOCATION</h1>
        <h3 className="text-2xl pr-5" style={{color:'rgb(49, 50, 49)'}}>Located in the South of Iceland at the heart of the farmers side of Iceland, Minni-Vellir provides guests with a beautiful scenery, pristine rivers, mountains and lands all around.   </h3>
        </div>
        <div className="w-full h-[400px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.9376583668693!2d-20.22119742317767!3d63.98535687719389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d6ea3b46186fc1%3A0x3d0b3160ae87163c!2sMinni%20Vellir%20Farmhouse!5e0!3m2!1sen!2sis!4v1753712914686!5m2!1sen!2sis" 
          width="400" 
          height="300" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
</div></div>


{/*Gamla things to dooooo*/}

<div className="things-to-do">
  <h1 className="pb-5 text-center">Things To Do</h1> 


<div className="pt-0 p-0 min-w-[900px] h-[350px] shadow-xl overflow-hidden relative">
<ThingsToDo></ThingsToDo></div></div>
 </div> 
      </section>
    </div>
       
    );
}
       