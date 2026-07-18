"use client";
import Footer from "./components/Footer";
// import Meg from "./components/Meg";

export default function Home() {
  return (
   <main className="bg-[#FAF6F0] text-[#5C4335]">
     {/* NAVBAR */}

<header className="sticky top-0 z-40 border-b border-[#F2E5DA] bg-[#FAF6F0]/80 backdrop-blur-md">
  <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
    <div>
      <h2 className="text-xl tracking-wide">
        Nutmeg
      </h2>

      <p className="text-xs text-[#B08A74]">
        Little joys for your desk.
      </p>
    </div>

    <nav className="hidden gap-8 text-sm md:flex">
     <a href="/about" className="transition hover:text-[#C6868F]">
  About
</a>

      <a href="/shop" className="transition hover:text-[#C6868F]">
  Shop
      </a>

      <a href="#instagram" className="transition hover:text-[#C6868F]">
        Instagram
        </a>
    

    </nav>
  </div>
</header>
    {/* HERO */}

<section className="relative overflow-hidden py-24 md:py-32">
  {/* Soft background glows */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#F7E7D7] blur-3xl opacity-50" />
</div>

  <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl animate-pulse"></div>

<div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl animate-pulse"></div>

  <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
   <img
  src="/logo.png"
  alt="Nutmeg"
  className="mb-8 h-40 w-40 animate-bounce rounded-full shadow-2xl sm:h-52 sm:w-52 md:h-64 md:w-64"
  style={{
    animationDuration: "3s",
    pointerEvents: "none",
  }}
/>
    <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
      Curated for cozy minds ✨
    </p>

<h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">      Little joys
      <br />
      for your desk.
    </h1>

<p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-xl mx-auto leading-8">      Beautiful stationery boxes, thoughtful gifts and tiny paper treasures
      designed to brighten everyday moments.
    </p>

    <div className="mt-10 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">

  <a
    href="#products"
    className="inline-flex w-full items-center justify-center rounded-full bg-[#8B5E3C] px-8 py-4 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-auto"
  >
    Explore What's Brewing ☕
  </a>
  

  <a
    href="https://instagram.com/nutmeg.online"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-full items-center justify-center rounded-full border border-[#8B5E3C] px-8 py-4 transition duration-300 hover:bg-[#F8D8E5] sm:w-auto"
  >
    Follow our Journey →
  </a>

</div>

    <p className="mt-16 animate-bounce text-[#B59B8C]">
      ↓ Scroll for a little joy
    </p>

  </div>

</section>

      {/* STORY */}

      <section
  id="story"
  className="bg-[#FFF9F5] px-6 py-24"
>

        <div className="mx-auto max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
            Our Little Story
          </p>

          <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">
            Little things
            <br />
            bring big joy.
          </h2>

        
         <p className="mt-8 text-lg leading-8 text-[#6B584D]">
  At Nutmeg, we believe the smallest things can make the biggest difference.
  A favourite pen, a fresh notebook or a roll of washi tape can turn everyday
  routines into moments worth slowing down for.
  <br />
  <br />
  Every collection is thoughtfully curated to inspire creativity, celebrate
  quiet moments and bring a little joy to desks across India.

          </p>

        </div> 

      </section>
      {/* WHY NUTMEG */}

<section className="bg-[#FAF6F0] px-6 py-24">
  <div className="mx-auto max-w-6xl text-center">

    <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
      Why Nutmeg?
    </p>

    <h2 className="mt-6 text-4xl sm:text-5xl">
      Thoughtfully curated,
      <br />
      beautifully packed.
    </h2>

    <div className="mt-16 grid gap-8 md:grid-cols-4">

<div
  className="
    rounded-3xl
    border
    border-[#EFE7DE]
    bg-white/80
    backdrop-blur
    p-8
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>        <div className="text-4xl">🌸</div>
        <h3 className="mt-5 text-xl">Carefully Curated</h3>
        <p className="mt-4 leading-7 text-[#6B584D]">
          Every item is chosen with intention—not just added to fill a box.
        </p>
      </div>

<div
  className="
    rounded-3xl
    border
    border-[#EFE7DE]
    bg-white/80
    backdrop-blur
    p-8
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>        <div className="text-4xl">📦</div>
        <h3 className="mt-5 text-xl">Packed with Care</h3>
        <p className="mt-4 leading-7 text-[#6B584D]">
          Every order is wrapped like a gift because opening it should feel just as special.
        </p>
      </div>

<div
  className="
    rounded-3xl
    border
    border-[#EFE7DE]
    bg-white/80
    backdrop-blur
    p-8
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>        <div className="text-4xl">🎁</div>
        <h3 className="mt-5 text-xl">Perfect for Gifting</h3>
        <p className="mt-4 leading-7 text-[#6B584D]">
          For journal lovers, students, stationery collectors and anyone who loves little joys.
        </p>
      </div>

<div
  className="
    rounded-3xl
    border
    border-[#EFE7DE]
    bg-white/80
    backdrop-blur
    p-8
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>        <div className="text-4xl">🇮🇳</div>
        <h3 className="mt-5 text-xl">Shipping Across India</h3>
        <p className="mt-4 leading-7 text-[#6B584D]">
          Launching soon with carefully packed orders delivered across the country.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* WHAT'S BREWING */}
{/* WHAT'S BREWING */}

<section
  id="products"
  className="px-6 py-24"
>
  <div className="mx-auto max-w-6xl">

    <p className="text-center uppercase tracking-[0.35em] text-sm text-[#C6868F]">
      Coming Soon
    </p>

    <h2 className="mt-4 mb-4 text-center text-4xl sm:text-5xl">
      What's Brewing? ☕
    </h2>

    <p className="mx-auto mb-16 max-w-2xl text-center leading-8 text-[#6B584D]">
      We're carefully putting together our first collections—filled with
      thoughtfully chosen stationery, tiny surprises and lots of cozy charm.
    </p>

    <div className="grid gap-8 md:grid-cols-3">

      {/* CARD 1 */}

<div
  className="
    rounded-3xl
    border
    border-[#EFE7DE]
    bg-white/80
    backdrop-blur
    p-8
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>
        <div className="text-5xl">🌸</div>

        <p className="mt-6 uppercase tracking-[0.3em] text-sm text-[#C6868F]">
          Launching Soon
        </p>

        <h3 className="mt-4 text-3xl">
          Cozy Starter Box
        </h3>

        <p className="mt-5 leading-8 text-[#6B584D]">
          A comforting mix of washi tapes, stickers, pens and everyday favourites
          to brighten your desk and make ordinary days feel a little more special.
        </p>

      </div>

      {/* CARD 2 */}

<div
  className="
    rounded-3xl
    border
    border-[#EFE7DE]
    bg-white/80
    backdrop-blur
    p-8
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>
        <div className="text-5xl">📖</div>

        <p className="mt-6 uppercase tracking-[0.3em] text-sm text-[#C6868F]">
          Launching Soon
        </p>

        <h3 className="mt-4 text-3xl">
          Journal Collection
        </h3>

        <p className="mt-5 leading-8 text-[#6B584D]">
          Beautiful stationery curated for journaling, planning and capturing
          life's little moments one page at a time.
        </p>

      </div>

      {/* CARD 3 */}

<div
  className="
    rounded-3xl
    border
    border-[#EFE7DE]
    bg-white/80
    backdrop-blur
    p-8
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>
        <div className="text-5xl">🎁</div>

        <p className="mt-6 uppercase tracking-[0.3em] text-sm text-[#C6868F]">
          Launching Soon
        </p>

        <h3 className="mt-4 text-3xl">
          Party Favours
        </h3>

        <p className="mt-5 leading-8 text-[#6B584D]">
          Cute little stationery bundles made for birthdays, classrooms,
          celebrations and thoughtful gifting.
        </p>

      </div>

    </div>

  </div>
</section>
<div className="overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 120"
    className="block h-16 w-full fill-[#FFF9F5]"
    preserveAspectRatio="none"
  >
    <path d="M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,64 L1440,120 L0,120 Z" />
  </svg>
</div>
{/* WHAT'S INSIDE */}

<section className="bg-[#FFF9F5] px-6 py-28">
  <div className="mx-auto max-w-7xl">

    <p className="text-center uppercase tracking-[0.35em] text-sm text-[#C6868F]">
      Inside Every Collection
    </p>

    <h2 className="mt-4 text-center text-4xl font-semibold tracking-tight sm:text-5xl">
      Little treasures you'll love
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-center leading-8 text-[#6B584D]">
      Every Nutmeg collection is thoughtfully curated with beautiful stationery
      and tiny details that make everyday moments feel a little more special.
    </p>

    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

      <div className="rounded-3xl border border-[#EFE7DE] bg-white/80 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="text-5xl">🖊️</div>
        <h3 className="mt-5 text-xl">Pens</h3>
      </div>

      <div className="rounded-3xl border border-[#EFE7DE] bg-white/80 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="text-5xl">📔</div>
        <h3 className="mt-5 text-xl">Journals</h3>
      </div>

      <div className="rounded-3xl border border-[#EFE7DE] bg-white/80 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="text-5xl">🎀</div>
        <h3 className="mt-5 text-xl">Washi Tape</h3>
      </div>

      <div className="rounded-3xl border border-[#EFE7DE] bg-white/80 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="text-5xl">📎</div>
        <h3 className="mt-5 text-xl">Sticky Notes</h3>
      </div>

      <div className="rounded-3xl border border-[#EFE7DE] bg-white/80 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="text-5xl">🌸</div>
        <h3 className="mt-5 text-xl">Cute Accessories</h3>
      </div>

    </div>

  </div>
</section>
{/* LAUNCHING SOON */}

<section
  id="launch"
  className="bg-[#FAF6F0] px-6 py-28"
>
  <div className="mx-auto max-w-3xl rounded-[40px] border border-[#EFE7DE] bg-white/80 p-10 text-center shadow-sm backdrop-blur md:p-16">

    <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
      Launching Soon
    </p>

    <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
      Coming this August ✨
    </h2>

    <p className="mx-auto mt-6 max-w-xl leading-8 text-[#6B584D]">
      We're curating cozy stationery, thoughtful gift boxes, and little details
      that make everyday moments feel special.
    </p>

    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

      <a
        href="https://instagram.com/nutmeg.online"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#8B5E3C] px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        Follow on Instagram
      </a>

      <span className="rounded-full border border-[#E8DDD2] px-8 py-4 text-[#6B584D]">
        First collection arriving August 2026
      </span>

    </div>

    <p className="mt-6 text-sm text-[#9B8779]">
      Follow along for sneak peeks, new arrivals, and launch updates.
    </p>

  </div>
</section>
      {/* INSTAGRAM */}

<section
  id="instagram"
  className="bg-[#FFF9F5] px-6 py-24"
>
  <div className="mx-auto max-w-3xl text-center">

    <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
      Follow Our Journey
    </p>

    <h2 className="mt-6 text-4xl sm:text-5xl">
      Building Nutmeg,
      <br />
      one little joy
      <br />
      at a time.
    </h2>

    <p className="mt-8 text-lg leading-8 text-[#6B584D]">
      Follow along as we sketch ideas, source beautiful stationery,
      pack our first orders and bring Nutmeg to life from the very beginning.
    </p>

    <p className="mt-6 text-xl font-semibold text-[#8B5E3C]">
      Follow @nutmeg.online
    </p>

    <a
      href="https://instagram.com/nutmeg.online"
      target="_blank"
      rel="noopener noreferrer"
className="
mt-10
inline-flex
items-center
justify-center
rounded-full
bg-[#F7D9E0]
px-8
py-4
font-medium
text-[#5C3A3A]
shadow-md
shadow-[#F7D9E0]/40
transition-all
duration-300
hover:-translate-y-1
hover:scale-105
hover:shadow-xl
active:scale-95
"    >
      Follow on Instagram →
    </a>

  </div>
</section>
<Footer />
  
  </main>
  );
}   