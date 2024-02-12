import { TypeAnimation } from "react-type-animation";
import logo from "./assets/logo.png";
import "./App.css";
const App = () => {
  return (
    <div className='body_wrapper'>
      <TypeAnimation
        sequence={[
          "Coming Soon", // Types 'One'
          1000, // Waits 1s
          "Coming Soon.",
          1000,
          "Coming Soon..",
          1000,
          "Coming Soon...",
          1000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper='span'
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          color: "#000000",
          display: "inline-block",
        }}
      />

      <img src={logo} alt='logo' />
    </div>
  );
};

export default App;
