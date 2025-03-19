import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductPreview from "@/components/ProductPreview";
import TwitterFeed from "@/components/TwitterFeed";
import TeamOverview from "@/components/CompanyOverview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="products">
        <ProductPreview />
      </div>
      <TwitterFeed />
      <TeamOverview />
      <Contact />
      <Footer />
    </main>
  );
}
