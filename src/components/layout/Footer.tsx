import Link from "next/link";

const footerLinks = {
    Solutions: [
        { label: "Hydrogen & Clean Energy", href: "/solutions/hydrogen" },
        { label: "Industrial Additives", href: "/solutions/additives" },
        { label: "Waste-to-Energy", href: "/solutions/waste-to-energy" },
        { label: "Food Technology", href: "/solutions/food-tech" },
    ],
    Company: [
        { label: "About Us", href: "/#about" },
        { label: "Our Team", href: "/team" },
    ],
    Connect: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/rajesh-belgaonkar-9ab6846/" },
    ],
};

export function Footer() {
    return (
        <footer
            className="relative overflow-hidden grain-overlay"
            style={{ background: "var(--surface)", color: "var(--foreground)" }}
        >
            {/* Gold top border gradient */}
            <div
                className="w-full h-px"
                style={{
                    background: "linear-gradient(to right, transparent, var(--gold) 20%, var(--gold) 80%, transparent)",
                    opacity: 0.5,
                }}
            />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-14 md:py-20">
                {/* Large centered wordmark */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4">
                        <div
                            className="hidden sm:block w-px h-8 md:h-12"
                            style={{ background: "linear-gradient(to bottom, transparent, var(--gold))" }}
                        />
                        <h2
                            className="font-heading text-gradient-gold"
                            style={{
                                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                                fontWeight: 300,
                                letterSpacing: "0.2em",
                                lineHeight: 1,
                                textTransform: "uppercase",
                            }}
                        >
                            Synergy
                        </h2>
                        <div
                            className="hidden sm:block w-px h-8 md:h-12"
                            style={{ background: "linear-gradient(to bottom, transparent, var(--gold))" }}
                        />
                    </div>
                    <p
                        className="font-mono mx-auto px-4"
                        style={{ fontSize: "clamp(0.55rem, 1.5vw, 0.65rem)", letterSpacing: "0.2em", color: "var(--foreground-muted)", textTransform: "uppercase" }}
                    >
                        Consulting & Solutions · Green Industrial Transformation
                    </p>
                </div>

                {/* Thin separator */}
                <div className="w-full h-px mb-10 md:mb-16" style={{ background: "var(--border)" }} />

                {/* Link columns — 2 cols on mobile, 4 on md */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
                    {/* Tagline column — hidden on mobile to save space */}
                    <div className="hidden md:block">
                        <p
                            className="font-mono mb-4"
                            style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--gold)", textTransform: "uppercase" }}
                        >
                            Our Promise
                        </p>
                        <p
                            className="font-body text-sm"
                            style={{ color: "var(--foreground-muted)", lineHeight: 1.85 }}
                        >
                            Integrated industrial transformation — scalable, sustainable, and future-ready.
                        </p>
                    </div>

                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section} className="min-w-0">
                            <p
                                className="font-mono mb-4"
                                style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--gold)", textTransform: "uppercase" }}
                            >
                                {section}
                            </p>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="group font-body text-sm relative block w-full"
                                            style={{ color: "var(--foreground-muted)" }}
                                        >
                                            <span className="block break-words transition-colors duration-200 group-hover:text-foreground">
                                                {link.label}
                                            </span>
                                            <span
                                                className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                                                style={{ background: "var(--gold)" }}
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t text-center sm:text-left"
                    style={{ borderColor: "var(--border)" }}
                >
                    <p
                        className="font-mono"
                        style={{ fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--foreground-muted)", textTransform: "uppercase" }}
                    >
                        © {new Date().getFullYear()} Synergy Consulting & Solutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <div
                            className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
                            style={{ background: "var(--teal)" }}
                        />
                        <span
                            className="font-mono"
                            style={{ fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--teal)", textTransform: "uppercase" }}
                        >
                            Committed to Green Industry
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
