import Navbar from "@/app/components/Navbar";
import HeroWordpress from "@/app/components/HeroWordpress";
import PartnerBrands from "@/app/components/PartnerBrands";
import WordpressPricingPlans from "@/app/components/WordpressPricingPlans";
import WordpressServices from "@/app/components/WordpressServices";
import WordpressStats from "@/app/components/WordpressStats";
import WordpressFeatures from "@/app/components/WordpressFeatures";
import WordpressBuiltByExperts from "@/app/components/WordpressBuiltByExperts";
import WordpressSmarterTools from "@/app/components/WordpressSmarterTools";
import Testimonials from "@/app/components/Testimonials";
import BehindTheBrand from "@/app/components/BehindTheBrand";
import TechSupport from "@/app/components/TechSupport";
import BlogPosts from "@/app/components/BlogPosts";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "WordPress Hosting | Adlef",
  description:
    "Optimized WordPress hosting with LiteSpeed caching, automatic updates, free migration, staging sites, and 24/7 WordPress expert support.",
};

export default function WordpressPage() {
  return (
    <div className="flex flex-col min-h-screen font-display">
      <Navbar />
      <HeroWordpress />
      <PartnerBrands />
      <WordpressPricingPlans />
      <WordpressServices />
      <WordpressStats />
      <WordpressFeatures />
      <WordpressBuiltByExperts />
      <WordpressSmarterTools />
      <Testimonials />
      <BehindTheBrand />
      <TechSupport />
      <BlogPosts />
      <Footer />
    </div>
  );
}
