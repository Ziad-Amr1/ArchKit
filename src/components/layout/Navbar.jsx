function Navbar() {
    return (
      <nav className="w-full bg-[var(--bg-surface)] border-b border-[var(--border-light)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-semibold tracking-wide text-[var(--text-primary)]">
            ArchKit
          </h1>
  
          <ul className="flex gap-6 text-sm uppercase tracking-wider">
            <li>
              <a
                href="/"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition"
              >
                Home
              </a>
            </li>
  
            <li>
              <a
                href="/products"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition"
              >
                Products
              </a>
            </li>
  
            <li>
              <a
                href="/contact"
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  
  export default Navbar
  