import bgabout from '@/assests/home/bgabout.svg';
import Banner from './Banner.jsx';
import BlogCards from './BlogCards.jsx';

export const metadata = {
  title: 'Blog - Insights, Ideas & Industry Updates | Reliant Elevators',
  description: 'Stay updated with our latest articles, insights, technology updates, business ideas, and the digital trends driving innovation in the vertical transportation industry.',
};

export default function BlogPage() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <div style={{ backgroundImage: `url(${bgabout.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <BlogCards />
      </div>
    </main>
  );
}
