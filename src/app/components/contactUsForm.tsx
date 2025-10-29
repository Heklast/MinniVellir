//import {nodemailer} from 'nodemailer' //gera npm install nodemailer þegar komin í net


export default function ContactUs() {

  const EMAIL_PASS= process.env.EMAIL_PASS;


  return (
    <div id="contactUs" className="flex flex-col md:flex-row items-start gap-4 md:gap-8 w-full">
      {/* Form */}
      <form className="flex flex-col flex-1 gap-4">
        {/* Name fields side-by-side on md+ */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex flex-col flex-1">
            <label className="text-black">First Name</label>
            <input className="textfield" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-black">Last Name</label>
            <input className="textfield" />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-black">Email</label>
          <input className="textfield" />
        </div>

        <div className="flex flex-col">
          <label className="text-black">Message</label>
          <input className="messTextfield" /> {/*Hér var textarea, man ekki afh tbh*/}
        </div>
      </form>

      {/* Button on the right (below on mobile) */}
      <button /*onClick={sendMail()}*/ className="TTD-button self-start md:self-end"> Send</button>
    </div>
  );

  function checkIntegrity(){

  }
 {/*
function MouseEventHandler<HTMLButtonElement> sendMail(){
  checkIntegrity();

const transporter =nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user: 'heklast@gmail.com',
    pass: EMAIL_PASS //eg er ekki með neinn email_pass rn, þarf að bæta við, en þá vænt f minnivallaremailið?
  }
});

  const mail={
    from:'heklast@gmail.com',
    to: 'heklast@gmail.com',
    subject: 'Rezdy webhook!!!',
    text:'Rezdy webhook yayy!!!'
  };
  transporter.sendMail(mail, (error,info)=>{
    if (error){
      console.error("emial error:",error);
    } else{
      console.log("Email sent!! info:", info);
    }
  });
} */
}
}
