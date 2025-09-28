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


  const openVSL = () => {
    window.open('https://www.loom.com/share/711b933ba9d54f78b50486f9da431a0f?sid=c69b5e3b-2612-449d-ad0c-b851dbbbeffc', '_blank');
  };

  const openBenLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ben-sharf-b554a5b3/', '_blank');
  };

  const openJimmyLinkedIn = () => {
    window.open('https://www.linkedin.com/in/yojimmykim/', '_blank');
  };


  return (
    <div className="min-h-screen bg-bg text-text-primary">
      {/* Navigation */}
      <Navigation onCalendlyOpen={() => setIsCalendlyOpen(true)} />

      {/* Hero Section */}
       <SectionContainer id="hero" className="pt-24 pb-16 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Animated background gradient */}
         <div className="absolute inset-0 gradient-animated opacity-5 -z-10" />
         
         <div className="text-center max-w-5xl mx-auto px-4">
           {/* Main Headline */}
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
             We Will Help Coaches, Consultants & Entrepreneurs get <span className="text-accent">8x-10x linkedin impressions</span> and Sign <span className="text-accent">1-5 High Ticket Clients Per Month</span>
          </h1>
          
           {/* Guarantee Line */}
           <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-accent">
             (100% Organically, No Ad Spend) Or You Don't Pay
           </div>

           {/* Subheading */}
           <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-accent">
             Let Us Handle LinkedIn, So You Can Handle Clients
           </div>

           {/* Description */}
           <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
             Your future clients are already on LinkedIn, let's make sure they find you.
           </p>

           {/* VSL Video Embed */}
           <div className="mb-8 max-w-4xl mx-auto">
             <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
               <iframe
                 src="https://www.loom.com/embed/711b933ba9d54f78b50486f9da431a0f?sid=c69b5e3b-2612-449d-ad0c-b851dbbbeffc"
                 className="absolute inset-0 w-full h-full"
                 title="LinkedIn Strategy VSL"
                 allowFullScreen
                 loading="lazy"
               />
             </div>
           </div>

           {/* CTA Button */}
           <div className="mb-16">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-gradient px-8 py-4 text-lg font-semibold focus-ring"
            >
                Book your free audit today
            </button>
          </div>

           {/* Trust Elements */}
           <div className="space-y-6">
             <div className="flex flex-wrap justify-center gap-4">
               <MetricChip>💰 $0 Upfront</MetricChip>
               <MetricChip>🎯 1-5 Clients</MetricChip>
               <MetricChip>🚫 No Ads</MetricChip>
               <MetricChip>📈 8x-10x Impressions</MetricChip>
          </div>

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
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
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
          </p>
          <p className="text-center text-text-secondary mt-4 max-w-2xl mx-auto">
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

        {/* Trust Badges Section */}
        <div className="mb-12 md:mb-16 px-4">
          <SectionTrustBadges />
        </div>

        {/* Deliverables Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 px-4">
          {[
            "✅ Premium thought-leadership posts & carousels",
            "✅ Hooks engineered for conversions", 
            "✅ Targeted engagement (comments, DMs, influencer lists)",
            "✅ Profile optimized to top 1% standards",
            "✅ High-impact visuals & branding",
            "✅ targeted follower growth  (ICP)",
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

        <div className="text-center mb-8 px-4">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 max-w-2xl mx-auto mb-6">
            <p className="text-lg md:text-xl font-bold text-accent">
              ⚡ 100% Done-For-You. Results Guaranteed.
            </p>
          </div>
          
          <div className="bg-bg-2 rounded-xl p-6 md:p-8 border border-line-subtle mx-4">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
              If You're a Coach, Consultant, or Entrepreneur Who Wants To:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-bg-1 border border-line-subtle">
                <CheckCircle className="text-success flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">Attract a steady stream of inbound leads</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-bg-1 border border-line-subtle">
                <CheckCircle className="text-success flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">Convert more of them into high-paying clients</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-bg-1 border border-line-subtle">
                <CheckCircle className="text-success flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">Become the go-to expert in your industry</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-bg-1 border border-line-subtle">
                <CheckCircle className="text-success flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">Avoid wasting time figuring out what to post</span>
              </div>
            </div>
            <p className="text-center text-accent font-bold mb-6">
              This is for you.
            </p>
          <button
            onClick={() => setIsCalendlyOpen(true)}
              className="btn-gradient px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold focus-ring"
          >
            See if you qualify
          </button>
          </div>
        </div>
      </SectionContainer>


      {/* Value Stack Section */}
      <SectionContainer id="value-stack">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
            Your Time is Money, We Save You Both
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">You'll never again waste time on:</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              "⛔ Content ideation",
              "⛔ Posting, engagement, or comment threads",
              "⛔ Market or competitor research",
              "⛔ Hook testing or headline writing",
              "⛔ Creating sales assets from scratch"
              ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-bg-1 rounded-lg border border-line-subtle">
                <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
          </div>

          <p className="text-center text-lg md:text-xl text-text-secondary mb-8">
            You don't need to learn how to "do LinkedIn." We already have.
          </p>
          
          <div className="text-center bg-accent/10 border border-accent/20 rounded-lg p-6 md:p-8 mb-8">
            <p className="text-lg md:text-xl font-bold mb-4">
              So, do you want to charge Walmart prices forever?
            </p>
            <p className="text-lg md:text-xl font-bold text-accent">
              Or invest the next 6 months in building a brand that lets you charge 10x the average?
            </p>
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

      {/* Category of One Section */}
      <SectionContainer id="category-of-one" className="bg-bg-1">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
            Become a <span className="text-accent">Category of One</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            We don't just build brands. We create positioning so strong you no longer compete — you dominate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4 mb-8">
          <div className="text-center p-6 glass rounded-lg">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Go from invisible to irresistible</h3>
          </div>
          <div className="text-center p-6 glass rounded-lg">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">From DM chasing to DM receiving</h3>
          </div>
          <div className="text-center p-6 glass rounded-lg sm:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">From just "another option" to the only logical choice</h3>
          </div>
        </div>

        <div className="text-center bg-accent/10 border border-accent/20 rounded-lg p-6 md:p-8 max-w-3xl mx-auto mx-4">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Bonus For Action-Takers:</h3>
          <p className="text-lg md:text-xl mb-4">
            Get a personalized LinkedIn audit, including a Loom breakdown of your profile, content, and strategy.
          </p>
          <p className="text-lg md:text-xl font-bold text-accent">
            Clarity now. Clients next.
          </p>
        </div>
      </SectionContainer>

      {/* Social Proof Section */}
      <SectionContainer id="social-proof" className="bg-bg-1">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Reviews
          </h2>
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
           
           <button
             onClick={() => setIsCalendlyOpen(true)}
             className="btn-gradient px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold focus-ring mb-8"
           >
             Book Your Free LinkedIn Audit Now
           </button>

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
