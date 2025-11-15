'use client';

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import ThreeAppShowcase from "@/components/three-app-showcase";

// Icon Components
const LaptopIcon = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LightningIcon = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const PaletteIcon = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3L4 21h16L12 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8" />
  </svg>
);

// Services Data
const services = [
  {
    title: "Full-Stack Custom App Development",
    description: "Our specialty. From frontend design to backend systems, we handle it all.",
    icon: <LaptopIcon />,
  },
  {
    title: "Rapid Prototyping",
    description: "Test your concept with a live prototype in weeks, not months.",
    icon: <LightningIcon />,
  },
  {
    title: "UI/UX Design",
    description: "Clean, user-friendly interfaces your users will love.",
    icon: <PaletteIcon />,
  },
  {
    title: "Launch Consulting",
    description: "Guidance on getting your app ready for market.",
    icon: <RocketIcon />,
  },
];

// Testimonials Data
const testimonials = [
  {
    quote: "Arkawell turned our sketch into a working app in two weeks — amazing!",
    author: "Client Name",
    role: "Founder",
  },
  {
    quote: "They made the whole process simple and fast.",
    author: "Client Name",
    role: "CEO",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Container Scroll Animation Component
const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="min-h-[40rem] sm:min-h-[45rem] md:min-h-[50rem] flex items-center justify-center relative p-2 sm:p-4 md:p-8"
      ref={containerRef}
    >
      <div
        className="pt-6 sm:pt-12 md:pt-20 pb-2 sm:pb-4 md:pb-6 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, titleComponent }: { translate: any; titleComponent: string | React.ReactNode }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center px-4"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: any;
  scale: any;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl -mt-6 sm:-mt-8 md:-mt-12 mx-auto aspect-[9/16] sm:aspect-[10/14] md:aspect-[16/10] w-full max-w-sm sm:max-w-md md:max-w-6xl border-2 sm:border-4 border-black p-1 sm:p-2 md:p-6 bg-black rounded-[16px] sm:rounded-[20px] md:rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-white border-4 sm:border-6 md:border-8 border-gray-200">
        {children}
      </div>
    </motion.div>
  );
};


// Main Home Component
export default function Home() {
  const [activeApp, setActiveApp] = useState(0)
  const [formState, setFormState] = useState<{
    loading: boolean;
    success: boolean;
    error: string | null;
  }>({
    loading: false,
    success: false,
    error: null,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const apps = [
    { name: "Analytics Dashboard" },
    { name: "Business CRM" },
    { name: "Warehouse System" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative bg-black overflow-hidden scroll-mt-20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ContainerScroll
              titleComponent={
                <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="space-y-2 sm:space-y-3 md:space-y-4 mt-12 sm:mt-16 md:mt-20">
                    <br />
                    <br />  
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-4">
                      Got an app idea but don&apos;t know where to start?
                    </h1>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold px-4">
                      You&apos;re in the right place.
                    </h3>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white px-4">
                      At Arkawell, we turn your ideas into fully functional app prototypes in just two weeks
                    </h2>
                    <br />
                  </div>  
                </div>
              }
            >
              <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-full w-full shadow-2xl">
                <ThreeAppShowcase activeApp={activeApp} />
              </div>
            </ContainerScroll>
            {/* App Navigation Buttons - Outside Tablet */}
            <div className="flex items-center justify-center gap-3 mt-2 sm:mt-2 md:mt-0 px-4">
              {apps.map((app, index) => (
                <button
                  key={index}
                  onClick={() => setActiveApp(index)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-[3px] text-xs sm:text-sm font-medium transition-all border border-white ${
                    activeApp === index
                      ? 'bg-white text-black'
                      : 'bg-black text-white hover:bg-gray-900'
                  }`}
                >
                  {app.name}
                </button>
              ))}
            </div>
            <br />
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="bg-white py-16 sm:py-20 md:py-24 scroll-mt-20"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
                What We Offer
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-black max-w-2xl mx-auto px-4">
                Comprehensive solutions to bring your vision to life
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group bg-white border-2 border-black/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 touch-manipulation"
                >
                  <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-black">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="bg-white py-16 sm:py-20 md:py-24 scroll-mt-20"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
                Hear from our happy clients
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-black px-4">
                who brought their ideas to life with Arkawell.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-xl ${
                    index === 0 
                      ? 'bg-black text-white' 
                      : 'bg-white border-2 border-black/10'
                  }`}
                >
                  <div className="mb-6">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 opacity-20" fill={index === 0 ? "#FFFFFF" : "#000000"} viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <p className={`text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed ${index === 0 ? 'text-white' : 'text-black'}`}>
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <p className={`font-bold text-base sm:text-lg ${index === 0 ? 'text-white' : 'text-black'}`}>
                      {testimonial.author}
                    </p>
                    <p className={`text-sm mt-1 ${index === 0 ? 'text-white/80' : 'text-black/70'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-black py-16 sm:py-20 md:py-24 relative overflow-hidden scroll-mt-20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
                  Let&apos;s build your app.
                </h2>
                <p className="text-lg sm:text-xl text-white px-4">
                  Have an idea? Tell us about it!
                </p>
              </motion.div>

              {/* Hidden iframe to receive form submission */}
              <iframe 
                name="hidden_iframe" 
                id="hidden_iframe" 
                className="hidden" 
                title="hidden"
                onLoad={() => {
                  // When iframe loads, form was submitted successfully
                  setFormState({ loading: false, success: true, error: null });
                  setTimeout(() => {
                    formRef.current?.reset();
                  }, 500);
                  setTimeout(() => {
                    setFormState({ loading: false, success: false, error: null });
                  }, 5000);
                }}
              ></iframe>
              
              <motion.form
                ref={formRef}
                variants={fadeUp}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border border-black/10"
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormState({ loading: true, success: false, error: null });
                  
                  // Get values directly from form elements
                  const form = e.currentTarget;
                  const nameInput = form.querySelector('[name="entry.1437158386"]') as HTMLInputElement;
                  const emailInput = form.querySelector('[name="entry.1039381460"]') as HTMLInputElement;
                  const projectInput = form.querySelector('[name="entry.27566977"]') as HTMLTextAreaElement;
                  
                  const name = nameInput?.value?.trim() || '';
                  const email = emailInput?.value?.trim() || '';
                  const project = projectInput?.value?.trim() || '';
                  
                  if (!name || !email || !project) {
                    setFormState({
                      loading: false,
                      success: false,
                      error: 'Please fill in all fields.',
                    });
                    return;
                  }
                  
                  // Create a temporary form element and submit it to hidden iframe
                  const tempForm = document.createElement('form');
                  tempForm.method = 'POST';
                  tempForm.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeIydgsTT1lczXV_GkuIZxAQ12wgeykAZkhWOARA6Pp0vOf6Q/formResponse';
                  tempForm.target = 'hidden_iframe';
                  tempForm.style.display = 'none';
                  
                  // Helper to add hidden input
                  const addInput = (name: string, value: string) => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = name;
                    input.value = value;
                    tempForm.appendChild(input);
                  };
                  
                  // Get current timestamp
                  const timestamp = Date.now();
                  
                  // Add all form fields with CORRECT entry IDs
                  addInput('entry.1437158386', name);
                  addInput('entry.1039381460', email);
                  addInput('entry.27566977', project);
                  addInput('fvv', '1');
                  addInput('partialResponse', '[null,null,"-8133584164002413601"]');
                  addInput('pageHistory', '0');
                  addInput('fbzx', '-8133584164002413601');
                  addInput('submissionTimestamp', timestamp.toString());
                  
                  // Append to body and submit
                  document.body.appendChild(tempForm);
                  tempForm.submit();
                  document.body.removeChild(tempForm);
                }}
              >

                <div className="grid gap-6 sm:gap-8">
                  {formState.success && (
                    <div className="rounded-xl bg-green-50 border-2 border-green-200 p-4 text-green-800 text-sm">
                      ✓ Thank you! Your response has been submitted successfully.
                    </div>
                  )}
                  {formState.error && (
                    <div className="rounded-xl bg-red-50 border-2 border-red-200 p-4 text-red-800 text-sm">
                      ✗ {formState.error}
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="grid gap-3">
                    <label htmlFor="entry_1437158386" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                      Name
                    </label>
                    <input
                      id="entry_1437158386"
                      name="entry.1437158386"
                      type="text"
                      required
                      placeholder="Your answer"
                      className="rounded-xl border-2 border-black/20 bg-white px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-black placeholder:text-black/40 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="grid gap-3">
                    <label htmlFor="entry_1039381460" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                      Email
                    </label>
                    <input
                      id="entry_1039381460"
                      name="entry.1039381460"
                      type="email"
                      required
                      placeholder="Your answer"
                      className="rounded-xl border-2 border-black/20 bg-white px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-black placeholder:text-black/40 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                    />
                  </div>

                  {/* Project Idea Field */}
                  <div className="grid gap-3">
                    <label htmlFor="entry_27566977" className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                      Project Idea
                    </label>
                    <textarea
                      id="entry_27566977"
                      name="entry.27566977"
                      rows={6}
                      required
                      placeholder="Your answer"
                      className="rounded-xl border-2 border-black/20 bg-white px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-black placeholder:text-black/40 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-black text-white px-8 sm:px-10 py-4 sm:py-5 text-sm font-bold uppercase tracking-wide hover:bg-black/90 transition-colors touch-manipulation"
                  >
                    Submit
                  </button>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 text-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
            {/* Company Info */}
            <div className="space-y-4 sm:space-y-6">
              <Image
                src={`${process.env.NODE_ENV === 'production' ? '/Arkawell' : ''}/arkawell-logo-light.png`}
                alt="Arkawell logo"
                width={140}
                height={48}
                style={{ maxWidth: "240px", height: "48px", width: "auto" }}
                // className="h-12 w-auto"
              />
              <p className="text-white text-sm sm:text-base leading-relaxed max-w-xs">
                Transforming ideas into reality through expert app development and innovative solutions.
              </p>
              <p className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Smart Tech. Simple Solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link href="#home" className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base touch-manipulation">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base touch-manipulation">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base touch-manipulation">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base touch-manipulation">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="#services"
                      className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base touch-manipulation line-clamp-1"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">
                Get In Touch
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a
                    href="tel:1-800-987-6543"
                    className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base flex items-center gap-3 touch-manipulation"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="#a1a1a1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm sm:text-base">1-800-987-6543</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@arkawell.com"
                    className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base flex items-center gap-3 touch-manipulation"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="#a1a1a1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm sm:text-base break-all">info@arkawell.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <p className="text-white text-xs sm:text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Arkawell. All rights reserved.
              </p>
              <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
                <Link href="#" className="text-[#a1a1a1] hover:text-white transition-colors touch-manipulation">
                  Privacy Policy
                </Link>
                <span className="text-[#a1a1a1]">|</span>
                <Link href="#" className="text-[#a1a1a1] hover:text-white transition-colors touch-manipulation">
                  Terms of Service
                </Link>
                <span className="text-[#a1a1a1]">|</span>
                <Link href="#" className="text-[#a1a1a1] hover:text-white transition-colors touch-manipulation">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
