import React, { useState, useEffect } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  PhoneIcon, 
  MapPinIcon, 
  EnvelopeIcon,
  CheckCircleIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gym-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                Power<span className="text-gym-red">Pulse</span>
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'Membership', 'Features', 'Location', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white hover:text-gym-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gym-red"
              >
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gym-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Membership', 'Features', 'Location', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-gym-red block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center gradient-bg">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Power<span className="text-gym-red">Pulse</span> Fitness
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium">Train Hard. Stay Strong.</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Transform your body and mind at PowerPulse Fitness. Experience state-of-the-art equipment, 
            expert trainers, and a community that pushes you to be your best.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gym-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Now
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gym-black mb-4">Membership Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan that fits your fitness journey. All plans include access to our premium facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Monthly', price: '₹2,000', period: '/month', popular: false },
              { name: 'Quarterly', price: '₹5,000', period: '/3 months', popular: false },
              { name: 'Half-Yearly', price: '₹7,500', period: '/6 months', popular: true },
              { name: 'Yearly', price: '₹11,499', period: '/year', popular: false }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-4 ring-gym-red' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gym-red text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gym-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CurrencyRupeeIcon className="h-8 w-8 text-gym-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-gym-black mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gym-black">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <button className="w-full bg-gym-black hover:bg-gym-red text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gym-black mb-4">Premium Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes PowerPulse Fitness the perfect choice for your fitness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Modern Cardio & Strength Equipment',
              'Functional Training Area',
              'Certified Personal Trainers',
              'Air-Conditioned Workout Zones',
              'Locker & Shower Facilities',
              'Group Classes: Zumba, Yoga, HIIT',
              'Free Wi-Fi',
              'Clean & Hygienic Environment',
              'Music for Motivation',
              'CCTV Security Surveillance',
              'BMI & Body Analysis Machine',
              'Parking Facility (Limited)'
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <CheckCircleIcon className="h-6 w-6 text-gym-red flex-shrink-0" />
                <span className="text-gym-black font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gym-black mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Visit our modern facility in the heart of Mumbai</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <MapPinIcon className="h-8 w-8 text-gym-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gym-black mb-2">PowerPulse Fitness Location</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  D-wing, Truearth Views, Above ICICI Bank,<br />
                  Near Eastern Express Highway, Kannamwar Nagar 2,<br />
                  Vikhroli East, Mumbai – 400083
                </p>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8914582469684!2d72.92515431490214!3d19.10467098707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29e86d1b32c41!2sVikhroli%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647789456789!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PowerPulse Fitness Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gym-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to start your fitness journey? Contact us today!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="h-8 w-8 text-gym-red" />
                  <div>
                    <h3 className="text-xl font-semibold">Call Us</h3>
                    <p className="text-gray-300">8989973573</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPinIcon className="h-8 w-8 text-gym-red" />
                  <div>
                    <h3 className="text-xl font-semibold">Visit Us</h3>
                    <p className="text-gray-300">Vikhroli East, Mumbai</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="h-8 w-8 text-gym-red" />
                  <div>
                    <h3 className="text-xl font-semibold">Email Us</h3>
                    <p className="text-gray-300">info@powerpulsefitness.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gym-gray rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gym-red"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gym-red"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gym-red"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gym-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918989973573?text=Hi! I'm interested in joining PowerPulse Fitness."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-float z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-gym-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Power<span className="text-gym-red">Pulse</span> Fitness
            </h2>
            <p className="text-gray-300 mb-4">Train Hard. Stay Strong.</p>
            <p className="text-gray-400 text-sm">
              © 2024 PowerPulse Fitness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
