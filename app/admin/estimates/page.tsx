import type { Metadata } from "next";
import { EstimateConsole } from "@/components/admin/EstimateConsole";

export const metadata: Metadata = {
  title: "Estimate console",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: "/admin/estimates" },
};

export default function AdminEstimatesPage() {
  return (
    <section className="relative min-h-[80vh] bg-aurora py-10 md:py-14">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <EstimateConsole />
      </div>
    </section>
  );
}
