import CtaSection from "./ctasection/ctasection";
import FirstSection from "./firstsection/firstsection";
import FooterSection from "./footersection/footersection";
import SecondSection from "./secondsection/secondsection";
import TertiarySection from "./tertiarysection/tertiarysection";
import Welcome from "./welcome/welcome";

export default function Home() {
  return (
    <div className="">
      <Welcome/>
      <FirstSection/>
      <SecondSection/>
      <TertiarySection/>
      <CtaSection/>
      <FooterSection/>
    </div>
  );
}
