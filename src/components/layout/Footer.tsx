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
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
    ],
    Connect: [
        { label: "LinkedIn", href: "#" },
        { label: "Twitter", href: "#" },
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

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
                {/* Large centered wordmark */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div
                            className="w-px h-12"
                            style={{ background: "linear-gradient(to bottom, transparent, var(--gold))" }}
                        />
                        <h2
                            className="font-heading text-gradient-gold"
                            style={{
                                fontSize: "clamp(3rem, 7vw, 6rem)",
                                fontWeight: 300,
                                letterSpacing: "0.2em",
                                lineHeight: 1,
                                textTransform: "uppercase",
                            }}
                        >
                            Synergy
                        </h2>
                        <div
                            className="w-px h-12"
                            style={{ background: "linear-gradient(to bottom, transparent, var(--gold))" }}
                        />
                    </div>
                    <p
                        className="font-mono mx-auto"
                        style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "var(--foreground-muted)", textTransform: "uppercase" }}
                    >
                        Consulting & Solutions · Green Industrial Transformation
                    </p>
                </div>

                {/* Thin separator */}
                <div
                    className="w-full h-px mb-16"
                    style={{ background: "var(--border)" }}
                />

                {/* Link columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                    {/* Tagline column */}
                    <div>
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
                        <div key={section}>
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
                                            className="group font-body text-sm relative inline-flex"
                                            style={{ color: "var(--foreground-muted)" }}
                                        >
                                            <span className="transition-colors duration-200 group-hover:text-white">
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
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
                    style={{ borderColor: "var(--border)" }}
                >
                    <p
                        className="font-mono"
                        style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "var(--foreground-muted)", textTransform: "uppercase" }}
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
                            style={{ fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--teal)", textTransform: "uppercase" }}
                        >
                            Committed to Green Industry
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
