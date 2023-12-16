"use client";

import { faker } from "@faker-js/faker";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    designation: "Artist & Entrepreneur",
    title: "The Creative Spark",
    description:
      "I used to stare at blank canvases, my mind choked with creative block. Then I found your AI platform. Now, a simple prompt sparks a whole world of possibilities! I've created illustrations for my children's book, designed logos for my Etsy shop, and even brought my favorite poem to life in a stunning video. This AI is my creative muse, and I can't wait to see what we create next.",
  },
  {
    name: "John D.",
    designation: "Professor Emeritus",
    title: "The Knowledge Seeker",
    description:
      "As a lifelong learner, I'm always hungry for knowledge. But sometimes, traditional research methods feel slow and limited. Your AI platform changed everything. It's like having a personal research assistant on steroids! I can ask any question, from complex scientific theories to obscure historical details, and get comprehensive, insightful answers in seconds. It's opened up a whole new world of learning possibilities.",
  },
  {
    name: "Emily L.",
    designation: "Marketing Consultant",
    title: "The Efficiency Enhancer",
    description:
      "As a freelancer, every minute counts. I need tools that help me work smarter, not harder. Your AI platform is my new superhero. It generates code snippets that save me hours of manual work, writes persuasive marketing copy that boosts my client conversions, and even composes catchy jingles for my video projects. It's like having a whole team of virtual assistants at my fingertips, and I can finally focus on the strategic work that truly matters.",
  },
  {
    name: "Maya S.",
    designation: "Dreamer & Artist",
    title: "The Dream Weaver",
    description:
      "I've always been a vivid dreamer, but lately, my dreams felt bland and repetitive. Then I started using your AI platform's music generation feature before bed. Now, as I drift off, the air fills with personalized ambient soundscapes that whisk me away to fantastical worlds. Each night is a unique sonic adventure, filled with wonder and excitement. It's like I'm consciously crafting my own dreams, and I wake up feeling inspired and refreshed.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <p className="mb-8 lg:mb-16 sm:text-lg text-center text-muted-foreground">
        Our users love <span className="text-secondary">BentAI</span> Discover
        what they have to say about the seamless AI-powered experience, where
        questions are answered intelligently, creativity is unleashed
        effortlessly, and subscriptions are a gateway to a world of
        possibilities.
      </p>
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-8 text-center border border-[#1f1f28] md:p-12 rounded-lg"
          >
            <blockquote className="mx-auto mb-8 max-w-2xl text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="my-4 text-muted-foreground">
                &quot;{item.description}&quot;
              </p>
            </blockquote>
            <div className="flex justify-center items-center space-x-3">
              <Image
                className="rounded-full"
                src={faker.image.avatar()}
                alt="profile picture"
                width={30}
                height={30}
              />
              <div className="space-y-0.5 font-medium text-white text-left">
                <div>{item.name}</div>
                <div className="text-sm font-light text-muted-foreground">
                  {item.designation}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
