import { useState } from 'react';
import { Play, CheckCircle, XCircle, ArrowRight, ExternalLink, Shield, Users, Target, TrendingUp, Clock, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import CalendlyModal from '../components/CalendlyModal';
import MetricChip from '../components/MetricChip';
import SectionContainer from '../components/SectionContainer';
import NumberCounter from '../components/NumberCounter';

const Index = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const openVSL = () => {
    window.open('https://www.loom.com/share/711b933ba9d54f78b50486f9da431a0f?sid=c69b5e3b-2612-449d-ad0c-b851dbbbeffc', '_blank');
  };

  const openResultsFolder = () => {
    window.open('https://drive.google.com/drive/folders/1xf3NnNHhD3q_mjRV8zUgqPl0xi4AI2cS?usp=sharing', '_blank');
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
      <SectionContainer id="hero" className="pt-20 pb-12 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 gradient-animated opacity-10 -z-10" />
        
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight">
            We Will Help Coaches, Consultants & Entrepreneurs get{' '}
            <span className="text-accent inline-flex items-baseline gap-1">
              <NumberCounter end={8} suffix="x" className="text-accent" />-<NumberCounter end={10} suffix="x" className="text-accent" />
            </span>{' '}
            linkedin impressions and Sign{' '}
            <span className="text-accent">
              <NumberCounter end={1} />-<NumberCounter end={5} />{' '}
              High Ticket Clients Per Month
            </span>{' '}
            (100% Organically, No Ad Spend){' '}
            <span className="text-accent">Or You Don't Pay</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Let Us Handle LinkedIn, So You Can Handle Clients
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-8 max-w-lg mx-auto">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-gradient px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold focus-ring w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              Book Your Free LinkedIn Audit
            </button>
            <button
              onClick={openVSL}
              className="btn-glass px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold focus-ring flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              <Play size={18} className="sm:hidden" />
              <Play size={20} className="hidden sm:block" />
              Watch 3-min VSL
            </button>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 md:mb-6">
            <MetricChip>💯 Done-For-You</MetricChip>
            <MetricChip>🎯 Results Guaranteed</MetricChip>
            <MetricChip>🚫 No Ad Spend</MetricChip>
          </div>

          <p className="text-sm md:text-base text-text-tertiary max-w-md mx-auto">
            Your future clients are already on LinkedIn, let's make sure they find you.
          </p>
          
          <div className="mt-6 md:mt-8">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="link-underline text-accent font-semibold text-base md:text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              Book your free audit today
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </SectionContainer>

      {/* Pain Section */}
      <SectionContainer id="pain" className="bg-bg-1">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            For Coaches, Consultants & Entrepreneurs Ready to Charge 10x.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-6 md:mb-8 px-4">
            You didn't become a coach to chase engagement, fight algorithms, or spend 20+ hours a week figuring out content.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 md:mb-12 px-4">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
            Let's be honest. Most of YOU say one of two things before they start:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-bg-2 border border-line-subtle transition-all duration-300 hover:scale-105">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-sm md:text-base">"I hate social media."</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-bg-2 border border-line-subtle transition-all duration-300 hover:scale-105">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-sm md:text-base">"I never want to do it."</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-bg-2 border border-line-subtle transition-all duration-300 hover:scale-105">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-sm md:text-base">"I don't know how to do it"</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-bg-2 border border-line-subtle transition-all duration-300 hover:scale-105">
              <XCircle className="text-error flex-shrink-0" size={20} />
              <span className="text-sm md:text-base">"I don't have time"</span>
            </div>
          </div>
          <p className="text-center text-text-secondary mt-6 md:mt-8 max-w-2xl mx-auto">
            You're too busy running your business to figure out what to post, who to engage, or how to stay consistent. 
            And the idea of "being everywhere" just feels overwhelming.
          </p>
        </div>

      </SectionContainer>

      {/* Why Us Section */}
      <SectionContainer id="why-us">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Why We're Different: <br className="sm:hidden" />
            <span className="text-accent">We Make LinkedIn Work For You</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            You get credibility, visibility & inbound leads… <br className="hidden sm:block" />
            👉 Without posting daily, chasing engagement, or wasting hours online.
          </p>
        </div>


        {/* Deliverables Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 px-4">
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
            <div key={index} className="flex items-start gap-3 p-3 md:p-4 bg-bg-1 rounded-lg border border-line-subtle transition-all duration-300 hover:scale-105 hover:bg-bg-2">
              <span className="text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-8 md:mb-12 px-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Shield className="text-accent" size={20} />
            <span className="text-accent font-semibold">⚡ 100% Done-For-You. Results Guaranteed.</span>
          </div>
        </div>

        <div className="bg-bg-2 rounded-xl p-6 md:p-8 border border-line-subtle mx-4">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
            If You're a Coach, Consultant, or Entrepreneur Who Wants To:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-2 text-success" size={24} />
              <p className="text-sm md:text-base">Attract a steady stream of inbound leads</p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto mb-2 text-success" size={24} />
              <p className="text-sm md:text-base">Convert more of them into high-paying clients</p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto mb-2 text-success" size={24} />
              <p className="text-sm md:text-base">Become the go-to expert in your industry</p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto mb-2 text-success" size={24} />
              <p className="text-sm md:text-base">Avoid wasting time figuring out what to post</p>
            </div>
          </div>
          <p className="text-center text-accent font-semibold text-lg mb-6">This is for you.</p>
          <div className="text-center">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              See if you qualify
            </button>
          </div>
        </div>
      </SectionContainer>

      {/* How It Works Section */}
      <SectionContainer id="how-it-works" className="bg-bg-1">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Your next <span className="text-accent">30 days</span>—done for you
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12 px-4">
          <div className="text-center p-4 md:p-6 glass rounded-lg transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">1</div>
            <h3 className="font-semibold mb-2 text-sm md:text-base">Day 0–3</h3>
            <p className="text-text-secondary text-xs md:text-sm">Deep-dive ICP + competitive positioning. We map buyers, angles, and proof.</p>
          </div>
          <div className="text-center p-4 md:p-6 glass rounded-lg transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">2</div>
            <h3 className="font-semibold mb-2 text-sm md:text-base">Day 4–10</h3>
            <p className="text-text-secondary text-xs md:text-sm">Profile overhaul + asset kit (banner, bio, CTA, proof blocks).</p>
          </div>
          <div className="text-center p-4 md:p-6 glass rounded-lg transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">3</div>
            <h3 className="font-semibold mb-2 text-sm md:text-base">Day 11–20</h3>
            <p className="text-text-secondary text-xs md:text-sm">Content engine + engagement matrix (hooks, carousels, influencer list, comment system, DM scripts).</p>
          </div>
          <div className="text-center p-4 md:p-6 glass rounded-lg transition-all duration-300 hover:scale-105">
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
            className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring w-full sm:w-auto transition-all duration-300 hover:scale-105"
          >
            Book your free LinkedIn audit
          </button>
        </div>
      </SectionContainer>

      {/* Value Stack Section */}
      <SectionContainer id="value-stack">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Your Time is Money, <span className="text-accent">We Save You Both</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            You'll never again waste time on:
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          {/* What You Never Do Again */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
            {[
              "⛔ Content ideation",
              "⛔ Posting, engagement, or comment threads",
              "⛔ Market or competitor research",
              "⛔ Hook testing or headline writing",
              "⛔ Creating sales assets from scratch"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-error/5 border border-error/20 rounded-lg transition-all duration-300 hover:scale-105">
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8 md:mb-12">
            <p className="text-text-secondary mb-6">
              You don't need to learn how to "do LinkedIn." We already have.
            </p>
            
            <div className="bg-bg-2 rounded-xl p-6 md:p-8 border border-line-subtle max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                So, do you want to charge Walmart prices forever?
              </h3>
              <p className="text-accent font-semibold text-lg mb-6">
                Or invest the next 6 months in building a brand that lets you charge 10x the average?
              </p>
              
              <div className="space-y-4 mb-6">
                <h4 className="text-xl font-bold text-accent">Become a Category of One</h4>
                <p className="text-text-secondary text-sm md:text-base">
                  We don't just build brands. We create positioning so strong you no longer compete — you dominate.
                </p>
                <div className="grid gap-2">
                  <div className="text-center">
                    <span className="text-success">✨ Go from invisible to irresistible</span>
                  </div>
                  <div className="text-center">
                    <span className="text-success">✨ From DM chasing to DM receiving</span>
                  </div>
                  <div className="text-center">
                    <span className="text-success">✨ From just "another option" to the only logical choice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
              Bonus For Action-Takers:
            </h3>
            <p className="text-text-secondary mb-6">
              Get a personalized LinkedIn audit, including a Loom breakdown of your profile, content, and strategy.
            </p>
            <p className="font-semibold text-lg mb-6">
              Clarity now. Clients next.
            </p>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              Get my personalized audit (free)
            </button>
          </div>
        </div>
      </SectionContainer>

      </SectionContainer>

      {/* Social Proof Section */}
      <SectionContainer id="social-proof" className="bg-bg-1">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Reviews
          </h2>
        </div>

        {/* Loom Reviews */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-4">
          <div className="glass rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <iframe 
              src="https://www.loom.com/embed/432e2a7c81ff4b25b420e15ef85443e5?sid=5dc69e0d-5572-40cb-8273-1fd020df5f72" 
              className="w-full h-48 md:h-64"
              title="Customer Review 1"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="glass rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
            <iframe 
              src="https://www.loom.com/embed/e565df3bd2a9452cbd7461329857925b?sid=077fbfce-54fc-42ea-b8bc-6ab76f2d8166" 
              className="w-full h-48 md:h-64"
              title="Customer Review 2"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="glass rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <iframe 
              src="https://www.loom.com/embed/432e2a7c81ff4b25b420e15ef85443e5?sid=f35eae34-33b8-4211-bff4-dcaaf3013bd2" 
              className="w-full h-48 md:h-64"
              title="Customer Review 3"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* LinkedIn Mentions */}
        <div className="text-center mb-6 md:mb-8 px-4">
          <p className="text-text-secondary text-sm md:text-base">
            Copy these reviews ={' '}
            <a 
              href="https://www.linkedin.com/in/ben-sharf-b554a5b3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-underline text-accent font-semibold transition-all duration-300 hover:scale-105 inline-block"
            >
              Ben Sharf
            </a>
          </p>
          <p className="text-text-secondary text-sm md:text-base mt-2">
            Copy this too ={' '}
            <a 
              href="https://www.linkedin.com/in/yojimmykim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-underline text-accent font-semibold transition-all duration-300 hover:scale-105 inline-block"
            >
              Jimmy Kim
            </a>
          </p>
        </div>

        <div className="text-center px-4">
          <button
            onClick={openResultsFolder}
            className="btn-glass px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            Results - See Full Results
            <ExternalLink size={18} className="sm:hidden" />
            <ExternalLink size={20} className="hidden sm:block" />
          </button>
        </div>
      </SectionContainer>

      {/* Results Section */}
      <SectionContainer id="results">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            From <span className="text-text-tertiary">invisible</span> to <span className="text-accent">irresistible</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-4">
          <div className="glass rounded-lg p-4 md:p-6 text-center transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              <NumberCounter end={8} suffix="." className="text-accent" />
              <NumberCounter end={4} suffix="×" className="text-accent" />
            </div>
            <p className="text-text-secondary text-sm md:text-base">impressions in 28 days</p>
          </div>
          <div className="glass rounded-lg p-4 md:p-6 text-center transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              <NumberCounter end={14} className="text-accent" />
            </div>
            <p className="text-text-secondary text-sm md:text-base">sales calls in 3 weeks</p>
          </div>
          <div className="glass rounded-lg p-4 md:p-6 text-center transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$XX,XXX</div>
            <p className="text-text-secondary text-sm md:text-base">in new pipeline from inbound</p>
          </div>
        </div>

        <div className="text-center px-4">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring w-full sm:w-auto transition-all duration-300 hover:scale-105"
          >
            Book your free audit
          </button>
        </div>
      </SectionContainer>

      {/* Offer Section */}
      <SectionContainer id="offer" className="bg-bg-1">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <Shield className="mx-auto text-accent mb-4" size={64} />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Results guaranteed. <br />
              <span className="text-accent">Or you don't pay.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We put our skin in the game. If we don't deliver the outcomes we agree on, <strong className="text-text-primary">you don't pay</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 glass rounded-lg">
              <CheckCircle className="text-success flex-shrink-0" size={24} />
              <span>No ad spend</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass rounded-lg">
              <CheckCircle className="text-success flex-shrink-0" size={24} />
              <span>100% done-for-you</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass rounded-lg">
              <CheckCircle className="text-success flex-shrink-0" size={24} />
              <span>Limited client slots</span>
            </div>
          </div>

          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring"
          >
            Claim your slot
          </button>
        </div>
      </SectionContainer>

      {/* Pricing Section */}
      <SectionContainer id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Engagement model
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We start with a free audit and a bespoke 90-day roadmap. Transparent pricing after your audit based on scope and ICP complexity.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-lg p-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-line-subtle">
                <span className="text-lg font-semibold">Audit & Roadmap</span>
                <span className="text-xl font-bold text-accent">Free</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-line-subtle">
                <span className="text-lg font-semibold">Monthly DFY</span>
                <span className="text-lg text-text-secondary">Custom (based on volume & goals)</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-lg font-semibold">Guarantee</span>
                <span className="text-lg text-success font-semibold">Results or you don't pay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring"
          >
            Start with free audit
          </button>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer id="faq" className="bg-bg-1">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="glass rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-bg-2/50 transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <div className={`transform transition-transform ${selectedFAQ === index ? 'rotate-45' : ''}`}>
                  +
                </div>
              </button>
              {selectedFAQ === index && (
                <div className="px-6 pb-6 border-t border-line-subtle">
                  <p className="text-text-secondary pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring"
          >
            Book Your Free LinkedIn Audit
          </button>
          <p className="text-sm text-text-tertiary mt-4">
            <strong>Bonus:</strong> Personalized Loom breakdown of your profile, content, and strategy.
          </p>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer id="final-cta">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to stop posting and <br />
            <span className="text-accent">start profiting?</span>
          </h2>
          <p className="text-lg text-text-secondary mb-12">
            Get a personalized LinkedIn audit with a Loom breakdown of your profile, content, and strategy.
          </p>
          
          {/* Calendly Inline Embed */}
          <div className="glass rounded-lg p-1">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/kushagrarawat/linkedin-strategy-call"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <footer className="border-t border-line-subtle py-12 bg-bg-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-text-tertiary">
              © 2024 LinkedIn Growth Expert. All rights reserved.
            </div>
            <nav className="flex gap-6 text-sm text-text-tertiary">
              <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-text-primary transition-colors">Contact</a>
            </nav>
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
