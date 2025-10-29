{/*prófa location í svipuðu og GR*/}
<FadeInOnScroll>
<div className="location-card ">
  <div className="w-full h-[400px] mt-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.9376583668693!2d-20.22119742317767!3d63.98535687719389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d6ea3b46186fc1%3A0x3d0b3160ae87163c!2sMinni%20Vellir%20Farmhouse!5e0!3m2!1sen!2sis!4v1753712914686!5m2!1sen!2sis" 
          width="700" 
          height="400" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>

        <div className="location-text">
           <p id="location" className="pb-5" style={{fontFamily:'Garamond', color:'#3D3935'}}>SOUTH ICELAND</p>
          <h1  className="text-4xl leading-relaxed" style={{ fontFamily: 'Garamond',color:'#3D3935', fontWeight:'500',  letterSpacing:'0.1em'}}>Location</h1>
        <h3 className="text-xl font-light leading-relaxed" style={{color:'#3D3935', fontFamily:'Garamond', letterSpacing:'0.1em', fontWeight:'500'}}>Located in the South of Iceland at the heart of the farmers side of Iceland, Minni-Vellir provides guests with a beautiful scenery, pristine rivers, mountains and lands all around.   </h3>
        </div>
        </div>
</FadeInOnScroll>

<div className="accommodation">
<h1 style={{fontFamily:'Garamond'}} >Accommodation</h1>
<div className="accommodation-2">
<h3 style={{fontFamily:'Garamond'}} className="text-gray-700 text-2xl">The house can accommodate up to 10 people, it has all necessities to enjoy your time there with 
  cooking, relaxing and sleeping.
</h3>
<ul style={{fontFamily:'Garamond'}} className="list-disc pl-5 text-gray-700 text-2xl">
  <li>Horseback riding tours with Íshestar</li>
  <li>Guided hiking trips with locals</li>
  <li>Mountain biking adventures</li>
</ul>
</div></div>


{/*PRÓFA NÝTT TTD LETUR OG PADDING*/}



{/*gamlaaaa*/}

<FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">
        <h1 id="farmhouse" className="text-3xl"  style={{ fontFamily: 'Garamond', fontWeight: 'bold'}}>THE FARMHOUSE</h1>
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
       