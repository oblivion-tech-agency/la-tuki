export function Footer() {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <img alt="LA TUKI" className="h-12 w-auto" src="/logo.png" />
        <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">
          © 2026 La Tuki Worldwide. Buenos Aires, Argentina.
        </p>
        <a
          href="https://www.obliviontech.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-80 transition-opacity duration-300"
        >
          <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-[4px]">
            Powered by
          </span>
          <img
            src="/images/oblivion-logo.svg"
            alt="Oblivion"
            className="h-6 w-auto [filter:brightness(0)_invert(1)]"
          />
        </a>
      </div>
    </footer>
  );
}
