import { Users, Globe, Award, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark py-20 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-white/10"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Connecting the World, <br />
              <span className="text-accent">One eSIM at a Time</span>
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              We're on a mission to make global connectivity simple, affordable, and accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="-mt-16 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Users className="text-primary\" size={24} />, stat: '100K+', label: 'Happy Customers' },
              { icon: <Globe className="text-primary" size={24} />, stat: '190+', label: 'Countries Covered' },
              { icon: <Award className="text-primary\" size={24} />, stat: '99.9%', label: 'Success Rate' },
              { icon: <Building2 className="text-primary" size={24} />, stat: '24/7', label: 'Customer Support' }
            ].map((item, index) => (
              <div key={index} className="group rounded-xl bg-white p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl">
                <img 
                  src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our team at work"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-3xl bg-accent/10 -z-10"></div>
              <div className="absolute -top-6 -left-6 h-48 w-48 rounded-3xl bg-primary/10 -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2025, ConnectEsim emerged from a simple yet powerful idea: to eliminate the hassle of staying connected while traveling. We understood the frustration of hunting for local SIM cards or paying excessive roaming charges, and we knew there had to be a better way.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve travelers from all corners of the globe, providing them with instant, reliable, and affordable connectivity solutions through our innovative eSIM technology.
              </p>
              <div className="pt-4">
                <Link to="/plans">
                  <Button variant="primary" size="lg" className="group">
                    Explore Our Plans
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Values</h2>
            <p className="mb-16 text-lg text-gray-600">
              These core principles guide everything we do and help us deliver the best possible service to our customers.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Innovation',
                description: 'We continuously push the boundaries of technology to make global connectivity simpler and more efficient.'
              },
              {
                title: 'Reliability',
                description: 'Our customers rely on us to stay connected, and we take this responsibility seriously with our robust infrastructure.'
              },
              {
                title: 'Transparency',
                description: 'No hidden fees, no surprises. We believe in clear, straightforward pricing and honest communication.'
              },
              {
                title: 'Customer First',
                description: 'Every decision we make starts with our customers. Their success is our success.'
              },
              {
                title: 'Global Mindset',
                description: 'We embrace diversity and understand the unique needs of travelers from different cultures.'
              },
              {
                title: 'Sustainability',
                description: 'By eliminating physical SIM cards, we\'re doing our part to reduce electronic waste.'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="group rounded-xl bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-8 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Join Our Global Community?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Experience hassle-free connectivity with our eSIM solutions. Join thousands of satisfied travelers who trust ConnectEsim for their global connectivity needs.
            </p>
            <Link to="/plans">
              <Button 
                variant="accent" 
                size="lg"
                className="group"
              >
                Get Started Today
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;