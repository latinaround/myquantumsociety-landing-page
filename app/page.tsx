"use client";
import {
  AdvantageOfModelComponent,
  ClassicComponent,
  HeroOneComponent,
  LlmComponent,
  LogoGroupComponent,
  RelatedPapersComponent,
  TestimonialComponent,
  PhotonicComponent,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <HeroOneComponent />
      <PhotonicComponent />
      <TestimonialComponent />
      <ClassicComponent />
      <LlmComponent />
      {/* <AdvantageOfModelComponent /> */}
      <RelatedPapersComponent />
      <LogoGroupComponent />
    </main>
  );
}
