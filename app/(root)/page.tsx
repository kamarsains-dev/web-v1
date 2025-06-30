import CtaSection from "./component/cta-section";
import FirstSection from "./component/first-section";
import FooterSection from "./component/footer-section";
import SecondSection from "./component/second-section";
import TertiarySection from "./component/tertiary-section";
import Welcome from "./component/welcome";

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
