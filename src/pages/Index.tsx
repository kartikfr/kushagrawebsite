import { useState } from 'react';
import { Play, CheckCircle, XCircle, ArrowRight, ExternalLink, Shield, Users, Target, TrendingUp, Clock, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import CalendlyModal from '../components/CalendlyModal';
import MetricChip from '../components/MetricChip';
import SectionContainer from '../components/SectionContainer';

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
      <SectionContainer id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 gradient-animated opacity-10 -z-10" />
        
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            We sign <span className="text-accent">1–5 high-ticket clients/month</span> from LinkedIn. <br className="hidden md:block" />
            100% organic. <span className="text-accent">Or you don't pay.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto mb-8 leading-relaxed">
            Coaches, Consultants & Entrepreneurs: get <strong className="text-text-primary">8–10× impressions</strong> and <strong className="text-text-primary">5–20 qualified calls/month</strong>—without posting daily, chasing engagement, or spending on ads.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring"
            >
              Book Your Free LinkedIn Audit
            </button>
            <button
              onClick={openVSL}
              className="btn-glass px-8 py-4 text-lg font-semibold focus-ring flex items-center gap-2"
            >
              <Play size={20} />
              Watch 3-min VSL
            </button>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <MetricChip>💯 Done-For-You</MetricChip>
            <MetricChip>🎯 Results Guaranteed</MetricChip>
            <MetricChip>🚫 No Ad Spend</MetricChip>
          </div>

          <p className="text-sm text-text-tertiary">
            Your future clients are already on LinkedIn—let's make sure they find you.
          </p>
        </div>
      </SectionContainer>

      {/* Pain Section */}
      <SectionContainer id="pain" className="bg-bg-1">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            You didn't become a coach to fight algorithms.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Pain Points */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-bg-2 border border-line-subtle">
              <XCircle className="text-error flex-shrink-0" size={24} />
              <span className="text-lg">"I hate social media."</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-bg-2 border border-line-subtle">
              <XCircle className="text-error flex-shrink-0" size={24} />
              <span className="text-lg">"I don't know what to post."</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-bg-2 border border-line-subtle">
              <XCircle className="text-error flex-shrink-0" size={24} />
              <span className="text-lg">"I don't have time."</span>
            </div>
          </div>

          {/* Desired Outcomes */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-accent">What you want instead:</h3>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-success-muted border border-success/20">
              <CheckCircle className="text-success flex-shrink-0" size={24} />
              <span className="text-lg">A pipeline of inbound, qualified leads</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-success-muted border border-success/20">
              <CheckCircle className="text-success flex-shrink-0" size={24} />
              <span className="text-lg">A brand that commands premium pricing</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-success-muted border border-success/20">
              <CheckCircle className="text-success flex-shrink-0" size={24} />
              <span className="text-lg">Clients chasing you (not the other way around)</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="link-underline text-accent font-semibold text-lg inline-flex items-center gap-2"
          >
            Get your free audit
            <ArrowRight size={20} />
          </button>
        </div>
      </SectionContainer>

      {/* Why Us Section */}
      <SectionContainer id="why-us">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why we're different: <br className="md:hidden" />
            <span className="text-accent">LinkedIn that works while you work.</span>
          </h2>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 glass rounded-lg">
            <TrendingUp className="mx-auto mb-4 text-accent" size={48} />
            <h3 className="text-xl font-semibold mb-3">Credibility & visibility</h3>
            <p className="text-text-secondary">that compounds (no daily posting needed)</p>
          </div>
          <div className="text-center p-6 glass rounded-lg">
            <Target className="mx-auto mb-4 text-accent" size={48} />
            <h3 className="text-xl font-semibold mb-3">Inbound leads</h3>
            <p className="text-text-secondary">from targeted engagement (comments, DMs, influencer lists)</p>
          </div>
          <div className="text-center p-6 glass rounded-lg">
            <Star className="mx-auto mb-4 text-accent" size={48} />
            <h3 className="text-xl font-semibold mb-3">Positioning that sells</h3>
            <p className="text-text-secondary">from "one of many" to <strong>Category of One</strong></p>
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
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
            <div key={index} className="flex items-start gap-3 p-4 bg-bg-1 rounded-lg border border-line-subtle">
              <CheckCircle className="text-success flex-shrink-0 mt-0.5" size={20} />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring"
          >
            See if you qualify
          </button>
        </div>
      </SectionContainer>

      {/* How It Works Section */}
      <SectionContainer id="how-it-works" className="bg-bg-1">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Your next <span className="text-accent">30 days</span>—done for you
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 glass rounded-lg">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Day 0–3</h3>
            <p className="text-text-secondary text-sm">Deep-dive ICP + competitive positioning. We map buyers, angles, and proof.</p>
          </div>
          <div className="text-center p-6 glass rounded-lg">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Day 4–10</h3>
            <p className="text-text-secondary text-sm">Profile overhaul + asset kit (banner, bio, CTA, proof blocks).</p>
          </div>
          <div className="text-center p-6 glass rounded-lg">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Day 11–20</h3>
            <p className="text-text-secondary text-sm">Content engine + engagement matrix (hooks, carousels, influencer list, comment system, DM scripts).</p>
          </div>
          <div className="text-center p-6 glass rounded-lg">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
            <h3 className="font-semibold mb-2">Day 21–30</h3>
            <p className="text-text-secondary text-sm">Pipeline acceleration (lead magnets, call-booking nudges, offer calibration).</p>
          </div>
        </div>

        <div className="text-center bg-accent/10 border border-accent/20 rounded-lg p-6">
          <p className="text-lg mb-4">
            <strong>Outcome:</strong> Predictable <strong className="text-accent">inbound leads</strong> and <strong className="text-accent">booked calls</strong>, without your daily input.
          </p>
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring"
          >
            Book your free LinkedIn audit
          </button>
        </div>
      </SectionContainer>

      {/* Value Stack Section */}
      <SectionContainer id="value-stack">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            What you <span className="text-accent">get</span> (and what you <span className="text-error">never do again</span>)
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* What You Get */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-success">✅ What You Get</h3>
            <div className="grid gap-4">
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
                <div key={index} className="flex items-start gap-3 p-4 bg-success/5 border border-success/20 rounded-lg">
                  <CheckCircle className="text-success flex-shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What You Never Do Again */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-error">⛔ What You Never Do Again</h3>
            <div className="space-y-4">
              {[
                "Content ideation",
                "Posting or comment threads",
                "Market research",
                "Hook testing",
                "Building sales assets from scratch"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-error/5 border border-error/20 rounded-lg">
                  <XCircle className="text-error flex-shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring"
          >
            Get my personalized audit (free)
          </button>
        </div>
      </SectionContainer>

      {/* Social Proof Section */}
      <SectionContainer id="social-proof" className="bg-bg-1">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real reviews. <span className="text-accent">Real revenue.</span>
          </h2>
          <p className="text-text-secondary">Short Looms + LinkedIn praise + before/after data.</p>
        </div>

        {/* Loom Reviews */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass rounded-lg overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/432e2a7c81ff4b25b420e15ef85443e5?sid=5dc69e0d-5572-40cb-8273-1fd020df5f72" 
              className="w-full h-64"
              title="Customer Review 1"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="glass rounded-lg overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/e565df3bd2a9452cbd7461329857925b?sid=077fbfce-54fc-42ea-b8bc-6ab76f2d8166" 
              className="w-full h-64"
              title="Customer Review 2"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="glass rounded-lg overflow-hidden">
            <iframe 
              src="https://www.loom.com/embed/432e2a7c81ff4b25b420e15ef85443e5?sid=f35eae34-33b8-4211-bff4-dcaaf3013bd2" 
              className="w-full h-64"
              title="Customer Review 3"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* LinkedIn Mentions */}
        <div className="text-center mb-8">
          <p className="text-text-secondary">
            Mentions from{' '}
            <a 
              href="https://www.linkedin.com/in/ben-sharf-b554a5b3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-underline text-accent font-semibold"
            >
              Ben Sharf
            </a>
            {' '}and{' '}
            <a 
              href="https://www.linkedin.com/in/yojimmykim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-underline text-accent font-semibold"
            >
              Jimmy Kim
            </a>
            .
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={openResultsFolder}
            className="btn-glass px-8 py-4 text-lg font-semibold focus-ring inline-flex items-center gap-2"
          >
            See full results folder
            <ExternalLink size={20} />
          </button>
        </div>
      </SectionContainer>

      {/* Results Section */}
      <SectionContainer id="results">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            From <span className="text-text-tertiary">invisible</span> to <span className="text-accent">irresistible</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">8.4×</div>
            <div className="text-text-secondary">impressions in 28 days</div>
          </div>
          <div className="glass rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">14</div>
            <div className="text-text-secondary">sales calls in 3 weeks</div>
          </div>
          <div className="glass rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">$XX,XXX</div>
            <div className="text-text-secondary">in new pipeline from inbound</div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring"
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
