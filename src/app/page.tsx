import Navbar from "./components/atoms/navbar/Navbar";
import Introduction from "./components/atoms/intro/Introduction";
import FeatureCard from "./components/atoms/featurecard/FeatureCard";
import Services from "./components/atoms/services/Services";
import ChooseSection from "./components/atoms/chooseSection/ChooseSection";
import ReviewSection from "./components/atoms/review/ReviewSection";
export default function Home() {
  return (
   <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
  <header>
    <Navbar />
  </header>

  <main className="bg-white border-b border-gray-200 relative">
    <Introduction 
      title="Exceptional Medical Care in a Place That Feels Like Home"
      description="At Cottage Hospital, we're dedicated to providing you and your family with personalized, high-quality healthcare services in a warm and welcoming environment. Whether it's a routine check-up, urgent care, or specialized treatment, we're here for you every step of the way."
      imageUrl="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop"
    />
    
    {/* Feature Cards Section - Floating between sections */}
    <div className="relative -mt-10 mb-0 z-10">
      <FeatureCard />
    </div>
    
    {/* Next section placeholder - add your next section here */}
    <div className="py-20 bg-white-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Services />
      </div>
    </div>


    <div className="py-20 bg-white-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChooseSection />
      </div>
    </div>


    <div className="py-20 bg-white-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewSection />
      </div>
    </div>
  </main>

{/* 
  <footer className="bg-white text-white p-4 text-center">
    <p>&copy; 2025 Hospital Management System. All rights reserved.</p>
  </footer> */}
</div>

  );
}
