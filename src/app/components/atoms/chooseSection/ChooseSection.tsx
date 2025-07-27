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

function ChooseSection({
  title = "Why Choose Us?",
  subtitle = "",
  services,
}: ServicesProps) {
  const defaultServices: ServiceItem[] = [
    {
      id: "natural-approach",
      title: "Natural Approach",
      description:
        "We use only 100% natural remedies derived from plants, minerals, and organic substances to stimulate your body's own healing mechanisms.",
      bgColor: "",
      iconColor: "text-green-600",
      textColor: "text-green-900",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 bi bi-leaf"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M1.4 1.7c.216.289.65.84 1.725 1.274 1.093.44 2.884.774 5.834.528l.37-.023c1.823-.06 3.117.598 3.956 1.579C14.16 6.082 14.5 7.41 14.5 8.5c0 .58-.032 1.285-.229 1.997q.198.248.382.54c.756 1.2 1.19 2.563 1.348 3.966a1 1 0 0 1-1.98.198c-.13-.97-.397-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.125-.887-1.89-2.095-2.391-3.383C.16 6.62.16 3.646.509 1.902L.73.806zm-.05 1.39c-.146 1.609-.008 3.809.74 5.728.457 1.17 1.13 2.213 2.079 2.961.942.744 2.185 1.22 3.83 1.221 2.588 0 3.91-.66 4.609-1.445-1.789-2.46-4.121-1.213-6.342-2.68-.74-.488-1.735-1.323-1.844-2.308-.023-.214.237-.274.38-.112 1.4 1.6 3.573 1.757 5.59 2.045 1.227.215 2.21.526 3.033 1.158.058-.39.075-.782.075-1.158 0-.91-.288-1.988-.975-2.792-.626-.732-1.622-1.281-3.167-1.229l-.316.02c-3.05.253-5.01-.08-6.291-.598a5.3 5.3 0 0 1-1.4-.811" />
        </svg>
      ),
    },
    {
      id: "holistic-care",
      title: "Holistic Approach",
      description:
        "We treat the whole person - mind, body, and spirit - addressing root causes rather than just symptoms for complete wellness.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      textColor: "text-purple-900",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12H18L15 21L9 3L6 12H2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "safe-all-ages",
      title: "Safe for All Ages",
      description:
        "Our gentle homeopathic remedies are completely safe for infants, children, adults, pregnant women, and elderly patients.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      textColor: "text-blue-900",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 11.4999L11 13.4999L15.5 8.99987M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "no-side-effects",
      title: "No Side Effects",
      description:
        "Experience healing without harmful side effects. Our treatments work with your body's natural processes for safe, effective recovery.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      textColor: "text-orange-900",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  const servicesToRender = services || defaultServices;

  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-full mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesToRender.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1  text-center`}
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center p-3 rounded-lg  ${service.iconColor} mb-6 mx-auto w-16 h-16`}
              >
                <div className={service.iconColor}>{service.icon}</div>
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

export default ChooseSection;
