"use client";
import {
  AdvantageOfModelComponent,
  ClassicComponent,
  HeroOneComponent,
  LlmComponent,
  LogoGroupComponent,
  RelatedPapersComponent,
  TestimonialComponent,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <HeroOneComponent />
      <LogoGroupComponent />
      <TestimonialComponent />
      <LlmComponent />
      <ClassicComponent />
      <AdvantageOfModelComponent />
      <RelatedPapersComponent />
    </main>
  );
}
