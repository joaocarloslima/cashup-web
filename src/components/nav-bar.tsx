import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "movimentações" | "categorias"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const activeClass = "border-b-4 border-primary pb-2"

    const links = [
        { text: "dashboard", href: "/dashboard" },
        { text: "movimentações", href: "/transactions" },
        { text: "categorias", href: "/categories" },
    ]

    return (
        <nav className="flex justify-between items-center bg-slate-900 p-6">
            <h1 className="text-3xl font-bold">CashUp</h1>
            <ul className="flex gap-4">
                {links.map(link =>
                    <li key={link.text} className={active === link.text ? activeClass : ""}>
                        <Link href={link.href}>{link.text}</Link>
                    </li>
                )}

            </ul>
            <img className="size-12 rounded-full" src="http://github.com/joaocarloslima.png" alt="" />
        </nav>
    )
}