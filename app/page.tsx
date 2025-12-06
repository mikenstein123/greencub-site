export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF7E9] text-[#111827]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Logo / Brand */}
        <header className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold">
            <span className="text-[#166534]">Green</span>Cub
          </h1>
          <nav className="space-x-4 text-sm">
            <a href="#shop" className="hover:underline">Shop</a>
            <a href="#mission" className="hover:underline">Our Mission</a>
            <a href="#free" className="hover:underline">Free Printables</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Colour. Play. Grow with <span className="text-[#166534]">GreenCub</span> 🌱
          </h2>
          <p className="text-base md:text-lg mb-6 max-w-xl">
            Eco-friendly digital colouring books for kids aged 3–10.
            Print at home, keep them happily busy, and help us plant real trees across India.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#shop"
              className="px-5 py-2 rounded-lg bg-[#166534] text-white text-sm font-semibold"
            >
              Browse Colouring Books
            </a>
            <a
              href="#free"
              className="px-5 py-2 rounded-lg border border-[#166534] text-[#166534] text-sm font-semibold"
            >
              Download Free Sample
            </a>
          </div>
        </section>

        {/* Shop section */}
        <section id="shop" className="mb-10">
          <h3 className="text-2xl font-bold mb-3">Colouring Books</h3>
          <p className="text-sm mb-4">
            Soon you&apos;ll see all your GreenCub books listed here.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h4 className="font-semibold mb-1">Jungle Friends (Ages 3–6)</h4>
              <p className="text-sm mb-2">
                25 fun, simple animal illustrations made for tiny hands and big imaginations.
              </p>
              <p className="text-sm font-semibold mb-3">₹250 • Digital PDF</p>
              <button className="px-4 py-2 text-sm rounded-lg bg-[#166534] text-white">
                Buy (coming soon)
              </button>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="mb-10">
          <h3 className="text-2xl font-bold mb-3">One Tree for Every ₹1,000</h3>
          <p className="text-sm mb-2">
            For every ₹1,000 GreenCub earns, we plant one real sapling.
            Your child gets to colour and create — and together, we grow a greener India.
          </p>
          <p className="text-sm italic">
            Tree counter: <span className="font-semibold">0 trees planted</span> (tracking starts after launch!)
          </p>
        </section>

        {/* Free printables */}
        <section id="free" className="mb-10">
          <h3 className="text-2xl font-bold mb-3">Free Sample Pack</h3>
          <p className="text-sm mb-4">
            Enter your email below and we&apos;ll send you a free 5-page GreenCub colouring mini-pack.
            Perfect to test with your child.
          </p>
          <form className="flex flex-col md:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm"
            />
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-[#166534] text-white text-sm font-semibold"
            >
              Get Free Pack
            </button>
          </form>
          <p className="text-xs mt-2 text-gray-600">
            (We&apos;ll wire this up later so it actually sends the PDF.)
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10">
          <h3 className="text-2xl font-bold mb-3">Contact</h3>
          <p className="text-sm mb-1">
            Questions, collaborations, or feedback? Drop us a message:
          </p>
          <p className="text-sm">
            Email: <span className="font-mono">hello@greencub.in</span> (you can change this later) <br />
            WhatsApp: <span className="font-mono">+91-XXXXXXXXXX</span>
          </p>
        </section>

        <footer className="border-t pt-4 mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} GreenCub. Made with 🌱 in India.
        </footer>
      </div>
    </main>
  );
}
