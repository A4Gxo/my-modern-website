// src/app/projects/page.tsx
import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Gyanaranjan Moharana",
  description: "A showcase of my software engineering, machine learning, and IoT projects.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-12">
      <Projects />
    </main>
  );
}