"use client";

import {
  Clock3,
  MapPin,
  Navigation,
  Phone,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";

const stores = [
  {
    city: "Bangalore",
    address: "12 Fashion Avenue, MG Road, Bangalore",
    phone: "+91 98765 43210",
    hours: "10:00 AM - 9:00 PM",
    rating: "4.9",
  },
  {
    city: "Mumbai",
    address: "88 Luxury Street, Bandra West, Mumbai",
    phone: "+91 91234 56789",
    hours: "11:00 AM - 10:00 PM",
    rating: "4.8",
  },
  {
    city: "Delhi",
    address: "22 Style Plaza, Connaught Place, Delhi",
    phone: "+91 99887 77665",
    hours: "10:30 AM - 9:30 PM",
    rating: "4.7",
  },
  {
    city: "Hyderabad",
    address: "45 Premium Hub, Jubilee Hills, Hyderabad",
    phone: "+91 90909 80808",
    hours: "10:00 AM - 9:00 PM",
    rating: "4.9",
  },
  {
    city: "Chennai",
    address: "14 Elite Avenue, T Nagar, Chennai",
    phone: "+91 93456 12345",
    hours: "10:00 AM - 8:30 PM",
    rating: "4.8",
  },
  {
    city: "Pune",
    address: "9 Modern Street, Koregaon Park, Pune",
    phone: "+91 92345 67890",
    hours: "11:00 AM - 9:00 PM",
    rating: "4.7",
  },
];

export default function StoresPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              NextGrid Fashion Stores
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Experience Fashion
              <span className="block text-neutral-500">
                Beyond Online
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Visit our premium fashion stores and explore curated collections,
              luxury experiences, and personalized styling.
            </p>

            <div className="mx-auto mt-10 flex max-w-xl items-center rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm">
              <Search className="h-5 w-5 text-neutral-400" />

              <input
                type="text"
                placeholder="Search by city or location..."
                className="w-full bg-transparent px-4 py-4 outline-none"
              />

              <button className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">Our Locations</h2>

          <p className="mt-4 text-lg text-neutral-600">
            Discover our flagship stores across major cities.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {stores.map((store, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-black via-neutral-800 to-neutral-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="h-20 w-20 text-white/10" />
                </div>

                <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow">
                  {store.city}
                </div>

                <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm text-white backdrop-blur">
                  <Star className="h-4 w-4 fill-white" />
                  {store.rating} Rating
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black">{store.city}</h3>

                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <p className="leading-7 text-neutral-600">
                      {store.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                      <Phone className="h-5 w-5" />
                    </div>

                    <p className="text-neutral-600">{store.phone}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <p className="text-neutral-600">{store.hours}</p>
                  </div>
                </div>

                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-neutral-800">
                  Get Directions
                  <Navigation className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
                <Sparkles className="h-4 w-4" />
                Premium Experience
              </div>

              <h2 className="text-4xl font-black leading-tight">
                More Than Just A Fashion Store
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Enjoy personalized styling, premium collections, exclusive
                launches, and luxury shopping experiences designed for modern
                fashion enthusiasts.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-black" />

                  <p className="text-neutral-700">
                    Personal styling and fashion consultation.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-black" />

                  <p className="text-neutral-700">
                    Exclusive in-store drops and collections.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-black" />

                  <p className="text-neutral-700">
                    Premium customer lounge and events.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[40px] bg-black p-10 text-white">
              <h3 className="text-4xl font-black">
                Visit Your Nearest Store
              </h3>

              <p className="mt-5 text-lg leading-8 text-neutral-300">
                Experience the future of fashion retail with immersive shopping,
                curated collections, and luxury service.
              </p>

              <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:bg-neutral-200">
                Book Store Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}