"use client";

import TypewriterComponents from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponents
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing.",
                "Code Generation.",
                "Code Debugging.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Imagine a single platform where you can ask any question, generate
        stunning images, videos, and even captivating audio, all with just a
        simple prompt. This revolutionary AI platform brings your ideas to life,
        empowering you to create with ease and efficiency.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : '/sign-up'}>
          <Button variant='premium' className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No Credit Card required.
      </div>
    </div>
  );
};
