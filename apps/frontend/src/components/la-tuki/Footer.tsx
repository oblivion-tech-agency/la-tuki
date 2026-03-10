export function Footer() {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start">
          <img alt="LA TUKI" className="h-16 w-auto mb-6" src="/logo.png" />
          <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">
            © 2026 La Tuki Worldwide. Buenos Aires, Argentina.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <a
            className="text-zinc-400 font-black uppercase text-sm hover:text-primary transition-colors tracking-tighter"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-zinc-400 font-black uppercase text-sm hover:text-primary transition-colors tracking-tighter"
            href="#"
          >
            TikTok
          </a>
          <a
            className="text-zinc-400 font-black uppercase text-sm hover:text-primary transition-colors tracking-tighter"
            href="#"
          >
            Spotify
          </a>
          <a
            className="text-zinc-400 font-black uppercase text-sm hover:text-primary transition-colors tracking-tighter"
            href="#"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
