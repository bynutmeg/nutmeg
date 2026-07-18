import { ReactNode } from "react";

interface PolicySectionProps {
  title: string;
  children: ReactNode;
}

export default function PolicySection({
  title,
  children,
}: PolicySectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h2>

      <div className="space-y-4 text-gray-700 leading-8">
        {children}
      </div>
    </section>
  );
}