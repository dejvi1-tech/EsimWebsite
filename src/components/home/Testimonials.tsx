import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'The eSIM worked flawlessly during my trip to Europe. I was able to stay connected across 6 countries without changing SIM cards. Highly recommend!'
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'Singapore',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'As a frequent business traveler, this eSIM service has been a game-changer. Fast data, easy setup, and excellent coverage in Asia. No more hunting for local SIMs!'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    text: 'Great service overall! The connection was reliable throughout my vacation in the US. The only minor issue was slightly slower speeds in some rural areas.'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-20 text-white">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {t('testimonials.title')}
          </h2>
          <p className="mx-auto max-w-3xl text-white/80">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
              <div className="shrink-0 md:w-1/3">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white/20 md:h-32 md:w-32">
                  <img 
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center md:text-left md:w-2/3">
                <div className="mb-4 flex justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < testimonials[activeIndex].rating ? 'currentColor' : 'none'}
                      className="text-accent"
                    />
                  ))}
                </div>
                
                <blockquote className="mb-6 text-lg italic leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </blockquote>
                
                <div>
                  <div className="font-semibold">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-white/70">{testimonials[activeIndex].location}</div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeIndex === index ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:-left-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:-right-5"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;