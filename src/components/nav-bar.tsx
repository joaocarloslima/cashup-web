import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "movimentações" | "categorias"
}

const links = [
    { label: "dashboard", href: "/dashboard" },
    { label: "movimentações", href: "/transactions" },
    { label: "categorias", href: "/categories" },
]

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-b-4 border-primary"

    return (
        <nav className="flex justify-between bg-slate-900 px-6 pt-6">
            <h1 className="text-2xl font-bold">CashUp</h1>
            <ul className="flex gap-12">
                {links.map(link =>
                    <li key={link.label} className={active === link.label ? classActive : ""}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                )}

            </ul>
            <img className="size-12 rounded-full" src="http://github.com/joaocarloslima.png" alt="avatar" />
        </nav>
    )
}