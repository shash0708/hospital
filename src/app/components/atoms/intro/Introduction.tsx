import React from 'react'
import Image from 'next/image';

interface IntroductionProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

function Introduction({ title, description, imageUrl, className }: IntroductionProps) {
  // Mock data for patient avatars
  const patientAvatars = [
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=50&h=50&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=50&h=50&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=50&h=50&fit=crop&crop=face',
    // 'https://images.unsplash.com/photo-1594824720093-8a1e4719faf7?w=50&h=50&fit=crop&crop=face'
  ];

  return (
    <div className={`bg-cyan-50 py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-tight">
                {title}
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200">
                Schedule Appointment
              </button>
              <a 
                href="https://www.google.com/maps/place/Sri+Siva+sai+Homeopathy,+Park+Rd,+Roypeta,+Narsapur,+Andhra+Pradesh+534275/data=!4m2!3m1!1s0x3a37d95622e64861:0xea6997b948e8cda4?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjMwLjAYACDXggMqogEsOTQyNjc3MjcsOTQyODA0ODcsOTQyNzUzMTEsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNjI3MzMsNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAklO&skid=882ec15d-d880-4f3d-aa84-e8d85dfb6de4"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C13 17 20 16.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16.4183 11 17 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Find Us
              </a>
            </div>

            {/* Patient Avatars and Count */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {patientAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                  >
                    <Image
                      src={avatar}
                      alt={`Patient ${index + 1}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">5000+</div>
                <div className="text-gray-600">Satisfied Patients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden">
              {/* Main Image */}
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src={imageUrl || "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop"}
                  alt="Medical Care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Cards */}
              {/* <div className="absolute top-6 right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-xs text-gray-600 mb-1">24/7 Support</div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-sm text-gray-600 mb-1">We have</div>
                <div className="text-lg font-bold text-blue-600">95% success</div>
                <div className="text-sm text-gray-600">rate so far</div>
              </div> */}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction