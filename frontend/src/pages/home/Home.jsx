import Certification from "../components/certification/certification";
import Stats from "../../components/stats/stats";
import Heropage from "../../components/heropage/heropage";
import Pricing from "../../components/pricing/pricing";
import WhyInvestCard from "../../components/whyinvest/Whyinvestcard";
import Currency from "../../components/currency/Currency";

const Home = () => {
  return (
    <>
      <Heropage></Heropage>
      <WhyInvestCard></WhyInvestCard>
      <Certification></Certification>
      <Pricing></Pricing>
      <Currency></Currency>
      <Stats></Stats>
    </>
  );
};

export default Home;
