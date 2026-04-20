"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#solutions", label: "Solutions" },
    { href: "/#industries", label: "Industries" },
    { href: "/#about", label: "About" },
    { href: "/team", label: "Team" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/85 backdrop-blur-xl border-b"
                : "bg-transparent"
                }`}
            style={{
                borderColor: scrolled ? "rgba(0,0,0,0.06)" : "transparent",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 min-[1025px]:px-2">
                <div className="flex min-h-20 items-center justify-between py-2 min-[1025px]:h-20 min-[1025px]:py-0">
                    {/* Logo */}
                    <Link href="/" className="group flex min-w-0 flex-1 items-center gap-2 sm:gap-3 min-[1025px]:flex-none">
                        <div
                            className="h-8 w-8 shrink-0 border transition-all duration-300 group-hover:rotate-45"
                            style={{
                                borderColor: "var(--gold)",
                                background: "var(--gold-dim)",
                            }}
                        />
                        <span
                            className="font-heading text-lg font-semibold uppercase leading-tight tracking-[0.2em] whitespace-normal max-w-[15rem] sm:max-w-[22rem] min-[1025px]:max-w-none min-[1025px]:whitespace-nowrap"
                            style={{ color: "var(--foreground)", letterSpacing: "0.25em" }}
                        >
                            Synergy Consultency & Solutions
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden min-[1025px]:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-sm font-body tracking-widest uppercase group"
                                style={{ color: "var(--foreground-muted)", fontSize: "0.72rem" }}
                            >
                                {link.label}
                                <span
                                    className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                                    style={{ background: "var(--gold)" }}
                                />
                            </Link>
                        ))}
                        <a href="/#about" className="btn-gold ml-4">
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="p-2 shrink-0 min-[1025px]:hidden"
                        style={{ color: "var(--foreground-muted)" }}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t overflow-hidden min-[1025px]:hidden"
                        style={{
                            background: "rgba(255,255,255,0.97)",
                            borderColor: "var(--border)",
                        }}
                    >
                        <div className="px-5 sm:px-6 py-6 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm tracking-widest uppercase transition-colors duration-200 py-1"
                                    style={{ color: "var(--foreground-muted)", fontSize: "0.72rem" }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a href="/#about" className="btn-gold text-center">
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
