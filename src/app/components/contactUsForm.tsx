"use client";

import { useState } from "react";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]  = useState("");
  const [email, setEmail]        = useState("");
  const [message, setMessage]    = useState("");
  const [status, setStatus]      = useState<null | "sending" | "sent" | "error">(null);
  const[empty,setEmpty]          = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEmpty(false);
    setStatus("sending");

    if(firstName==="" || lastName==="" || email==="" || message===""){
      setEmpty(true);
      setStatus(null);
      return;
    }

    try {
      const res = await fetch("/api/contactUs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });
      
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    //  setSent(true);



      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div id="contactUs" className="flex flex-col md:flex-row items-start gap-4 md:gap-8 w-full">
      {/* Form */}
      <form className="flex flex-col w-full md:flex-1 gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col w-full md:flex-1">
            <label className="text-white w-full text-xl">First Name</label>
            <input
              className="textfield w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full md:flex-1 ">
            <label className="text-white text-xl">Last Name</label>
            <input
              className="textfield"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-white text-xl">Email</label>
          <input
            className="textfield"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white text-xl">Message</label>
          <textarea
            className="messTextfield"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex flex-row space-between items-center justify-between ">
        {(status === null || status==="sending")  && empty===false && <p className="text-white"></p>}
        {status === "sent" && <p className="text-white">Your message was successfully sent, we will be in touch within a couple days!</p>}
        {status === "error" && <p className="text-white">Something went wrong, please try again later.</p>}
        {empty === true && <p className="text-white">You need to fill in all fields.</p>}

        <button
          type="submit"
          className="TTD-button self-start md:self-end"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button></div>
      </form>
    </div>
  );
}
