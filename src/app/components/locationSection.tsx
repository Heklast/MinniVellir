import FadeInOnScroll from "./scroll";

export default function LocationSection() {
    return (
<FadeInOnScroll>

<div id="location" className="loc-card  scroll-mt-10 flex flex-col pl-5 pr-5 md:pl-2 md:pr-5 md:pb-3 md:pt-5 md:flex-row md:gap-3 gap-1 w-auto">
  <div className="loc-image md:h-30">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.9376583668693!2d-20.22119742317767!3d63.98535687719389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d6ea3b46186fc1%3A0x3d0b3160ae87163c!2sMinni%20Vellir%20Farmhouse!5e0!3m2!1sen!2sis!4v1753712914686!5m2!1sen!2sis" 
          width="800" 
          height="800" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
</div>

        <div className="loc-text">
           <p className="pb-5">SOUTH ICELAND</p>
          <h1 className="text-4xl leading-relaxed" >Location</h1>
        <h3 className="text-xl font-light leading-relaxed" >Minni-Vellir, is a beautiful, recently renovated, farmhouse full of history and charm.  
                It's situated in the heart of the Southern part of Iceland, an ideal base for exploring this amazing area and its many sights   </h3>
        </div>
        </div>
</FadeInOnScroll>);}