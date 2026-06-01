import Hero from "@/components/Hero";
import AboutProblem from "@/components/sections/AboutProblem";
import StudentLearning from "@/components/sections/StudentLearning";
import TeacherSupport from "@/components/sections/TeacherSupport";
import InclusiveEducation from "@/components/sections/InclusiveEducation";
import SchoolDashboard from "@/components/sections/SchoolDashboard";
import Features from "@/components/sections/Features";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutProblem />
      <StudentLearning />
      <TeacherSupport />
      <InclusiveEducation />
      <SchoolDashboard />
      <Features />
      <Impact />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
