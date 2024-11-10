import Link from "next/link";

export default function Header() {
  return (
    <header className="flex-justify-between  p-8 md:p-4  ">
      
      
      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-x-6 text-2xl ">
          <li>
            <Link href="/home" className="text-teal-400 hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/About" className="text-teal-400 hover:text-blue-400">About</Link>
          </li>
          <li> 
            <Link href="/contact" className="text-teal-400 hover:text-blue-400">Contact</Link>
          </li>
          
        </ul>

      </nav>
    </header>
  );
}

