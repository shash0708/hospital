import React from "react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  bgColor: string;
  iconColor: string;
  textColor: string;
}

interface ServicesProps {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
}

function Services({ 
  title = "Our Services", 
  subtitle = "",
  services 
}: ServicesProps) {
  const defaultServices: ServiceItem[] = [
    {
      id: "chronic-diseases",
      title: "Chronic Diseases",
      description: "Comprehensive management of diabetes, hypertension, arthritis, and other long-term conditions with personalized treatment plans.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      textColor: "text-blue-900",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "skin-disorders",
      title: "Skin Disorders",
      description: "Expert treatment for eczema, psoriasis, acne, allergic reactions, and various dermatological conditions using natural healing methods.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      textColor: "text-green-900",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: "women-health",
      title: "Women's Health",
      description: "Specialized care for menstrual disorders, PCOS, fertility issues, pregnancy support, and women's wellness throughout all life stages.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      textColor: "text-pink-900",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: "child-health",
      title: "Child Health",
      description: "Gentle and effective pediatric care for developmental issues, behavioral problems, allergies, and childhood ailments with safe, natural treatments.",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      textColor: "text-yellow-900",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "mental-health",
      title: "Mental Health",
      description: "Holistic approach to anxiety, depression, stress management, and emotional well-being using mind-body healing techniques.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      textColor: "text-purple-900",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      id: "digestive-disorders",
      title: "Digestive Disorders",
      description: "Comprehensive treatment for IBS, acid reflux, gastritis, food allergies, and digestive health optimization through natural remedies.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      textColor: "text-orange-900",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  const servicesToRender = services || defaultServices;

  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToRender.map((service, index) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg ${service.bgColor} ${service.iconColor} mb-6`}>
                <div className={service.iconColor}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className={`text-xl font-medium ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Learn More Link */}
              {/* <div className="mt-6">
                <button className={`${service.textColor} font-medium text-sm hover:underline transition-colors duration-200 flex items-center gap-2`}>
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          ))}
        </div>

        {/* Call to Action */}
       
      </div>
    </div>
  );
}

export default Services;
