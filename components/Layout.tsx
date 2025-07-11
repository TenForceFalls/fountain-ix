"use client"

import { Network } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const getActiveSection = () => {
        if (pathname === "/") return "overview"
        if (pathname === "/policies") return "policies"
        if (pathname === "/members") return "members"
        if (pathname === "/contact") return "contact"
        if (pathname === "/signup") return "signup"
        return "overview"
    }

    const activeSection = getActiveSection()

    return (
        <div className="min-h-screen bg-black">
            {/* Header */}
            <header className="relative z-10 border-b border-blue-500/20 bg-black/90 backdrop-blur-md">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="relative">
                                <Network className="h-8 w-8 text-blue-400" />
                                <div className="absolute -top-1 -right-1 h-3 w-3 bg-blue-500 rounded-full animate-pulse" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    FOUNTAIN-IX
                                </h1>
                                <p className="text-sm text-slate-400">
                                    Internet Exchange Point
                                </p>
                            </div>
                        </Link>
                        <nav className="hidden md:flex space-x-6">
                            {[
                                { name: "overview", href: "/" },
                                { name: "policies", href: "/policies" },
                                { name: "members", href: "/members" },
                                { name: "contact", href: "/contact" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.name
                                            ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                                            : "text-slate-300 hover:text-blue-300 hover:bg-slate-800/50"
                                        }`}
                                >
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <main className="relative z-10 container mx-auto px-4 py-8 pb-32">
                {children}
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 z-10 border-t border-blue-500/20 bg-black/90 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <Network className="h-5 w-5 text-blue-400" />
                            <span className="text-slate-300">© 2025 FOUNTAIN-IX</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-400">A service of</span>
                            <a
                                href="https://nova86.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                Nova86-LLC
                            </a>
                        </div>
                        <div className="text-slate-400 text-sm">AS55287</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}