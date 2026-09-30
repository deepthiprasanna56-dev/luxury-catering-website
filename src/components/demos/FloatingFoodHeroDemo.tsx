import { FloatingFoodHero } from '@/components/ui/hero-section-7';

export default function FloatingFoodHeroDemo() {
  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
      alt: 'A delicious gourmet burger',
      className: 'w-36 sm:w-48 md:w-56 lg:w-64 top-10 left-4 sm:left-10 md:top-20 md:left-20 animate-float rounded-2xl shadow-xl',
    },
    {
      src: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=400&q=80',
      alt: 'Artisan dumplings in bamboo steamer',
      className: 'w-28 sm:w-36 md:w-44 top-10 right-4 sm:right-10 md:top-16 md:right-16 animate-float rounded-2xl shadow-xl',
    },
    {
      src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
      alt: 'Wood-fired sourdough pizza slice',
      className: 'w-32 sm:w-40 md:w-52 bottom-8 right-5 sm:right-10 md:bottom-16 md:right-20 animate-float rounded-2xl shadow-xl',
    },
    {
      src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=200&q=80',
      alt: 'Fresh organic garden greens',
      className: 'w-10 sm:w-14 top-1/4 left-1/3 animate-float rounded-full shadow-md',
    },
    {
      src: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80',
      alt: 'Heirloom farm tomato',
      className: 'w-10 sm:w-12 top-1/2 right-1/4 animate-float rounded-full shadow-md',
    },
    {
      src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80',
      alt: 'Fresh seasonal garnish bowl',
      className: 'w-10 sm:w-14 top-3/4 left-1/4 animate-float rounded-full shadow-md',
    },
  ];

  return (
    <div className="w-full">
      <FloatingFoodHero
        title="Better food for more people"
        description="For over a decade, we've enabled our customers to discover new tastes, delivered right to their doorstep."
        images={heroImages}
      />
    </div>
  );
}
