import { Link } from "react-router"

const Footer = () => {
  return (

    
<footer className="bg-white bottom-0 shadow-sm  dark:bg-blue-700">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-blue-700 sm:text-center dark:text-blue-700">© 2025 <a href="/" className="hover:underline">For Orange, By Orange™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-blue-700 dark:text-blue-700 sm:mt-0">
        <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        <li>
            <Link to="#" className="hover:underline me-4 md:me-6">Licensing</Link>
        </li>
        <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

    
  )
}

export default Footer