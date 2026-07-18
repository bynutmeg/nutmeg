export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#F2E5DA] bg-[#FAF6F0]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a href="/" className="group">
          <h2 className="text-xl tracking-wide transition group-hover:text-[#C6868F]">
            Nutmeg
          </h2>

          <p className="text-xs text-[#B08A74]">
            Little joys for your desk.
          </p>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">

          <a href="/" className="transition hover:text-[#C6868F]">
            Home
          </a>

          <a href="/shop" className="transition hover:text-[#C6868F]">
            Shop
          </a>

          <a href="/about" className="transition hover:text-[#C6868F]">
            About
          </a>

          <a href="/faq" className="transition hover:text-[#C6868F]">
            FAQ
          </a>

          <a href="/contact" className="transition hover:text-[#C6868F]">
            Contact
          </a>

          <a
            href="https://instagram.com/nutmeg.online"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#C6868F]"
          >
            Instagram
          </a>

          <a
            href="/#waitlist"
            className="rounded-full bg-[#F7D9E0] px-5 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            Join Waitlist
          </a>

        </nav>

      </div>
    </header>
  );
}   