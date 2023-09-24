import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Menu from "./components/Menu";
import { Main } from "./components/Main";
import Features from "./components/Features";
import Body from "./components/CardContainer";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <Main />
      <Features />
      <CardContainer />
      <CardContainer />
      <Form />
      <Footer />
    </>
  );
}

export default App;
