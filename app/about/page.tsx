// src/app/about/page.tsx
export default function About() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-white text-gray-900">
      <div className="mx-auto max-w-screen-md px-4 py-8 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
          About Us
        </h1>
        <p className="text-lg text-gray-600">
          This is your new About page! Notice how clicking the link in the navigation bar loaded this page instantly without refreshing your browser. That is the power of Next.js.
        </p>
      </div>
    </section>
  );
}