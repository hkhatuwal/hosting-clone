import Navbar from "@/app/components/Navbar";
import HeroVps from "@/app/components/HeroVps";
import PartnerBrands from "@/app/components/PartnerBrands";
import VpsServices from "@/app/components/VpsServices";
import VpsStats from "@/app/components/VpsStats";
import VpsFeatures from "@/app/components/VpsFeatures";
import VpsBuiltByExperts from "@/app/components/VpsBuiltByExperts";
import VpsSmarterTools from "@/app/components/VpsSmarterTools";
import VpsPricingPlans from "@/app/components/VpsPricingPlans";
import Testimonials from "@/app/components/Testimonials";
import BehindTheBrand from "@/app/components/BehindTheBrand";
import TechSupport from "@/app/components/TechSupport";
import BlogPosts from "@/app/components/BlogPosts";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "VPS Hosting | Adlef",
  description:
    "Powerful VPS hosting with dedicated resources, full root access, NVMe storage, and 24/7 expert support.",
};

export default function VpsPage() {
  return (
    <div className="flex flex-col min-h-screen font-display">
      <Navbar />
      <HeroVps />
      <PartnerBrands />
      <VpsPricingPlans />
      <VpsServices />
      <VpsStats />
      <VpsFeatures />
      <VpsBuiltByExperts />
      <VpsSmarterTools />
      <Testimonials />
      <BehindTheBrand />
      <TechSupport />
      <BlogPosts />
      <Footer />
    </div>
  );
}
