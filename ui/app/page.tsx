import AboutPage from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact"
import HomePage from "@/components/Home/Home";
import ScrollPointer from "@/components/ui/Pointer";
import Image from "next/image";

export default function Home() {
  return (
     <div className="">
      <div className="verticle_line"></div>
      <ScrollPointer/>
        <HomePage/>
        <AboutPage/>
        <Contact/>
        <Footer/>
     </div>
  );
}
