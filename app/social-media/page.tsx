import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen text-foreground relative overflow-hidden">
      {/* Purple Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1a0033] via-[#2a0a4a] to-[#0b001a]" />

      {/* Purple Glow Orbs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/40 blur-3xl" />
      <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      {/* Back Button */}
      <Link
        href="/"
        className="fixed left-6 top-24 flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition z-20"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Social Media Account Support
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/70 leading-8 max-w-3xl mx-auto">
          Social media is no longer optional for businesses in Germany. More than half of German SMEs actively use social media, and 78% leverage it to acquire new customers.
        </p>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-5xl px-6 pb-24 grid gap-8 md:grid-cols-2">
        {[
          {
            title: "Account Recovery",
            desc: "Restore access to suspended or restricted accounts quickly and securely.",
          },
          {
            title: "Verification Support",
            desc: "Fix identity and verification issues to regain full platform access.",
          },
          {
            title: "Ad Account Recovery",
            desc: "Restore disabled advertising accounts and resume campaigns without delay.",
          },
          {
            title: "Business Protection",
            desc: "Long-term monitoring to prevent future restrictions and protect your brand.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg hover:bg-white/10 hover:scale-[1.02] transition"
          >
            <h2 className="text-xl font-semibold text-white mb-3">
              {item.title}
            </h2>
            <p className="text-white/70 leading-7">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}