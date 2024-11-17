import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function HomePage() {
  const location = useLocation();
  const path = location.pathname.split('/').pop();

   const contentMap = {
    home: {
      title: 'We Get Pet Care!',
      description: 'For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!',
    },
    services: {
      title: 'Our Services',
      description: 'We offer a variety of pet care services to keep your pets happy and healthy.',
    },
    about: {
      title: 'About Us',
      description: 'Learn more about our mission and values.',
    },
    blog: {
      title: 'Our Blog',
      description: 'Stay up-to-date with the latest news and announcements from Fetch! Pet Care.',
    },
    franchise: {
      title: 'Franchise Opportunities',
      description: 'Discover how to become a franchise owner with Fetch! Pet Care.',
    },

  };


  const { title, description } = contentMap[path] || contentMap.home;


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#FF6347] text-whitemin-h-screen w-screen overflow-x-hidden">
        <div className="w-full px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="text-[#FF6347] font-bold text-xl"></div>
              </div>
            </div>
            
            {/* Navigation */}
          < Navigation />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#FF6347] min-h-[calc(100vh-64px)]">
        <div className="w-full px-6">
          <div className="relative h-[calc(100vh-64px)] flex items-center">
            {/* Left content */}
           <div className="max-w-xl space-y-6 z-10 ml-[10%]">
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                 {title}
              </h1>
              <p className="text-lg lg:text-xl text-white">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Schedule Service
                </Button>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="h-5 w-5" />
                  <span className="text-lg">Or Call 866.338.2463</span>
                </div>
              </div>
            </div>

            {/* Right content - Dog image */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="relative">
                <div className="h-96 w-96 bg-yellow-400 rounded-full">
                  {/* <img
                    src="/api/placeholder/500/500"
                    alt="Golden Retriever"
                    className="absolute bottom-0 right-0 h-full w-full object-contain"
                  /> */}
                </div>
              </div>
            </div>

            {/* Decorative wave shape */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                viewBox="0 0 1440 320"
                className="w-full"
                preserveAspectRatio="none"
                fill="white"
              >
                <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}