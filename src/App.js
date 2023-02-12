import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Section1 } from "./components/Section1/Section1";
import { Section2 } from "./components/Section2/Section2";
import { Section3 } from "./components/Section3/Section3";
import { Section4 } from "./components/Section4/Section4";
import { Section5 } from "./components/Section5/Section5";
import { Tours } from "./components/Tours/Tours";
import { Excursion } from "./components/Excursion/Excursion";
import { Places } from "./components/Places/Places";
import { Ourteam } from "./components/Ourteam/Ourteam";
import { Reviews } from "./components/Reviews/Reviews";

import "./assets/styles/globals.scss";

function App() {
  const [mainScroll, setMainScroll] = useState(true);

  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMainScroll(false);
    }, 5250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("main", { "main-scroll": mainScroll })} ref={scrollRef}>
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Tours />
      <Excursion />
      <Places />
      <Ourteam />
      <Reviews />
    </div>
  );
}

export default App;
