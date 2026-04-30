function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-10">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-2xl text-white">Rutuja Andhale</p>
          <p className="mt-2 text-sm text-white/52">
            Tarot Reader offering intuitive guidance through a refined cosmic experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-white/60">
          <a href="#home" className="transition hover:text-cosmic-softGold">
            Home
          </a>
          <a href="#about" className="transition hover:text-cosmic-softGold">
            About
          </a>
          <a href="#services" className="transition hover:text-cosmic-softGold">
            Services
          </a>
          <a href="#booking" className="transition hover:text-cosmic-softGold">
            Book
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
