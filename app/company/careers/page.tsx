"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe,
  HeartHandshake,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

const jobs = [
  {
    title: "Senior UI/UX Designer",
    location: "Bangalore, India",
    type: "Full Time",
    department: "Design",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    department: "Engineering",
  },
  {
    title: "Fashion Content Creator",
    location: "Mumbai, India",
    type: "Contract",
    department: "Marketing",
  },
  {
    title: "Social Media Manager",
    location: "Delhi, India",
    type: "Full Time",
    department: "Branding",
  },
  {
    title: "Ecommerce Operations Executive",
    location: "Hyderabad, India",
    type: "Full Time",
    department: "Operations",
  },
  {
    title: "Product Photographer",
    location: "Remote",
    type: "Part Time",
    department: "Creative",
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Remote Friendly",
    description: "Work from anywhere with flexible schedules.",
  },
  {
    icon: HeartHandshake,
    title: "Health & Wellness",
    description: "Comprehensive wellness and healthcare support.",
  },
  {
    icon: Users,
    title: "Creative Culture",
    description: "Collaborate with passionate and innovative minds.",
  },
  {
    icon: Sparkles,
    title: "Growth Opportunities",
    description: "Learn, lead, and grow your career with us.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <BriefcaseBusiness className="h-4 w-4" />
              Join NextGrid Fashion
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Build The Future
              <span className="block text-neutral-500">
                Of Fashion Commerce
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              We are building a global fashion experience powered by creativity,
              technology, and modern culture.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-neutral-800">
                Explore Open Roles
              </button>

              <button className="rounded-2xl border border-neutral-300 px-7 py-4 font-semibold transition hover:bg-neutral-100">
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">Why Work With Us</h2>
          <p className="mt-4 text-lg text-neutral-600">
            A workplace designed for creators, innovators, and dreamers.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black">Open Positions</h2>

            <p className="mt-4 text-lg text-neutral-600">
              Explore exciting opportunities across our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-8 transition hover:shadow-xl lg:flex-row lg:items-center lg:justify-between"
              >
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                      {job.department}
                    </span>

                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold">{job.title}</h3>

                  <div className="mt-4 flex items-center gap-2 text-neutral-500">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                </div>

                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-neutral-800"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-black px-8 py-16 text-center text-white lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-black sm:text-5xl">
              Don’t See The Perfect Role?
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              We’re always looking for talented people passionate about fashion,
              creativity, and innovation.
            </p>

            <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:bg-neutral-200">
              Send Your Resume
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}