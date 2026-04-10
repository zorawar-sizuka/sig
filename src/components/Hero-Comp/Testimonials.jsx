"use client";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aarav S.",
    role: "University of Leeds",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    quote:
      "I was overwhelmed by the application process at first. Their team gave me clarity, direction, and the confidence to apply strategically.",
    arrow: "left",
  },
  {
    id: 2,
    name: "Riya M.",
    role: "University of Birmingham",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    quote:
      "They didn’t just help with applications — they helped me build a stronger profile, shortlist better universities, and prepare with confidence.",
    arrow: null,
  },
  {
    id: 3,
    name: "Jamie L.",
    role: "University of Glasgow",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
    quote:
      "From scholarships to visa support, everything felt organized and personalized. The process became much less stressful with their guidance.",
    arrow: "right",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-[#ec2025]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.75l2.83 5.73 6.32.92-4.57 4.46 1.08 6.29L12 17.17l-5.66 2.98 1.08-6.29L2.85 9.4l6.32-.92L12 2.75z" />
        </svg>
      ))}
    </div>
  );
}

function Arrow({ direction }) {
  if (!direction) return null;

  return (
    <div
      className={`absolute ${
        direction === "left" ? "left-8" : "right-8"
      } bottom-[112px] hidden md:flex`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#1b2856]/75">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          {direction === "left" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          )}
        </svg>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, featured = false }) {
  return (
    <article
      className={`relative flex min-h-[340px] w-[320px] shrink-0 flex-col rounded-[24px] bg-brand-blue-50/60 border border-brand-blue-100/50 p-6 md:min-h-[365px] md:w-[380px] md:p-7 ${
        featured ? "shadow-[0_18px_50px_rgba(26,40,87,0.06)]" : ""
      }`}
    >
      <Stars />

      <p className="mt-8 max-w-[92%] text-[18px] leading-[1.45] tracking-[-0.01em] text-[#1b2856]/70 md:text-[20px]">
        “{testimonial.quote}”
      </p>

      <Arrow direction={testimonial.arrow} />

      <div className="mt-auto flex items-center gap-4 pt-10">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full object-cover shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
        />
        <div>
          <p className="text-[18px] font-medium tracking-[-0.02em] text-[#1b2856] md:text-[20px]">
            {testimonial.name}
          </p>
          <p className="text-[15px] text-[#1b2856]/55">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full overflow-hidden bg-brand-blue-50/20 px-6 py-20 md:px-10 md:py-24 xl:px-14 xl:py-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex rounded-full bg-[#ec2025]/30 px-5 py-2">
            <span className="text-[14px] text-[#1b2856]">Testimonials</span>
          </div>

          <h2 className="mt-8 text-[38px] font-medium leading-[1.05] tracking-[-0.04em] text-[#1b2856] md:text-[56px]">
            What our students say
          </h2>

          <p className="mx-auto mt-6 max-w-[560px] text-[18px] leading-[1.6] text-[#1b2856]/60 md:text-[19px]">
            Studying abroad is a long-term decision, so we focus on building
            trust, clarity, and outcomes that truly matter.
          </p>
        </div>

        {/* Marquee Cards */}
        <div className="mt-14 md:mt-16">
          <div className="overflow-hidden">
            <div className="flex w-max gap-6 marquee-track">
              {marqueeTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  featured={testimonial.id === 2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: testimonial-marquee 28s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes testimonial-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }
      `}</style>
    </section>
  );
}