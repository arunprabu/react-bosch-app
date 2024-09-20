import { useState } from "react";
import MyFragment from "../components/shared/MyFragment"; // refer this later
import { useOnlineStatus } from "../hooks/useOnlineStatus";

const ContactPage = () => {
  const [userName, setUserName] = useState<string>("");
  const isOnline = useOnlineStatus();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value); // entered form input data
    setUserName(event.target.value);
  }
  
  return (
    <MyFragment>
      <div>
        <h2>Contact Us</h2>
        <p>Two Way Binding Explained</p>
        <p>Known as Controlled Component</p>
        <span>
          What's Contolled Component? An input form element whose value is
          controlled by React in this way is called a "controlled component".
        </span>

        <p>{userName}</p>
        <input type="text" value={userName} onChange={handleChange} />
      </div>
      <div>
        <h2>Is the user online?</h2>
        <p>{isOnline ? "Yes" : "No"}</p>
        {
          !isOnline && (
            <div className="alert alert-warning">
              Seems like you are not connected to internet. Attempting to
              connect...
            </div>
          )
        }
      </div>
    </MyFragment>
  );
}

export default ContactPage