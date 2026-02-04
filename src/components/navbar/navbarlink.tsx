import Link from "next/link"

export function NavbarLink({ label, href }: { label: string, href: string }){
    return(
        <Link className="px-6 py-3 block text-neutral-50 hover:bg-neutral-500 hover:text-black rounded-md" href={href}>{label}</Link>
    )
}