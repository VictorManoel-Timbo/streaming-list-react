'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    { name: 'Home', href: '/', current: true },
    { name: 'Movies', href: '/movies', current: false },
    { name: 'Series', href: '/series', current: false }
]

export default function NavLinks(): JSX.Element {
    const pathname = usePathname();
    return (
        <div className="flex flex-col sm:flex-row sm:inline-flex sm:space-x-4 sm:mr-6 sm:space-y-0 sm:p-0 space-y-1 px-2 py-2">
            {
                links.map(link =>
                    <Link href={link.href} key={link.name} className={clsx(
                        'rounded-md px-3 py-2 text-base text-start sm:text-center font-medium text-gray-100 hover:bg-cyan-800 hover:text-white',
                        {
                            'bg-cyan-900 focus:bg-cyan-900 text-gray-100 hover:bg-cyan-800 hover:text-white': pathname === link.href,
                        },
                    )}>{link.name}</Link>
                )
            }
        </div>);
}
