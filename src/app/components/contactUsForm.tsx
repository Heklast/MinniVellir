export default function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 w-full">
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
          <textarea className="messTextfield" />
        </div>
      </form>

      {/* Button on the right (below on mobile) */}
      <button className="TTD-button self-start md:self-end">Send</button>
    </div>
  );
}