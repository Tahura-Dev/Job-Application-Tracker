import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center" >
            <h1 className="text-6xl font-bold text-black mb-6">A better way to track your Job  application.</h1>
            <p className="text-muted-foreground mb-10 text-xl"> Capture, organize, and manage your job search in one place. </p>
            <div className="flex flex-col items-center gap-4" >
              <Button size="lg" className="px-8 text-lg font-medium h-12" >Start for free <ArrowRight className="ml-2" /></Button>
              <p className="text-sm text-muted-foreground " >Free forever. No credit card required.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
