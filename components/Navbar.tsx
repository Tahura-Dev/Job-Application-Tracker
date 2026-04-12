import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <Briefcase />
          Job tracker
        </Link>

        <div>
          <Link href="/Login">
            <Button variant="ghost" className="text-gray-700 hover:text-black px-6" >Login</Button>
          </Link>
          <Link href="/SignUp">
            <Button className="bg-primary hover:bg-primary/90 px-5" >SignUp</Button>
          </Link>
        </div>


      </div>
    </nav>
  );
}
