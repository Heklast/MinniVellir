
export default function ContactUs() {
    return(
        <div className="formogbutton">
        <div className="contact">
        <div className="flex flex-row gap-2">
            <div className="flex flex-col">
            <label style={{color:"black", fontWeight:600}}>First Name</label>
            <input className="textfield" ></input></div>

            <div className="flex flex-col">
            <label style={{color:"black", fontWeight:600}}>Last Name</label>
            <input className="textfield"></input></div>
</div>
            <div className="flex flex-col">
            <label style={{color:"black", fontWeight:600}}>Email</label>
            <input className="textfield"></input></div>

            <div className="flex flex-col">
            <label style={{color:"black", fontWeight:600}}>Message</label>
            <input className="messTextfield"></input></div>      
</div>
<button className="TTD-button">Send</button></div>
    )}