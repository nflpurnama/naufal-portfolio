import Link from "next/link"

export function NavbarLink({ label, href }: { label: string, href: string }){
    return(
        <Link className="text-neutral-50" href={href}>{label}</Link>
    )
}