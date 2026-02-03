import { NAVIGATION_LINKS } from "@/configs/navigation"
import { NavbarLink } from "./navbarlink"

export function Navbar(){
    return (
        <nav className="fixed bottom-1/12 left-1/2 -translate-x-1/2 z-50 
        border-2 border-zinc-500
        rounded-xl px-6 py-3">
        <ul className="flex gap-6 mx-auto">
          {NAVIGATION_LINKS.map(link => (
            <li key={link.href}>
              <NavbarLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      </nav>
    )
}