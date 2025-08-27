import React from "react";
import './contact.css';
import { useState } from "react";
import msg from '../../assets/msg-icon.png';
import mail from '../../assets/mail-icon.png';
import loc from '../../assets/location-icon.png';
import phone from '../../assets/phone-icon.png';
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {
    const [captchavalue, setcaptchavalue] = useState(null);
    const handlechange = (value) => {
        setcaptchavalue(value);
    }
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");
    const formData = new FormData(event.target);

    formData.append("access_key", "86a58cff-1210-42f9-a3fb-9256a84f53a8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div className="contact">
            <div className="contactcol">
                <h3>Send us a message <img src={msg} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail} alt="" />Mail us @contac.dev</li>
                    <li><img src={loc} alt="" />+1 25485 24</li>
                    <li><img src={phone} alt="" />usa,cambridge</li>
                </ul>
            </div>
            <div className="contactcol">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" placeholder="Enter your name" name='name' required />
                    <label>Your mobile number</label>
                    <input type="tel" placeholder="Enter your mobile number" name='phone' required />
                    <label>Your email</label>
                    <input type="email" placeholder="Enter your email" name='email' required />
                    <label>Write your message/issues here</label>
                    <textarea name="message" placeholder="Write down your message" required rows={7}></textarea>
                    <ReCAPTCHA
                        sitekey="6LfZ7a4rAAAAAM8bT6vrdB2rqQWYfdNPypnhHdcj"
                        onChange={handlechange}
                    />
                    <button type="submit" disabled={!captchavalue}>Submit</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}
export default Contact;