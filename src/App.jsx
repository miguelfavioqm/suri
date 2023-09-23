import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Menu from "./components/Menu";
import { Main } from "./components/Main";
import Features from "./components/Features";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <Main />
      <Features />
    </>
  );
}

export default App;
