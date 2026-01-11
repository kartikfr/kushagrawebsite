import { useState, useEffect, useRef } from 'react';
import { Play, CheckCircle, XCircle, ArrowRight, ExternalLink, Shield, Users, Target, TrendingUp, Clock, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import CalendlyModal from '../components/CalendlyModal';
import MetricChip from '../components/MetricChip';
import SectionContainer from '../components/SectionContainer';
import { HeroTrustBadges, SectionTrustBadges, FooterTrustBadges, InlineTrustBadges } from '../components/TrustBadgeGrid';
import { ClientTestimonialBadge, RatingBadge, SuccessBadge } from '../components/TestimonialBadge';
import { ImpressionsStatsBadge, CallsStatsBadge, RevenueStatsBadge } from '../components/StatsBadge';
import LinkedInCarousel from '../components/LinkedInCarousel';
import ResultsCarousel from '../components/ResultsCarousel';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const painRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const valueStackRef = useRef<HTMLDivElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);


  const openVSL = () => {
    window.open('https://www.loom.com/share/711b933ba9d54f78b50486f9da431a0f?sid=c69b5e3b-2612-449d-ad0c-b851dbbbeffc', '_blank');
  };

  const openBenLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ben-sharf-b554a5b3/', '_blank');
  };

  const openJimmyLinkedIn = () => {
    window.open('https://www.linkedin.com/in/yojimmykim/', '_blank');
  };

  // GSAP Scroll Animations
  useEffect(() => {
    // Hero section - fade in on load
    if (heroRef.current) {
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }

    // Pain Section - fade in from bottom
    if (painRef.current) {
      gsap.from(painRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: painRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      });
    }

    // Why Us Section - fade in from bottom
    if (whyUsRef.current) {
      gsap.from(whyUsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      });
    }

    // Value Stack Section - fade in from bottom
    if (valueStackRef.current) {
      gsap.from(valueStackRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: valueStackRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      });
    }

    // Social Proof Section - fade in from bottom
    if (socialProofRef.current) {
      gsap.from(socialProofRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: socialProofRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      });
    }

    // Results Carousel - fade in and slide from right
    if (resultsRef.current) {
      gsap.from(resultsRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: resultsRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      });
    }

    // Footer - fade in from bottom
    if (footerRef.current) {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      {/* Navigation */}
      <Navigation onCalendlyOpen={() => setIsCalendlyOpen(true)} />

      {/* Hero Section */}
       <SectionContainer id="hero" ref={heroRef} className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
        {/* Animated background gradient */}
         <div className="absolute inset-0 gradient-animated opacity-5 -z-10" />
         
         <div className="max-w-7xl mx-auto">
           <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
             {/* Left Column - Text Content */}
             <div className="flex-1 text-center lg:text-left w-full max-w-2xl lg:max-w-none">
               {/* Main Headline */}
               <h1 className="text-[1.625rem] leading-[1.2] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold sm:leading-[1.15] mb-4 sm:mb-5 tracking-tight">
                 We help Coaches & Consultants consistently sign{' '}
                 <span className="text-accent whitespace-nowrap">2–5 high-paying Clients</span>{' '}
                 every month using Strategy-Based Marketing
          </h1>
          
               {/* Guarantee Line */}
               <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-accent leading-relaxed max-w-xl mx-auto lg:mx-0">
                 We guarantee at least 2x ROI (100% Organically, No Ad Spend, no cold dm or a complex funnel) Or You Don't Pay
          </p>

               {/* CTA Button */}
               <div className="mb-6 sm:mb-8">
            <button
              onClick={() => setIsCalendlyOpen(true)}
                   className="btn-gradient w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold focus-ring"
                 >
                   Book your free audit today
            </button>
          </div>

               {/* Trust Elements - Single line on mobile */}
               <div className="flex justify-center lg:justify-start gap-1.5 sm:gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
                 <MetricChip>🎯 1-5 Clients</MetricChip>
                 <MetricChip>🚫 No Ads</MetricChip>
                 <MetricChip>📈 8x-10x</MetricChip>
               </div>
          </div>

             {/* Right Column - Image */}
             <div className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-2xl mt-4 lg:mt-0">
               <img
                 src="/website/Kushagra First Main Section Image.png"
                 alt="Kushagra - Scale with LinkedIn Expert"
                 className="w-full h-auto max-h-[280px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-none rounded-xl shadow-2xl object-cover"
                 loading="eager"
               />
             </div>
           </div>
        </div>
      </SectionContainer>

      {/* Pain Section */}
      <SectionContainer ref={painRef} id="pain" className="bg-bg-1">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            For Coaches, Consultants & Entrepreneurs Ready to Charge 10x.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            You didn't become a coach to chase engagement, fight algorithms, or spend 20+ hours a week figuring out content.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-5 sm:mb-6 md:mb-8">
            Let's be honest. Most of YOU say one of two things before they start:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-bg-2 border border-line-subtle transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-sm sm:text-base">"I hate social media."</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-bg-2 border border-line-subtle transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-sm sm:text-base">"I never want to do it."</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-bg-2 border border-line-subtle transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-sm sm:text-base">"I don't know how to do it"</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-bg-2 border border-line-subtle transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-sm sm:text-base">"I don't have time"</span>
            </div>
          </div>
          <p className="text-center text-text-secondary mt-5 sm:mt-6 md:mt-8 max-w-2xl mx-auto text-sm sm:text-base">
            You're too busy running your business to figure out what to post, who to engage, or how to stay consistent.
          </p>
          <p className="text-center text-text-secondary mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            And the idea of "being everywhere" just feels overwhelming.
          </p>
        </div>
      </SectionContainer>

      {/* Why Us Section */}
      <SectionContainer ref={whyUsRef} id="why-us">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
            Why We're Different:{' '}
            <span className="text-accent block sm:inline mt-1 sm:mt-0">We Make LinkedIn Work For You</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            You get credibility, visibility & inbound leads…{' '}
            <span className="block mt-1 sm:mt-0">👉 Without posting daily, chasing engagement, or wasting hours online.</span>
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          {[
            "✅ Premium thought-leadership posts & carousels",
            "✅ Hooks engineered for conversions", 
            "✅ Targeted engagement (comments, DMs, influencer lists)",
            "✅ Profile optimized to top 1% standards",
            "✅ High-impact visuals & branding",
            "✅ targeted follower growth (ICP)",
            "✅ Market & competitor research for positioning",
            "✅ Sales assets that work 24/7",
            "✅ Consistent 5–20 qualified calls/month",
            "✅ Done-for-you sales funnel & consultations"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 md:p-4 bg-bg-1 rounded-xl border border-line-subtle transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-bg-2">
              <span className="text-sm sm:text-base leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-3.5 sm:p-4 max-w-2xl mx-auto mb-5 sm:mb-6">
            <p className="text-base sm:text-lg md:text-xl font-bold text-accent">
              ⚡ 100% Done-For-You. Results Guaranteed.
            </p>
        </div>

          <div className="bg-bg-2 rounded-2xl p-5 sm:p-6 md:p-8 border border-line-subtle">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-5">
              If You're a Coach, Consultant, or Entrepreneur Who Wants To:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 mb-5 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-bg-1 border border-line-subtle">
                <CheckCircle className="text-success flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Attract a steady stream of inbound leads</span>
          </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-bg-1 border border-line-subtle">
                <CheckCircle className="text-success flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Convert more of them into high-paying clients</span>
          </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-bg-1 border border-line-subtle">
                <CheckCircle className="text-success flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Become the go-to expert in your industry</span>
          </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-bg-1 border border-line-subtle">
                <CheckCircle className="text-success flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Avoid wasting time figuring out what to post</span>
          </div>
        </div>
            <p className="text-center text-accent font-bold mb-5 sm:mb-6 text-sm sm:text-base">
              This is for you.
          </p>
          <button
            onClick={() => setIsCalendlyOpen(true)}
              className="btn-gradient w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold focus-ring"
          >
              See if you qualify
          </button>
          </div>
        </div>
      </SectionContainer>


      {/* Value Stack Section */}
      <SectionContainer ref={valueStackRef} id="value-stack">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Your Time is Money, We Save You Both
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-5 sm:mb-6 md:mb-8 text-center">
            You'll never again waste time on:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
            {[
              "⛔ Content ideation",
              "⛔ Posting, engagement, or comment threads",
              "⛔ Market or competitor research",
              "⛔ Hook testing or headline writing",
              "⛔ Creating sales assets from scratch"
              ].map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 md:p-4 bg-bg-1 rounded-xl border border-line-subtle">
                <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
          </div>

          <p className="text-center text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8">
            You don't need to learn how to "do LinkedIn." We already have.
          </p>
          
          <div className="text-center bg-accent/10 border border-accent/20 rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <p className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">
              So, do you want to charge Walmart prices forever?
            </p>
            <p className="text-base sm:text-lg md:text-xl font-bold">
              Or invest the next 6 months in building a brand that lets you charge 10x the average?
            </p>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold focus-ring"
          >
            Get my personalized audit (free)
          </button>
        </div>
      </SectionContainer>

      {/* Social Proof Section */}
      <SectionContainer ref={socialProofRef} id="social-proof" className="bg-bg-1">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Reviews
          </h2>
        </div>

        {/* LinkedIn Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8">
          {/* Ben Sharf Testimonial */}
          <div 
            onClick={openBenLinkedIn}
            className="group relative overflow-hidden rounded-2xl glass border border-line-subtle cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-elev-2 hover:border-accent/30 p-4 sm:p-5 md:p-6"
          >
            {/* Circular Profile Image */}
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="relative flex-shrink-0">
                <img
                  src="/website/Ben Image.jpeg"
                  alt="Ben Sharf"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-accent/20"
              loading="lazy"
            />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full border-2 border-bg"></div>
          </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary text-base sm:text-lg mb-0.5 sm:mb-1 truncate">
                  BEN SHARF
                </h3>
                <p className="text-accent font-medium text-xs sm:text-sm truncate">
                  CEO AT PLATTER
                </p>
          </div>
        </div>

            {/* Testimonial Quote */}
            <blockquote className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              "Kushagra's approach to Scale with LinkedIn is absolutely game-changing. His attention to detail and strategic content framework helped me generate 14 qualified calls in just 3 weeks. If LinkedIn is core to your business growth in 2024, I couldn't recommend him highly enough."
            </blockquote>
            
            {/* External Link Indicator */}
            <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-accent text-xs font-medium opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View LinkedIn Profile</span>
              <ExternalLink size={12} />
          </div>
        </div>

          {/* Jimmy Kim Testimonial */}
          <div 
            onClick={openJimmyLinkedIn}
            className="group relative overflow-hidden rounded-2xl glass border border-line-subtle cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-elev-2 hover:border-accent/30 p-4 sm:p-5 md:p-6"
          >
            {/* Circular Profile Image */}
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="relative flex-shrink-0">
                <img
                  src="/website/Jimmy linkedin image.jpeg"
                  alt="Jimmy Kim"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-accent/20"
                  loading="lazy"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full border-2 border-bg"></div>
        </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary text-base sm:text-lg mb-0.5 sm:mb-1 truncate">
                  JIMMY KIM
                </h3>
                <p className="text-accent font-medium text-xs sm:text-sm truncate">
                  FOUNDER AT SENDLANE
            </p>
          </div>
            </div>
            
            {/* Testimonial Quote */}
            <blockquote className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              "Kushagra transformed my Scale with LinkedIn presence from invisible to irresistible. His done-for-you approach and strategic positioning helped me build authority in my space. Even if you think you know LinkedIn, working with Kushagra will completely change your perspective on what's possible."
            </blockquote>
            
            {/* External Link Indicator */}
            <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-accent text-xs font-medium opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View LinkedIn Profile</span>
              <ExternalLink size={12} />
            </div>
          </div>

          {/* Davis Testimonial */}
          <div className="group relative overflow-hidden rounded-2xl glass border border-line-subtle transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-elev-2 hover:border-accent/30 p-4 sm:p-5 md:p-6 md:col-span-2 lg:col-span-1">
            {/* Circular Profile Image */}
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="relative flex-shrink-0">
                <img
                  src="/website/Davis Profile Image.jpeg"
                  alt="Davis"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-accent/20"
                  loading="lazy"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-accent rounded-full border-2 border-bg"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary text-base sm:text-lg mb-0.5 sm:mb-1 truncate">
                  DAVIS
                </h3>
                <p className="text-accent font-medium text-xs sm:text-sm truncate">
                  CLIENT
                </p>
              </div>
            </div>
            
            {/* Testimonial Quote */}
            <blockquote className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              "Kush understands LinkedIn better than most people I've worked with. Clear messaging, strong content game, and a good system"
            </blockquote>
          </div>
        </div>

        {/* Results Carousel */}
        <div ref={resultsRef} className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 -mx-4 sm:mx-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-5 sm:mb-6 md:mb-8 text-text-primary px-4 sm:px-0">
            Results That Speak for Themselves
          </h3>
          <ResultsCarousel />
        </div>

      </SectionContainer>


      {/* Footer */}
      <footer ref={footerRef} className="border-t border-line-subtle py-10 sm:py-12 md:py-16 bg-bg-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Main Footer Content */}
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
              If you're a coach or consultant and you're ready for consistent, qualified clients, here's your next step:
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-5 sm:mb-6">
              Book a free LinkedIn Audit Call.
            </h3>
            <div className="text-left max-w-2xl mx-auto mb-6 sm:mb-8">
              <p className="text-text-secondary mb-3 sm:mb-4 text-sm sm:text-base">On this call, we'll:</p>
              <ul className="space-y-2.5 sm:space-y-3 text-text-secondary mb-5 sm:mb-6">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-accent mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                  <span className="text-sm sm:text-base">Review your LinkedIn profile & content and your whole funnel.</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-accent mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                  <span className="text-sm sm:text-base">Identify the things holding you back from getting clients</span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-accent mt-0.5 sm:mt-1 text-sm sm:text-base">•</span>
                  <span className="text-sm sm:text-base">Give you the next 30-day roadmap to 10–15 calls per month</span>
                </li>
              </ul>
              <p className="text-text-secondary mb-5 sm:mb-6 text-sm sm:text-base">
                And as a bonus, when you book today, you'll also receive our LinkedIn Mastery blueprint Course for Free, normally reserved for paying clients.
              </p>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-5 sm:mb-6">
              Stop posting to impress others, Start posting to get clients.
            </p>
          <button
            onClick={() => setIsCalendlyOpen(true)}
              className="btn-gradient w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold focus-ring mb-6 sm:mb-8"
          >
              👉 Book Your Free Audit Call
          </button>
        </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-line-subtle pt-6 sm:pt-8">
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              {/* Logo */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <img 
                  src="/website/Scale_with_LinkedIn_Favicon-removebg-preview.png" 
                  alt="Scale with LinkedIn Logo" 
                  className="h-7 sm:h-8 w-auto opacity-90"
                  loading="lazy"
                />
                <span className="text-text-primary font-bold text-base sm:text-lg">Scale with LinkedIn</span>
          </div>
              
              {/* Copyright */}
              <div className="text-xs sm:text-sm text-text-tertiary text-center">
                © 2025 Scale with LinkedIn Expert by Kushagra Rawat. All rights reserved.
        </div>
              
              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/kushagrarawat/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-2 text-xs sm:text-sm text-text-tertiary py-2"
              >
                <ExternalLink size={14} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />
    </div>
  );
};

export default Index;
