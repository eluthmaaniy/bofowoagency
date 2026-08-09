export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-heading py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {year} Bofowo Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
