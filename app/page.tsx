import { siteData } from '@/data/site-data';
import { AboutSection } from '@/sections/about-section';
import { AwardsStrip } from '@/sections/awards-strip';
import { ContactSection } from '@/sections/contact-section';
import { FeaturedBookSection } from '@/sections/featured-book-section';
import { HeroSection } from '@/sections/hero-section';
import { ReviewsSection } from '@/sections/reviews-section';
import { SiteFooter } from '@/sections/site-footer';
import { SiteHeader } from '@/sections/site-header';
import { TrailerSection } from '@/sections/trailer-section';

export default function HomePage() {
  return (
    <main className="bg-ink text-white">
      <SiteHeader nav={siteData.nav} />
      <HeroSection hero={siteData.hero} />
      <FeaturedBookSection featuredBook={siteData.featuredBook} />
      <TrailerSection trailer={siteData.trailer} />
      <AwardsStrip awards={siteData.awards} />
      <AboutSection about={siteData.about} />
      <ReviewsSection testimonials={siteData.testimonials} />
      <ContactSection contact={siteData.contact} />
      <SiteFooter footer={siteData.footer} />
    </main>
  );
}
