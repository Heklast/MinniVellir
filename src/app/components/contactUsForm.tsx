
export default function ContactUs() {
    return(
        <div className="formogbutton">
        <div className="contact">
        <div className="flex flex-row gap-2">
            <div className="flex flex-col">
            <label style={{color:"black", fontWeight:700}}>First Name</label>
            <input className="textfield" ></input></div>

            <div className="flex flex-col">
            <label style={{color:"black", fontWeight:700}}>Last Name</label>
            <input className="textfield"></input></div>
</div>
            <div className="flex flex-col">
            <label style={{color:"black", fontWeight:700}}>Email</label>
            <input className="textfield"></input></div>

            <div className="flex flex-col">
            <label style={{color:"black", fontWeight:700}}>Message</label>
            <input className="messTextfield"></input></div>      
</div>
<button className="TTD-button">Send</button></div>
    )}