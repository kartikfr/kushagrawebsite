import { useState } from 'react';
import { Play, CheckCircle, XCircle, ArrowRight, ExternalLink, Shield, Users, Target, TrendingUp, Clock, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import CalendlyModal from '../components/CalendlyModal';
import MetricChip from '../components/MetricChip';
import SectionContainer from '../components/SectionContainer';
import { HeroTrustBadges, SectionTrustBadges, FooterTrustBadges, InlineTrustBadges } from '../components/TrustBadgeGrid';
import { ClientTestimonialBadge, RatingBadge, SuccessBadge } from '../components/TestimonialBadge';
import { ImpressionsStatsBadge, CallsStatsBadge, RevenueStatsBadge } from '../components/StatsBadge';
import LinkedInCarousel from '../components/LinkedInCarousel';

const Index = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);


  const openVSL = () => {
    window.open('https://www.loom.com/share/711b933ba9d54f78b50486f9da431a0f?sid=c69b5e3b-2612-449d-ad0c-b851dbbbeffc', '_blank');
  };

  const openBenLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ben-sharf-b554a5b3/', '_blank');
  };

  const openJimmyLinkedIn = () => {
    window.open('https://www.linkedin.com/in/yojimmykim/', '_blank');
  };

  const faqData = [
    {
      question: "How fast will I see results?",
      answer: "Many see traction within 14–30 days; compounding growth continues monthly."
    },
    {
      question: "Do I have to post daily?",
      answer: "No. We design a cadence that fits your bandwidth; you approve assets; we handle the ops."
    },
    {
      question: "Who writes the content?",
      answer: "We do—based on your voice, expertise, and interviews."
    },
    {
      question: "Will you handle DMs?",
      answer: "We draft scripts and frameworks; execution is tailored to your comfort and compliance preferences."
    },
    {
      question: "Is it safe to grow followers this way?",
      answer: "Yes. We use organic, manual, compliant methods aligned to LinkedIn best practices."
    },
    {
      question: "What access do you need?",
      answer: "Temporary access to your profile assets and scheduling tools; we keep security tight and can work through approved workflows."
    },
    {
      question: "What if I don't get clients?",
      answer: "Our engagement is outcomes-driven with a don't-pay guarantee tied to agreed metrics."
    },
    {
      question: "Who is this not for?",
      answer: "Low-ticket offers, audiences outside LinkedIn, or teams unwilling to approve assets."
    }
  ];

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      {/* Navigation */}
      <Navigation onCalendlyOpen={() => setIsCalendlyOpen(true)} />

      {/* Hero Section */}
       <SectionContainer id="hero" className="pt-24 pb-16 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Animated background gradient */}
         <div className="absolute inset-0 gradient-animated opacity-5 -z-10" />
         
         <div className="text-center max-w-4xl mx-auto px-4">
           {/* Main Headline - $0 Strategy */}
           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
             THE <span className="text-accent">$0 STRATEGY:</span> <br className="hidden sm:block" />
             <span className="text-accent">5 Organic Clients From LinkedIn</span> <br className="hidden md:block" />
             Every 4 Weeks.
          </h1>
          
           {/* Risk-Free Guarantee - Clean & Simple */}
           <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-12 text-accent">
             You Only Pay After We Close Them.
           </div>

           {/* Description - Concise */}
           <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
             Get <strong className="text-accent font-semibold">5+ high-ticket clients</strong> every 4 weeks with <strong className="text-accent font-semibold">zero ad spend</strong>—no posting daily or upfront fees.
           </p>

           {/* CTA Buttons - More Spaced */}
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setIsCalendlyOpen(true)}
               className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring w-full sm:w-auto"
            >
               Book Your Free Scale with LinkedIn Audit
            </button>
            <button
              onClick={openVSL}
               className="btn-glass px-8 py-4 text-lg font-semibold focus-ring flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Play size={20} />
              Watch 3-min VSL
            </button>
          </div>

           {/* Trust Elements - Simplified */}
           <div className="space-y-6">
             <div className="flex flex-wrap justify-center gap-4">
               <MetricChip>💰 $0 Upfront</MetricChip>
               <MetricChip>🎯 5 Clients</MetricChip>
               <MetricChip>🚫 No Ads</MetricChip>
               <MetricChip>⏰ 4 Weeks</MetricChip>
          </div>

             <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 max-w-2xl mx-auto">
               <p className="text-sm md:text-base font-semibold text-accent">
                 RISK-FREE: Pay $0 Until They Sign
          </p>
             </div>
           </div>
        </div>
      </SectionContainer>

      {/* Pain Section */}
      <SectionContainer id="pain" className="bg-bg-1">
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
            You didn't become a coach to fight algorithms.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto px-4">
          {/* Pain Points */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-bg-2 border border-line-subtle">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-base md:text-lg">"I hate social media."</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-bg-2 border border-line-subtle">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-base md:text-lg">"I don't know what to post."</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-bg-2 border border-line-subtle">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-base md:text-lg">"I don't have time."</span>
            </div>
          </div>

          {/* Desired Outcomes */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-accent">What you want instead:</h3>
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-success-muted border border-success/20">
              <CheckCircle className="text-success flex-shrink-0" size={20} />
              <span className="text-base md:text-lg">A pipeline of inbound, qualified leads</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-success-muted border border-success/20">
              <CheckCircle className="text-success flex-shrink-0" size={20} />
              <span className="text-base md:text-lg">A brand that commands premium pricing</span>
            </div>
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-success-muted border border-success/20">
              <CheckCircle className="text-success flex-shrink-0" size={20} />
              <span className="text-base md:text-lg">Clients chasing you (not the other way around)</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="link-underline text-accent font-semibold text-base md:text-lg inline-flex items-center gap-2"
          >
            Get your free audit
            <ArrowRight size={18} />
          </button>
        </div>
      </SectionContainer>

      {/* Why Us Section */}
      <SectionContainer id="why-us">
        <div className="text-center mb-12 md:mb-16 px-4">
           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
            Why we're different: <br className="md:hidden" />
             <span className="text-accent">Scale with LinkedIn that works while you work.</span>
          </h2>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 px-4">
          <div className="text-center p-4 md:p-6 glass rounded-lg">
            <TrendingUp className="mx-auto mb-3 md:mb-4 text-accent" size={40} />
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Credibility & visibility</h3>
            <p className="text-sm md:text-base text-text-secondary">that compounds (no daily posting needed)</p>
          </div>
          <div className="text-center p-4 md:p-6 glass rounded-lg">
            <Target className="mx-auto mb-3 md:mb-4 text-accent" size={40} />
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Inbound leads</h3>
            <p className="text-sm md:text-base text-text-secondary">from targeted engagement (comments, DMs, influencer lists)</p>
          </div>
          <div className="text-center p-4 md:p-6 glass rounded-lg sm:col-span-2 lg:col-span-1">
            <Star className="mx-auto mb-3 md:mb-4 text-accent" size={40} />
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Positioning that sells</h3>
            <p className="text-sm md:text-base text-text-secondary">from "one of many" to <strong>Category of One</strong></p>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="mb-12 md:mb-16 px-4">
          <SectionTrustBadges />
        </div>

        {/* Deliverables Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-12 px-4">
          {[
            "Premium thought-leadership posts & carousels",
            "Hooks engineered for conversions", 
            "Profile optimized to top 1% standards",
            "High-impact visuals & brand system",
            "Targeted follower growth (ICP)",
            "Market & competitor research for positioning",
            "Sales assets that work 24/7",
            "Consistent 5–20 qualified calls/month",
            "Done-for-you sales funnel & consultations"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-bg-1 rounded-lg border border-line-subtle">
              <CheckCircle className="text-success flex-shrink-0 mt-0.5" size={16} />
              <span className="text-xs md:text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center px-4">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring"
          >
            See if you qualify
          </button>
        </div>
      </SectionContainer>

      {/* How It Works Section */}
      <SectionContainer id="how-it-works" className="bg-bg-1">
        <div className="text-center mb-12 md:mb-16 px-4">
             <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
               Scale with LinkedIn in <span className="text-accent">30 days</span>—done for you
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 px-4">
          <div className="text-center p-4 md:p-6 glass rounded-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">1</div>
            <h3 className="font-semibold mb-2 text-sm md:text-base">Day 0–3</h3>
            <p className="text-text-secondary text-xs md:text-sm">Deep-dive ICP + competitive positioning. We map buyers, angles, and proof.</p>
          </div>
          <div className="text-center p-4 md:p-6 glass rounded-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">2</div>
            <h3 className="font-semibold mb-2 text-sm md:text-base">Day 4–10</h3>
            <p className="text-text-secondary text-xs md:text-sm">Profile overhaul + asset kit (banner, bio, CTA, proof blocks).</p>
          </div>
          <div className="text-center p-4 md:p-6 glass rounded-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">3</div>
            <h3 className="font-semibold mb-2 text-sm md:text-base">Day 11–20</h3>
            <p className="text-text-secondary text-xs md:text-sm">Content engine + engagement matrix (hooks, carousels, influencer list, comment system, DM scripts).</p>
          </div>
          <div className="text-center p-4 md:p-6 glass rounded-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">4</div>
            <h3 className="font-semibold mb-2 text-sm md:text-base">Day 21–30</h3>
            <p className="text-text-secondary text-xs md:text-sm">Pipeline acceleration (lead magnets, call-booking nudges, offer calibration).</p>
          </div>
        </div>

        <div className="text-center bg-accent/10 border border-accent/20 rounded-lg p-4 md:p-6 mx-4">
          <p className="text-base md:text-lg mb-4">
            <strong>Outcome:</strong> Predictable <strong className="text-accent">inbound leads</strong> and <strong className="text-accent">booked calls</strong>, without your daily input.
          </p>
          <button
            onClick={() => setIsCalendlyOpen(true)}
             className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring"
          >
             Book your free Scale with LinkedIn audit
          </button>
        </div>
      </SectionContainer>

      {/* Value Stack Section */}
      <SectionContainer id="value-stack">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
            What you <span className="text-accent">get</span> (and what you <span className="text-error">never do again</span>)
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 px-4">
          {/* What You Get */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-success">✅ What You Get</h3>
            <div className="grid gap-3 md:gap-4">
              {[
                "Thought-leadership posts (weekly cadence)",
                "Carousel design system",
                "Hook library & headline tests",
                "Profile copy + creative",
                "Targeted engagement ops (comments/DMs)",
                "ICP follower growth",
                "Market & competitor research",
                "Sales assets (DM scripts, offer one-pager)",
                "Funnel consults + optimization"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-success/5 border border-success/20 rounded-lg">
                  <CheckCircle className="text-success flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What You Never Do Again */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-error">⛔ What You Never Do Again</h3>
            <div className="space-y-3 md:space-y-4">
              {[
                "Content ideation",
                "Posting or comment threads",
                "Market research",
                "Hook testing",
                "Building sales assets from scratch"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-error/5 border border-error/20 rounded-lg">
                  <XCircle className="text-error flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12 px-4">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring"
          >
            Get my personalized audit (free)
          </button>
        </div>
      </SectionContainer>

      {/* Social Proof Section */}
      <SectionContainer id="social-proof" className="bg-bg-1">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Real reviews. <span className="text-accent">Real revenue.</span>
          </h2>
          <p className="text-sm md:text-base text-text-secondary">Short Looms + LinkedIn praise + before/after data.</p>
        </div>

        {/* Loom Reviews */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 px-4">
          <div className="glass rounded-lg overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/432e2a7c81ff4b25b420e15ef85443e5?sid=5dc69e0d-5572-40cb-8273-1fd020df5f72" 
              className="w-full h-48 md:h-64"
              title="Customer Review 1"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="glass rounded-lg overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/e565df3bd2a9452cbd7461329857925b?sid=077fbfce-54fc-42ea-b8bc-6ab76f2d8166" 
              className="w-full h-48 md:h-64"
              title="Customer Review 2"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="glass rounded-lg overflow-hidden sm:col-span-2 lg:col-span-1">
            <iframe 
              src="https://www.loom.com/embed/432e2a7c81ff4b25b420e15ef85443e5?sid=f35eae34-33b8-4211-bff4-dcaaf3013bd2" 
              className="w-full h-48 md:h-64"
              title="Customer Review 3"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* LinkedIn Testimonials */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 px-4">
          {/* Ben Sharf Testimonial */}
          <div 
            onClick={openBenLinkedIn}
            className="group relative overflow-hidden rounded-lg glass border border-line-subtle cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elev-2 hover:border-accent/30 p-6"
          >
            {/* Circular Profile Image */}
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <img
                  src="/website/Ben Image.jpeg"
                  alt="Ben Sharf"
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                  loading="lazy"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-bg"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-text-primary text-lg mb-1">
                  BEN SHARF
                </h3>
                <p className="text-accent font-medium text-sm">
                  CEO AT PLATTER
                </p>
              </div>
            </div>
            
            {/* Testimonial Quote */}
             <blockquote className="text-text-secondary text-sm leading-relaxed mb-4">
               "Kushagra's approach to Scale with LinkedIn is absolutely game-changing. His attention to detail and strategic content framework helped me generate 14 qualified calls in just 3 weeks. If LinkedIn is core to your business growth in 2024, I couldn't recommend him highly enough."
             </blockquote>
            
            {/* External Link Indicator */}
            <div className="flex items-center justify-end gap-2 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View LinkedIn Profile</span>
              <ExternalLink size={12} />
            </div>
        </div>

          {/* Jimmy Kim Testimonial */}
          <div 
            onClick={openJimmyLinkedIn}
            className="group relative overflow-hidden rounded-lg glass border border-line-subtle cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elev-2 hover:border-accent/30 p-6"
          >
            {/* Circular Profile Image */}
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <img
                  src="/website/Jimmy linkedin image.jpeg"
                  alt="Jimmy Kim"
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                  loading="lazy"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-bg"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-text-primary text-lg mb-1">
                  JIMMY KIM
                </h3>
                <p className="text-accent font-medium text-sm">
                  FOUNDER AT SENDLANE
          </p>
        </div>
            </div>
            
            {/* Testimonial Quote */}
             <blockquote className="text-text-secondary text-sm leading-relaxed mb-4">
               "Kushagra transformed my Scale with LinkedIn presence from invisible to irresistible. His done-for-you approach and strategic positioning helped me build authority in my space. Even if you think you know LinkedIn, working with Kushagra will completely change your perspective on what's possible."
             </blockquote>
            
            {/* External Link Indicator */}
            <div className="flex items-center justify-end gap-2 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>View LinkedIn Profile</span>
              <ExternalLink size={12} />
            </div>
          </div>
        </div>


      </SectionContainer>

      {/* Results Section */}
      <SectionContainer id="results">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
            From <span className="text-text-tertiary">invisible</span> to <span className="text-accent">irresistible</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 px-4">
          <ImpressionsStatsBadge />
          <CallsStatsBadge />
          <RevenueStatsBadge className="sm:col-span-2 lg:col-span-1" />
          </div>

         {/* Scale with LinkedIn Carousel */}
         <div className="px-4 mb-12">
           <LinkedInCarousel />
        </div>

        <div className="text-center px-4">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring"
          >
            Book your free audit
          </button>
        </div>
      </SectionContainer>

      {/* Offer Section */}
      <SectionContainer id="offer" className="bg-bg-1">
        <div className="text-center max-w-3xl mx-auto px-4">
          <div className="mb-6 md:mb-8">
            <Shield className="mx-auto text-accent mb-4" size={48} />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Results guaranteed. <br />
              <span className="text-accent">Or you don't pay.</span>
            </h2>
            <p className="text-base md:text-lg text-text-secondary mb-6 md:mb-8">
              We put our skin in the game. If we don't deliver the outcomes we agree on, <strong className="text-text-primary">you don't pay</strong>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="flex items-center gap-3 p-3 md:p-4 glass rounded-lg">
              <CheckCircle className="text-success flex-shrink-0" size={20} />
              <span className="text-sm md:text-base">No ad spend</span>
            </div>
            <div className="flex items-center gap-3 p-3 md:p-4 glass rounded-lg">
              <CheckCircle className="text-success flex-shrink-0" size={20} />
              <span className="text-sm md:text-base">100% done-for-you</span>
            </div>
            <div className="flex items-center gap-3 p-3 md:p-4 glass rounded-lg sm:col-span-2 lg:col-span-1">
              <CheckCircle className="text-success flex-shrink-0" size={20} />
              <span className="text-sm md:text-base">Limited client slots</span>
            </div>
          </div>

          {/* Inline Trust Badges */}
          <div className="mb-6 md:mb-8">
            <InlineTrustBadges />
          </div>

          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring"
          >
            Claim your slot
          </button>
        </div>
      </SectionContainer>

      {/* Pricing Section */}
      <SectionContainer id="pricing">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8">
            Engagement model
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto">
            We start with a free audit and a bespoke 90-day roadmap. Transparent pricing after your audit based on scope and ICP complexity.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          <div className="glass rounded-lg p-6 md:p-8">
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-center py-3 md:py-4 border-b border-line-subtle">
                <span className="text-base md:text-lg font-semibold">Audit & Roadmap</span>
                <span className="text-lg md:text-xl font-bold text-accent">Free</span>
              </div>
              <div className="flex justify-between items-center py-3 md:py-4 border-b border-line-subtle">
                <span className="text-base md:text-lg font-semibold">Monthly DFY</span>
                <span className="text-sm md:text-lg text-text-secondary">Custom (based on volume & goals)</span>
              </div>
              <div className="flex justify-between items-center py-3 md:py-4">
                <span className="text-base md:text-lg font-semibold">Guarantee</span>
                <span className="text-sm md:text-lg text-success font-semibold">Results or you don't pay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12 px-4">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring"
          >
            Start with free audit
          </button>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer id="faq" className="bg-bg-1">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4 px-4">
          {faqData.map((faq, index) => (
            <div key={index} className="glass rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                className="w-full p-4 md:p-6 text-left flex justify-between items-center hover:bg-bg-2/50 transition-colors"
              >
                <span className="font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                <div className={`transform transition-transform text-lg md:text-xl ${selectedFAQ === index ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>
              {selectedFAQ === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-line-subtle">
                  <p className="text-text-secondary pt-3 md:pt-4 text-sm md:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 px-4">
          <button
            onClick={() => setIsCalendlyOpen(true)}
             className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring"
          >
             Book Your Free Scale with LinkedIn Audit
          </button>
          <p className="text-xs md:text-sm text-text-tertiary mt-3 md:mt-4">
            <strong className="text-accent">Bonus:</strong> Personalized Loom breakdown of your profile, content, and strategy <span className="text-accent font-semibold">($500 value)</span>.
          </p>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer id="final-cta" className="bg-bg-1">
        <div className="text-center max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to stop posting and <br />
            <span className="text-accent">start profiting?</span>
          </h2>
           <p className="text-base md:text-lg text-text-secondary mb-8 md:mb-12">
             Get a personalized Scale with LinkedIn audit with a Loom breakdown of your profile, content, and strategy.
           </p>

          {/* Value Proposition Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="flex items-center gap-3 p-4 glass rounded-lg">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-lg">✓</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-text-primary">Free Audit</div>
                <div className="text-xs text-text-secondary">$500 value</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 glass rounded-lg">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-lg">🎯</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-text-primary">Custom Strategy</div>
                <div className="text-xs text-text-secondary">90-day roadmap</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 glass rounded-lg">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-lg">📹</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-text-primary">Loom Analysis</div>
                <div className="text-xs text-text-secondary">Video breakdown</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 glass rounded-lg">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-lg">⚡</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-text-primary">Quick Results</div>
                <div className="text-xs text-text-secondary">14-30 days</div>
              </div>
            </div>
          </div>
          
           {/* Calendly CTA Section */}
           <div className="glass rounded-lg p-8 max-w-2xl mx-auto text-center">
             <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
               Book Your Free Scale with LinkedIn Strategy Call
             </h3>
             <p className="text-text-secondary mb-6">
               Get your personalized $0 Strategy roadmap and discover how to get 5 organic clients from LinkedIn every 4 weeks.
             </p>
             
             <button
               onClick={() => setIsCalendlyOpen(true)}
               className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring mb-4"
             >
               Book Your Free Strategy Call
             </button>
             
             <div className="flex flex-wrap justify-center gap-4 text-sm text-text-tertiary">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-accent rounded-full"></div>
                 <span>15-min call</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-accent rounded-full"></div>
                 <span>Free audit</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-accent rounded-full"></div>
                 <span>$500 value</span>
               </div>
             </div>
           </div>

          {/* Additional Value Props */}
          <div className="mt-8 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-text-secondary">Organic Growth</div>
            </div>
            <div className="text-center p-4 glass rounded-lg">
              <div className="text-2xl font-bold text-accent mb-1">5-20</div>
              <div className="text-sm text-text-secondary">Qualified Calls/Month</div>
            </div>
            <div className="text-center p-4 glass rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="text-2xl font-bold text-accent mb-1">8-10×</div>
              <div className="text-sm text-text-secondary">More Impressions</div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <footer className="border-t border-line-subtle py-12 md:py-16 bg-bg-2">
        <div className="max-w-4xl mx-auto px-4">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
             <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
               Ready to Scale with LinkedIn?
             </h3>
            <p className="text-text-secondary text-lg mb-6 max-w-2xl mx-auto">
              Join 100+ coaches and consultants who've transformed their LinkedIn presence and generated high-ticket clients.
            </p>
            <button
              onClick={() => setIsCalendlyOpen(true)}
               className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring mb-8"
             >
               Book Your Free Scale with LinkedIn Audit
             </button>
            
            {/* Key Metrics */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>8-10× More Impressions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>5-20 Qualified Calls/Month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>100% Organic Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Results Guaranteed</span>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-line-subtle pt-8">
            <div className="flex flex-col items-center gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img 
                  src="/website/Scale_with_LinkedIn_Favicon-removebg-preview.png" 
                  alt="Scale with LinkedIn Logo" 
                  className="h-8 w-auto opacity-90"
                  loading="lazy"
                />
                <span className="text-text-primary font-bold text-lg">Scale with LinkedIn</span>
              </div>
              
              {/* Copyright */}
              <div className="text-sm text-text-tertiary text-center">
                © 2025 Scale with LinkedIn Expert by Kushagra Rawat. All rights reserved.
              </div>
              
              {/* LinkedIn Link */}
              <a 
                href="https://www.linkedin.com/in/kushagrarawat/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-2 text-sm text-text-tertiary"
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
