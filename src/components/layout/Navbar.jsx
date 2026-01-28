function Navbar() {
    return (
      <nav className="w-full border-b border-gray-200 bg-white border-b-2 border-gray-400">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-semibold tracking-wide">
            ArchKit
          </h1>
  
          <ul className="flex gap-6 text-sm uppercase tracking-wider">
            <li>
              <a
                href="/"
                className="text-gray-700 hover:text-black transition"
              >
                Home
              </a>
            </li>
  
            <li>
              <a
                href="/products"
                className="text-gray-700 hover:text-black transition"
              >
                Products
              </a>
            </li>
  
            <li>
              <a
                href="/contact"
                className="text-gray-700 hover:text-black transition"
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
  