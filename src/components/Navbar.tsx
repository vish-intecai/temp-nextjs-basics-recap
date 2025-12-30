import { information, navLinks } from '@/lib/constants'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-bold text-gray-800 tracking-wide">{information.projectName}</div>
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-1 rounded transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
