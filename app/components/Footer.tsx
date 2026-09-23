export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-heading py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {year} Bofowo Agency. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-white/55">
          Built by{" "}
          <a
            href="https://eltemur.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 underline decoration-white/25 underline-offset-2 hover:text-white"
          >
            Eltemur Zentra Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
