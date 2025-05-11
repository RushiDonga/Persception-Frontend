import Footer from "../components/Footer/Footer"
import PinterestLayout from "../components/PinterestLayout/PintrestLayout";
import FrequentlyAskedQuestions from "../components/FAQ/FrequentlyAskedQuestions";
import HowItWorks from "../components/HowItWorks";
import NewHero from "../components/Header/NewHero";
import NewNavBar from "../components/Header/NewNavBar";

export default function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <NewNavBar />
      <NewHero />
      {/* <Hero /> */}
      <HowItWorks />
      <PinterestLayout />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
}
