export default function Footer() {
  return (
    <footer className="border-t border-[#F2E5DA] bg-[#FAF6F0] px-6 py-16">
      <div className="mx-auto max-w-6xl">

<div className="grid grid-cols-4 gap-12">
          {/* Brand */}

          <div>
<img
  src="/logo.png"
  alt="Nutmeg"
  className="h-20 w-20 rounded-full"
/>
            <h3 className="mt-4 text-3xl text-[#5C4335]">
              Nutmeg
            </h3>

            <p className="mt-3 leading-7 text-[#8B6B5A]">
              Curated stationery, thoughtful gifts and little joys for your desk.
            </p>
          </div>

          {/* Explore */}

          <div>
            <h4 className="mb-4 text-lg font-medium text-[#5C4335]">
              Explore
            </h4>

            <ul className="space-y-3 text-[#8B6B5A]">
              <li>
                <a href="/" className="hover:text-[#C6868F] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/#story" className="hover:text-[#C6868F] transition">
                  Our Story
                </a>
              </li>

              <li>
                <a href="/#products" className="hover:text-[#C6868F] transition">
                  Coming Soon
                </a>
              </li>

              <li>
                <a href="/#instagram" className="hover:text-[#C6868F] transition">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}

          <div>
            <h4 className="mb-4 text-lg font-medium text-[#5C4335]">
              Support
            </h4>

            <ul className="space-y-3 text-[#8B6B5A]">

              <li>
                <a href="/faq" className="hover:text-[#C6868F] transition">
                  FAQ
                </a>
              </li>

              <li>
                <a href="/shipping-policy" className="hover:text-[#C6868F] transition">
                  Shipping Policy
                </a>
              </li>

              <li>
                <a href="/returns" className="hover:text-[#C6868F] transition">
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a href="/privacy-policy" className="hover:text-[#C6868F] transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="conditions" className="hover:text-[#C6868F] transition">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-[#C6868F] transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="mb-4 text-lg font-medium text-[#5C4335]">
              Get in Touch
            </h4>

            <p className="text-[#8B6B5A]">
              We'd love to hear from you.
            </p>

            <a
              href="mailto:bynutmeg.online@gmail.com"
              className="mt-4 block hover:text-[#C6868F] transition"
            >
              bynutmeg.online@gmail.com
            </a>

            <a
              href="https://instagram.com/nutmeg.online"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block hover:text-[#C6868F] transition"
            >
              @nutmeg.online
            </a>
          </div>

        </div>

        <div className="mt-16 border-t border-[#EADFD3] pt-8 text-center">

          <p className="text-[#8B6B5A]">
            Brewed with ☕ and packed with care.
          </p>

          <p className="mt-2 text-sm text-[#B59B8C]">
            © {new Date().getFullYear()} Nutmeg. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}