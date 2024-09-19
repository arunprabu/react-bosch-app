import { useState } from "react";

const ContactPage = () => {
  const [userName, setUserName] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value); // entered form input data
    setUserName(event.target.value);
  }
  
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Two Way Binding Explained</p>
      <p>Known as Controlled Component</p>
      <span>
        What's Contolled Component? An input form element whose value is controlled by React in this way is
        called a "controlled component".
      </span>

      <p>{userName}</p>
      <input type="text" value={userName} onChange={handleChange} />
    </div>
  );
}

export default ContactPage