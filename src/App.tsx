/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Building2, 
  Rocket, 
  User, 
  Utensils, 
  GraduationCap, 
  RotateCcw, 
  Check, 
  TrendingUp, 
  ArrowRight, 
  Mail, 
  MessageSquare, 
  Share2, 
  Send,
  ShieldCheck,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-on-primary">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/10">
        <div className="flex justify-between items-center h-20 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="text-2xl font-display font-bold text-primary">MYDevWorks</div>
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Benefits", "Process", "About"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-on-surface-variant hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          <a 
            href="#contact" 
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:scale-105 active:scale-95 transition-transform"
          >
            Get Started
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 md:px-16">
          <div className="absolute inset-0 hero-glow -z-10" />
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(164,230,255,1)]" />
                <span className="text-label-caps text-primary">AVAILABLE FOR NEW PROJECTS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-on-surface leading-tight">
                Modern websites for <span className="text-primary italic">Algerian businesses.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                We build clean, responsive and professional websites that help local businesses build a stronger online presence with international quality standards.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(164,230,255,0.2)]"
                >
                  Get Started <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="glass-card p-6 rounded-2xl transform hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4 font-mono text-sm select-none">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                    <div className="w-3 h-3 rounded-full bg-green-400/40" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-on-surface-variant"><span className="text-primary">const</span> <span className="text-secondary">agency</span> = {"{"}</p>
                    <p className="pl-4 text-on-surface-variant">name: <span className="text-primary">"MYDevWorks"</span>,</p>
                    <p className="pl-4 text-on-surface-variant">location: <span className="text-primary">"Algeria"</span>,</p>
                    <p className="pl-4 text-on-surface-variant">mission: <span className="text-primary">"Elite Digital Crafts"</span></p>
                    <p className="text-on-surface-variant">{"};"}</p>
                  </div>
                  <div className="space-y-1 pt-2">
                    <p className="text-on-surface-variant"><span className="text-primary">&lt;section</span> <span className="text-secondary">class</span>=<span className="text-primary">"hero"</span><span className="text-primary">&gt;</span></p>
                    <p className="pl-4 text-on-surface"><span className="text-primary">&lt;h1&gt;</span>Modern websites for Algerian businesses<span className="text-primary">&lt;/h1&gt;</span></p>
                    <p className="pl-4 text-on-surface-variant"><span className="text-primary">&lt;button</span> <span className="text-secondary">variant</span>=<span className="text-primary">"premium"</span><span className="text-primary">&gt;</span></p>
                    <p className="pl-8 text-on-surface">Get Started</p>
                    <p className="pl-4 text-on-surface-variant"><span className="text-primary">&lt;/button&gt;</span></p>
                    <p className="text-on-surface-variant"><span className="text-primary">&lt;/section&gt;</span></p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 opacity-40">
                    <p className="text-primary">// Compiling excellence...</p>
                  </div>
                </div>
              </div>

              {/* Float Widget */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 glass-card p-6 rounded-2xl max-w-[240px] space-y-4"
              >
                <div className="flex gap-2">
                  <ShieldCheck className="text-primary" />
                  <span className="text-label-caps text-primary">LOCAL EXPERTISE</span>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Tailored digital experiences designed specifically for the Algerian market and consumer behavior.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4">Crafting Digital Excellence</h2>
            <p className="text-lg text-on-surface-variant">Specialized solutions for every business scale.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Building2, title: "Business Websites", desc: "Establish a professional corporate presence that communicates authority and builds trust." },
              { icon: Rocket, title: "Landing Pages", desc: "High-converting single pages designed to turn visitors into leads with strategic UX." },
              { icon: User, title: "Portfolio Websites", desc: "A digital canvas for creatives and professionals to showcase their best work in a minimalist format." },
              { icon: Utensils, title: "Restaurant Websites", desc: "Interactive menus, reservation systems, and stunning visuals to bring your culinary experience online." },
              { icon: GraduationCap, title: "School Websites", desc: "Modern digital platforms for educational institutions, featuring student portals and communication tools." },
              { icon: RotateCcw, title: "Website Redesign", desc: "Transforming legacy websites into modern, high-performance digital assets that compete on a global level." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="glass-card p-8 rounded-3xl space-y-6 group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <service.icon size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-on-surface">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-32 bg-surface-container/30 relative overflow-hidden">
          <div className="px-6 md:px-16 max-w-7xl mx-auto relative z-10">
            <motion.div {...fadeIn} className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">Why Your Business <span className="text-primary">Needs</span> a Website</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
                A professional digital presence is no longer optional—it's the foundation of modern business success in Algeria.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Professional Image", "Online Visibility", "Customer Trust", 
                "Better Communication", "Mobile Accessibility", "Business Growth"
              ].map((benefit, i) => (
                <motion.div 
                  key={benefit} 
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card p-8 rounded-3xl space-y-4 ${i === 5 ? "bg-primary/5 border-primary/20" : ""}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${i === 5 ? "bg-primary text-on-primary" : "border border-primary text-primary"}`}>
                    {i === 5 ? <TrendingUp size={24} /> : <Check size={24} />}
                  </div>
                  <h4 className="text-xl font-bold text-on-surface">{benefit}</h4>
                  <p className="text-on-surface-variant">
                    {i === 0 && "First impressions happen in seconds. Look like the industry leader you are with a bespoke design."}
                    {i === 1 && "Be found by customers searching for your services across Algeria and beyond, 24/7."}
                    {i === 2 && "A verified online presence builds immediate credibility and trust in a digital-first marketplace."}
                    {i === 3 && "Engage directly with your audience through integrated contact tools, WhatsApp links, and forms."}
                    {i === 4 && "Optimized for smartphones, the primary way Algerians browse the web today."}
                    {i === 5 && "Scale your operations and reach new markets that were previously inaccessible."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4">Our Engineering Process</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">From idea to deployment, we follow a rigorous path to ensure project success.</p>
          </motion.div>

          <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-primary/30 z-0" />
            {[
              { num: "1", title: "Discussion", desc: "We align on your goals, target audience, and functional requirements." },
              { num: "2", title: "Design", desc: "Crafting high-fidelity mockups that blend aesthetics with superior user experience." },
              { num: "3", title: "Development", desc: "Building clean, fast, and secure code using the latest industry standards." },
              { num: "4", title: "Launch", desc: "Deployment and final optimization for a seamless go-live experience.", active: true }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="flex-1 space-y-4 relative z-10"
              >
                <div className={`w-12 h-12 rounded-full border border-primary flex items-center justify-center font-bold font-display ${step.active ? "bg-primary text-on-primary" : "bg-surface-container-high text-primary"}`}>
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-on-surface">{step.title}</h4>
                <p className="text-on-surface-variant">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-16">
          <motion.div 
            {...fadeIn}
            className="max-w-7xl mx-auto glass-card p-12 md:p-20 rounded-[40px] border-none overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10" />
            <div className="max-w-2xl">
              <span className="text-label-caps text-primary mb-6 block">OUR IDENTITY</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-8 leading-tight">Empowering the Algerian Digital Frontier.</h2>
              <div className="space-y-6 text-lg text-on-surface-variant mb-10">
                <p>
                  At MYDevWorks, we don't believe in templates or shortcuts. We believe that Algerian businesses deserve the same level of digital craftsmanship found in Silicon Valley or Tokyo.
                </p>
                <p>
                  Our mission is simple: To provide local enterprises with the tools they need to compete, grow, and thrive in an increasingly digital world. We are your technical partners.
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <p className="text-5xl font-display font-bold text-on-surface">24/7</p>
                  <p className="text-label-caps text-on-surface-variant">SUPPORT</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-bold text-on-surface">100%</p>
                  <p className="text-label-caps text-on-surface-variant">TRANSPARENCY</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl font-display font-bold text-on-surface mb-6">Ready to start?</h2>
              <p className="text-lg text-on-surface-variant mb-12 max-w-md">
                Let's discuss your next digital project. Our team is ready to help you navigate the Algerian market with a world-class website.
              </p>
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "EMAIL US", value: "contact@mydevworks.org" },
                  { icon: MessageSquare, label: "WHATSAPP", value: "+213 (0) 674 179 511" },
                  { icon: Share2, label: "INSTAGRAM", value: "@mydevworks.org" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-label-caps text-on-surface-variant">{item.label}</p>
                      <p className="text-lg font-medium text-on-surface">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 rounded-[32px]"
            >
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent! We will contact you soon.");
                }}
              >
                <div className="space-y-2">
                  <label className="text-label-caps text-on-surface-variant">FULL NAME</label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-surface-container border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none rounded-lg text-on-surface px-4 py-3 transition-all" 
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-label-caps text-on-surface-variant">BUSINESS EMAIL</label>
                  <input 
                    type="email"
                    required
                    className="w-full bg-surface-container border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none rounded-lg text-on-surface px-4 py-3 transition-all" 
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-label-caps text-on-surface-variant">PROJECT DETAILS</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full bg-surface-container border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none rounded-lg text-on-surface px-4 py-3 transition-all resize-none" 
                    placeholder="Tell us about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-[0_0_20px_rgba(164,230,255,0.2)]">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 border-t border-outline-variant/20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-3xl font-display font-bold text-on-surface">MYDevWorks</div>
            <p className="text-on-surface-variant max-w-xs leading-relaxed">
              © 2026 MYDevWorks. Crafted for the Algerian Digital Frontier.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" }
            ].map((social, i) => (
              <a key={i} href={social.href} className="text-on-surface-variant hover:text-primary transition-colors">
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
