import React from "react";

interface FeatureItem {
  icon: React.ReactElement;
  title: string;
  description: string;
  highlight?: string;
}

function FeatureCard() {
  const features: FeatureItem[] = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Experience",
      description:
        "BHMS MD qualified with developing whole individuals as our goal. We have a flexible, high-trust environment.",
      highlight: "22+ Years ",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      title: "Google Rating",
      description:
        "With rising patient satisfaction, it is hard to imagine a positive start to your treatment journey.",
      highlight: "4.8",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Homeopathy Treatment",
      description:
        "The specialized homeopathic treatment is now available even to middle class people, saving lives.",
      highlight: "Natural Healing",
    },
  ];

  // ...existing code...
  return (
        <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50 h-34 border border-slate-200 shadow-lg rounded-lg gap-2 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="relative">
          {/* Vertical separator line - only show between cards, not after the last one */}
          {index < features.length - 1 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-slate-300"></div>
          )}
          <div className="flex flex-col items-center text-center space-y-4 p-10">
            {/* Icon */}
            {/* <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
            {feature.icon}
          </div> */}

            {/* Title */}

            {/* Highlight Badge */}
            {feature.highlight && (
              <div className="text-slate-800 px-3 rounded-full text-xl font-medium">
                {feature.highlight}
                {/* Show 5 filled stars for Google Rating */}
                {feature.title === "Google Rating" && (
                  <div className="flex justify-center mt-2 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
              </div>
            )}
            <h3 className="text-sm font-medium text-slate-900">
              {feature.title==="Google Rating" ? '' : feature.title}
            </h3>
            {/* Description */}
            {/* <p className="text-gray-600 text-sm leading-relaxed">
            {feature.description}
          </p> */}
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
  // ...existing code...
}

export default FeatureCard;
