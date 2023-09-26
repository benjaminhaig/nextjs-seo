import Link from "next/link";

export const metadata = {
  title: "Nextjs SEO tutorial", // 55-65 characters
  description: "Learn SEO in Next.js 13 alongside Ben and become a pro!" // max of 155 characters
}

export default function Home() {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center">
      <main className="text-white text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">SEO For Next.js 13</h1>
        <p className="text-xl mb-8">
          Master the art of search engine optimization in Next.js 13.
        </p>
        <Link
          href="/blog"
          className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Blog
        </Link>
      </main>

      <section className="bg-white py-16 rounded p-2">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            What You&apos;ll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">1. SEO Fundamentals</h3>
              <p className="text-gray-700">
                Gain a solid understanding of SEO principles and techniques.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">2. Next.js Integration</h3>
              <p className="text-gray-700">
                Learn how to optimize Next.js applications for search engines.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">3. Content Strategy</h3>
              <p className="text-gray-700">
                Develop an effective content strategy for SEO success.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">4. Analytics and Monitoring</h3>
              <p className="text-gray-700">
                Utilize analytics tools to track and improve your SEO efforts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
