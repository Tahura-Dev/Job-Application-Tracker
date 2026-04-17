"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl font-bold text-black mb-6">
              A better way to track your Job application.
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              {" "}
              Capture, organize and manage your job search in one place.{" "}
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/SignUp">
                <Button size="lg" className="px-8 text-lg font-medium h-12">
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground ">
                Free forever. No credit card required.
              </p>
            </div>
          </div>
        </section>

        {/* Hero image section with tabs */}

        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* Tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button
                  onClick={() => setActiveTab("Organize")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-color ${activeTab === "Organize" ? " bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Organize Application
                </Button>
                <Button
                  onClick={() => setActiveTab("Hired")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-color ${activeTab === "Hired" ? " bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Get Hired
                </Button>
                <Button
                  onClick={() => setActiveTab("Manage")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-color ${activeTab === "Manage" ? " bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Manage Board
                </Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border-gray-200 shadow-xl">
                {activeTab === "Organize" && (
                  <Image
                    src="/hero1.png"
                    alt="Organize "
                    width={1200}
                    height={800}
                  />
                )}

                {activeTab === "Hired" && (
                  <Image
                    src="/hero2.png"
                    alt="Get Hired"
                    width={1200}
                    height={800}
                  />
                )}

                {activeTab === "Manage" && (
                  <Image
                    src="/hero3.png"
                    alt="Manage Board"
                    width={1200}
                    height={800}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
