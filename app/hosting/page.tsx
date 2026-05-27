import Navbar from "@/app/components/Navbar";
import HeroHosting from "@/app/components/HeroHosting";
import PartnerBrands from "@/app/components/PartnerBrands";
import HostingServices from "@/app/components/HostingServices";
import Stats from "@/app/components/Stats";
import Features from "@/app/components/Features";
import BuiltByExperts from "@/app/components/BuiltByExperts";
import SmarterTools from "@/app/components/SmarterTools";
import PricingPlans from "@/app/components/PricingPlans";
import Testimonials from "@/app/components/Testimonials";
import BehindTheBrand from "@/app/components/BehindTheBrand";
import TechSupport from "@/app/components/TechSupport";
import BlogPosts from "@/app/components/BlogPosts";
import Footer from "@/app/components/Footer";
import { getHostingHero } from "@/lib/laravel/hosting-hero";

export default async function HostingPage() {
  const hero = await getHostingHero();

  return (
    <div className="flex flex-col min-h-screen font-display">
        <Navbar/>
        <HeroHosting hero={hero} />
        <PartnerBrands/>
        <PricingPlans/>
        <HostingServices/>
        <Stats/>
        <Features/>
        <BuiltByExperts/>
        <SmarterTools/>
        <Testimonials/>
        <BehindTheBrand/>
        <TechSupport/>
        <BlogPosts/>
        <Footer/>
    </div>
  );
}

