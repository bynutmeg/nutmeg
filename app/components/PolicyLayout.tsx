import Link from "next/link";
import { ReactNode } from "react";


interface PolicyLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function PolicyLayout({
  title,
  description,
  children,
}: PolicyLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F7F4EE] py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-black transition mb-10"
        >
          ← Back to Home
        </Link>

        <p className="uppercase tracking-[0.25em] text-xs text-[#7C8A63] font-semibold mb-3">
          Nutmeg Policies
        </p>

        <h1 className="text-5xl font-bold text-gray-900 mb-5">
          {title}
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-12 leading-8">
          {description}
        </p>

        <div className="bg-white rounded-[32px] shadow-sm border border-[#EFE8DB] p-8 md:p-12">
          <div className="prose prose-gray max-w-none">
            {children}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Still have questions?
          </p>

          <a
            href="mailto:bynutmeg.online@gmail.com"
            className="mt-2 inline-block font-medium underline underline-offset-4 hover:text-[#7C8A63]"
          >
            bynutmeg.online@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}