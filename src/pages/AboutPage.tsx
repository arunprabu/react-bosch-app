import Bye from "../components/about/Bye";
import Hello from "../components/about/Hello";
import applyStyles from "../hoc/applyStyles";

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const AboutPage = (props: any) => {
  // Internal Styles
  const myButtonStyle = {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "purple",
    border: "none",
    padding: "10px 20px",
    marginRight: "10px"
  };

  return (
    <>
      <div>
        <h1>About Us</h1>
        {/* Inline Styles */}
        <p
          style={{
            color: "green",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          quidem.
        </p>

        {/* Internal Styles  */}
        <button style={myButtonStyle}>Subscibe Monthly Plan</button>
        <button style={myButtonStyle}>Subscribe Annual Plan</button>
      </div>

      <StyledHello />

      <StyledBye />

      {/* <h3>Demo'ing Runtime Error</h3>
      <button onClick={props.x()}>Click Me</button> */}
    </>
  );
};

export default AboutPage;
