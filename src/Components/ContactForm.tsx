import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({options}:{options:string}) {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const [validName, setValidName] = useState<boolean>(true);
  const [validPhone, setValidPhone] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(true);

  const phoneRegex = /^(?:\+48\s?)?\d{3}\s?\d{3}\s?\d{3}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      name: name,
      from_email: email,
      phone: phone,
      message: "GENERATED: "+ options+" message:"+message,
    };

    emailjs
      .send(
        "service_lkktax9",
        "template_o8500yd",
        templateParams,
        "BMtv7WM2uN7LnJOWW",
      )
      .then(
        () => {
          alert("Wiadomość wysłana!");
        },
        (error) => {
          console.log(error);
          alert("Błąd wysyłki");
        },
      );
  };
  useEffect(() => {
    if (name == "") setValidName(false);
    else setValidName(true);

    setValidPhone(phoneRegex.test(phone || ""));
    setValidEmail(emailRegex.test(email || ""));
  }, [name, email, phone]);
  return (
    <section className="contactform-block outline" id="contact">
      <h1>Złoż zamówienie online</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="wrapper mt-10">
          <div className="stars">
            *<br />*<br />*
          </div>
          <div className="left">
            <input
              type="text"
              placeholder="Imię"
              className={"small-form outline " + (validName ? "" : "invalid")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="tel"
              placeholder="Numer telefonu"
              className={"small-form outline " + (validPhone ? "" : "invalid")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="Adres e-mail"
              className={"small-form outline " + (validEmail ? "" : "invalid")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Treść"
            className="message outline"
          ></textarea>
        </div>{" "}
        <div className="footer">
          <span>* - pole wymagane</span>
          <button type="submit">Wyślij</button>
        </div>
      </form>
    </section>
  );
}
