export function Navbar() {
  return (
    <nav className="fixed top-0 z-[100] w-full flex items-center justify-between px-6 py-4 bg-black/90 backdrop-blur-xl border-b border-primary/20">
      <div className="flex items-center gap-2">
        <img alt="LA TUKI" className="h-10 w-auto" src="/logo.png" />
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-zinc-400 mr-2">
          <span className="text-primary cursor-pointer">ES</span>
          <span>/</span>
          <span className="hover:text-white cursor-pointer transition-colors">EN</span>
        </div>
        <button className="bg-primary text-black px-6 py-2.5 rounded-full font-black text-xs hover:scale-105 transition-transform uppercase tracking-tighter">
          CONSEGUÍ TUS ENTRADAS
        </button>
      </div>
    </nav>
  );
}
