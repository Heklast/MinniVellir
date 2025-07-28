import Image from "next/image";
import Header from "./components/header";
import Gallery from "./photos";
import FadeInOnScroll from "./components/scroll";
import { FadeInOnScrollFast } from "./components/scroll";

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
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 flex items-center p-30 text-white bg-black/10 flex-col">
        <h1 style={{ fontFamily: 'Limelight' }} className="text-7xl font-bold ">MV</h1>
        <h1 style={{ fontFamily: 'Julius' }} className="text-[20px]">Minni-Vellir Farmhouse</h1>
        <h1 style={{ fontFamily: 'Julius' }} className="text-[20px]">Experience the South of Iceland</h1>
      </div>
       </section>
       <section>

      
      <div style={{fontFamily: 'Jura' ,color:'#6D706C'}} className="flex flex-col gap-20 p-50 pt-0">
     <FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">
        <h1 id="farmhouse" className="text-3xl"  style={{ fontFamily: 'Julius', fontWeight: 'bold'}}>The Farmhouse</h1>
        <h3 className="text-2xl" style={{color:'rgb(49, 50, 49)'}}> Minni-Vellir Farmhouse offers comfortable f accommodation for up to 10 people.</h3>
        </div> </FadeInOnScroll>
   
<FadeInOnScrollFast>
        <div className='pt-0'>
        <Gallery /></div>
        </FadeInOnScrollFast>
        <div className="flex flex-col gap-5 items-center">
          <h1 id="Fleiri" className="text-3xl">Fleiri</h1>
        <h3 className="text-xl p-10 pt-0" style={{color:'rgb(49, 50, 49)'}}>Beyoncé Giselle Knowles-Carter (/biˈɒnseɪ/ ⓘ bee-ON-say;[6] born September 4, 1981) is an American singer, songwriter, actress, and businesswoman. Dubbed "Queen Bey", she is regarded as one of the most culturally significant figures of the 21st century. Over a three-decade career characterized by continuous musical reinvention, she has been credited with redefining the standards of artistry and performance in popular music. Known for her vocal ability, musical versatility, and live performances, Beyoncé is often deemed one of the most influential artists of all time.[7]

Beyoncé rose to fame in 1997 as the lead singer of Destiny's Child, one of the best-selling girl groups of all time. Her debut solo album, Dangerously in Love (2003), became one of the best-selling albums of the 21st century. After Destiny's Child disbanded in 2005, Beyoncé released the funk-imbued set B'Day (2006) and later starred in the drama film Dreamgirls (2006). Her marriage to rapper Jay-Z and portrayal of Etta James in the biopic Cadillac Records (2008) influenced the album I Am... Sasha Fierce (2008), which explored pop and electropop. The albums included the U.S. Billboard Hot 100 number-one singles "Crazy in Love", "Baby Boy", "Check on It", "Irreplaceable", and "Single Ladies (Put a Ring on It)".

After forming the management company Parkwood Entertainment, Beyoncé embraced traditional R&B on 4 (2011). Her electronic-influenced eponymous album (2013) inspired setting Frid</h3>
        </div><div className="flex flex-col gap-5 items-center"><h1 id="Titlar"  className="text-3xl"> Titlar</h1>
        <h3 className="text-xl p-10 pt-0" style={{color:'rgb(49, 50, 49)'}}>Beyoncé Giselle Knowles-Carter (/biˈɒnseɪ/ ⓘ bee-ON-say;[6] born September 4, 1981) is an American singer, songwriter, actress, and businesswoman. Dubbed "Queen Bey", she is regarded as one of the most culturally significant figures of the 21st century. Over a three-decade career characterized by continuous musical reinvention, she has been credited with redefining the standards of artistry and performance in popular music. Known for her vocal ability, musical versatility, and live performances, Beyoncé is often deemed one of the most influential artists of all time.[7]

Beyoncé rose to fame in 1997 as the lead singer of Destiny's Child, one of the best-selling girl groups of all time. Her debut solo album, Dangerously in Love (2003), became one of the best-selling albums of the 21st century. After Destiny's Child disbanded in 2005, Beyoncé released the funk-imbued set B'Day (2006) and later starred in the drama film Dreamgirls (2006). Her marriage to rapper Jay-Z and portrayal of Etta James in the biopic Cadillac Records (2008) influenced the album I Am... Sasha Fierce (2008), which explored pop and electropop. The albums included the U.S. Billboard Hot 100 number-one singles "Crazy in Love", "Baby Boy", "Check on It", "Irreplaceable", and "Single Ladies (Put a Ring on It)".

After forming the management company Parkwood Entertainment, Beyoncé embraced traditional R&B on 4 (2011). Her electronic-influenced eponymous album (2013) inspired setting Frid</h3>
        </div><div className="flex flex-col gap-5 items-center"><h1 id="Koma" className="text-3xl"> Koma</h1>
        <h3 className="text-xl p-10 pt-0" style={{color:'rgb(49, 50, 49)'}}>Beyoncé Giselle Knowles-Carter (/biˈɒnseɪ/ ⓘ bee-ON-say;[6] born September 4, 1981) is an American singer, songwriter, actress, and businesswoman. Dubbed "Queen Bey", she is regarded as one of the most culturally significant figures of the 21st century. Over a three-decade career characterized by continuous musical reinvention, she has been credited with redefining the standards of artistry and performance in popular music. Known for her vocal ability, musical versatility, and live performances, Beyoncé is often deemed one of the most influential artists of all time.[7]

Beyoncé rose to fame in 1997 as the lead singer of Destiny's Child, one of the best-selling girl groups of all time. Her debut solo album, Dangerously in Love (2003), became one of the best-selling albums of the 21st century. After Destiny's Child disbanded in 2005, Beyoncé released the funk-imbued set B'Day (2006) and later starred in the drama film Dreamgirls (2006). Her marriage to rapper Jay-Z and portrayal of Etta James in the biopic Cadillac Records (2008) influenced the album I Am... Sasha Fierce (2008), which explored pop and electropop. The albums included the U.S. Billboard Hot 100 number-one singles "Crazy in Love", "Baby Boy", "Check on It", "Irreplaceable", and "Single Ladies (Put a Ring on It)".

After forming the management company Parkwood Entertainment, Beyoncé embraced traditional R&B on 4 (2011). Her electronic-influenced eponymous album (2013) inspired setting Frid</h3>
        </div><div className="flex flex-col gap-5 items-center"><h1 id="Her"  className="text-3xl"> Hér</h1>
        <h3 className="text-xl p-10 pt-0" style={{color:'rgb(49, 50, 49)'}}>Beyoncé Giselle Knowles-Carter (/biˈɒnseɪ/ ⓘ bee-ON-say;[6] born September 4, 1981) is an American singer, songwriter, actress, and businesswoman. Dubbed "Queen Bey", she is regarded as one of the most culturally significant figures of the 21st century. Over a three-decade career characterized by continuous musical reinvention, she has been credited with redefining the standards of artistry and performance in popular music. Known for her vocal ability, musical versatility, and live performances, Beyoncé is often deemed one of the most influential artists of all time.[7]

Beyoncé rose to fame in 1997 as the lead singer of Destiny's Child, one of the best-selling girl groups of all time. Her debut solo album, Dangerously in Love (2003), became one of the best-selling albums of the 21st century. After Destiny's Child disbanded in 2005, Beyoncé released the funk-imbued set B'Day (2006) and later starred in the drama film Dreamgirls (2006). Her marriage to rapper Jay-Z and portrayal of Etta James in the biopic Cadillac Records (2008) influenced the album I Am... Sasha Fierce (2008), which explored pop and electropop. The albums included the U.S. Billboard Hot 100 number-one singles "Crazy in Love", "Baby Boy", "Check on It", "Irreplaceable", and "Single Ladies (Put a Ring on It)".

After forming the management company Parkwood Entertainment, Beyoncé embraced traditional R&B on 4 (2011). Her electronic-influenced eponymous album (2013) inspired setting Frid</h3>
        </div> </div> 
      </section>
    </div>
       
    );
}
       