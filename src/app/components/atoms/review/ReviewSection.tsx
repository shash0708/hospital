"use client";
import React from "react";

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
}

interface ReviewSectionProps {
  title?: string;
  subtitle?: string;
  reviews?: ReviewItem[];
}

function ReviewSection({
  title = "What Our Patients Say",
  subtitle = "Real experiences from real patients who found healing through our homeopathic treatments",
  reviews,
}: ReviewSectionProps) {
  const defaultReviews: ReviewItem[] = [
    {
      id: "1",
      name: "Priya Sharma",
      role: "Chronic Migraine Patient",
      review: "After years of suffering from chronic migraines, homeopathic treatment has completely transformed my life. No more daily headaches, no side effects!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "2",
      name: "Rajesh Kumar",
      role: "Arthritis Patient",
      review: "I was skeptical at first, but this natural treatment saved me from knee surgery. The holistic approach addressed my root causes, not just symptoms.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "3",
      name: "Anita Reddy",
      role: "Mother of Two",
      review: "The doctor's ability to treat my children naturally is unmatched. Safe remedies that work effectively for the whole family without harmful chemicals.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "4",
      name: "Dr. Venkat Rao",
      role: "Retired Professor",
      review: "As a medical professional myself, I was impressed by the scientific approach and genuine care. The treatment improved my digestive issues remarkably.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "5",
      name: "Lakshmi Patel",
      role: "Working Professional",
      review: "This homeopathic clinic has boosted my immunity and energy levels. The personalized treatment plan addressed my stress-related health issues perfectly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "6",
      name: "Suresh Chandra",
      role: "Diabetes Patient",
      review: "The natural approach to managing my diabetes has been life-changing. My blood sugar levels are stable, and I feel healthier than ever before.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const reviewsToRender = reviews || defaultReviews;

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviewsToRender, ...reviewsToRender];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="py-1 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Moving Reviews Container */}
        <div className="relative">
          <div className="flex space-x-6 animate-[scroll_30s_linear_infinite] hover:animate-none">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
                  "{review.review}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default ReviewSection;
