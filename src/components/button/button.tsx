import Link from "next/link"
import { ReactNode } from "react"

export function Button({children, href}: {children: ReactNode, href: string}){
    return (
        <Link
            href={href}
            className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-black text-white text-sm font-medium transition-colors hover:bg-zinc-800 border border-zinc-500"
        >
            {children}
        </Link>
    )
}