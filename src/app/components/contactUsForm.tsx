
export default function ContactUs() {
    return(
        <div className="formogbutton">
        <div className="contact">
        <div className="flex flex-row gap-2">
            <div className="flex flex-col">
            <label style={{color:"black"}}>First Name</label>
            <input className="textfield" ></input></div>

            <div className="flex flex-col">
            <label style={{color:"black"}}>Last Name</label>
            <input className="textfield"></input></div>
</div>
            <div className="flex flex-col">
            <label style={{color:"black",}}>Email</label>
            <input className="textfield"></input></div>

            <div className="flex flex-col">
            <label style={{color:"black"}}>Message</label>
            <input className="messTextfield"></input></div>      
</div>
<button className="TTD-button">Send</button></div>
    )}