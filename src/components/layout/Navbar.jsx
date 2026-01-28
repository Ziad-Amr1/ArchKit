function Navbar() {
    return(
    <nav>
    <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">ArchKit</h1>
        <ul className="flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
    </nav>
    )
  }
  
  export default Navbar;  