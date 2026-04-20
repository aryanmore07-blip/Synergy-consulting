"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Briefcase, Award } from "lucide-react";

const teamMembers = [
    {
        name: "Rajesh Belgaonkar",
        location: "Pune, Maharashtra, India",
        specializations: [
            "Hydrogen Generation",
            "Hydrogen Fuel Stations",
            "Hydrogen Fuel Cell"
        ],
        experience: "25+ years",
        roleLine: "Marketing & Business Development",
        summary: "Seasoned marketing professional with extensive experience across diverse industrial sectors, specializing in emerging green technologies and strategic business development.",
        expertise: [
            {
                title: "Industry Experience",
                items: [
                    "Industrial chemicals",
                    "Refrigerant gases",
                    "Flavors and fragrances",
                    "Thermoplastic urethanes",
                    "Pharmaceutical propellants",
                    "Automobile lubricants",
                    "Industrial and specialty gases"
                ]
            },
            {
                title: "Key Achievements",
                items: [
                    "Conceptualized and established an independent manufacturing unit for industrial gases, driving innovation and industry growth",
                    "Successfully united competitors in industrial chemicals to create a cohesive collaborative body for mutual business benefits, sustaining the initiative for three years",
                    "Demonstrated strategic excellence in building collaborative relationships and fostering industry partnerships"
                ]
            },
            {
                title: "Regulatory Expertise",
                items: [
                    "Sales Tax",
                    "Excise",
                    "GST",
                    "Labor laws",
                    "Factory Act",
                    "Gas Cylinder Rules"
                ]
            },
            {
                title: "Current Focus Areas",
                items: [
                    "Biogas",
                    "BioCNG",
                    "Hydrogen",
                    "Hydrogen Fuel Stations",
                    "Fuel Cell businesses"
                ]
            }
        ],
        bio: "A forward-thinking industry leader with over 25 years of marketing experience, bringing deep expertise across a diverse range of industrial sectors. Throughout a distinguished career, has successfully worked with industrial chemicals, refrigerant gases, flavors and fragrances, thermoplastic urethanes, pharmaceutical propellants, automobile lubricants, and industrial and specialty gases. Notable for conceptualizing and establishing an independent manufacturing unit for industrial gases, demonstrating exceptional ability to drive innovation and growth.\n\nIn a unique accomplishment, successfully united competitors in the field of industrial chemicals, fostering a cohesive body for mutual business benefits that was sustained for three years, highlighting exceptional strategic skills in building collaborative relationships.\n\nPossesses comprehensive knowledge of key regulatory aspects including Sales Tax, Excise, GST, Labor laws, Factory Act, and Gas Cylinder Rules, ensuring compliance and operational excellence.\n\nAs a forward-thinker, constantly explores new business opportunities and avenues for growth. Currently actively engaged in emerging markets and technologies including Biogas, BioCNG, Hydrogen, Hydrogen Fuel Stations, and Fuel Cell businesses, aligning expertise with the forefront of industry innovation and driving businesses towards new horizons.",
    },
    {
        name: "Rajesh Parekh",
        location: "Pune, Maharashtra, India",
        specializations: [
            "Snacks & Mithai Manufacturing",
            "Production & Operations",
            "Food Business Consulting"
        ],
        experience: "45+ years",
        roleLine: "Food Production, Operations & Business Consulting",
        summary: "Seasoned food industry entrepreneur with over 45 years of hands-on experience in building and scaling a successful snacks, mithai, and dry fruits business.",
        expertise: [
            {
                title: "Industry Experience",
                items: [
                    "Founder of Bhavnagri, a trusted brand known for quality and consistency",
                    "Built and managed a well-recognized snacks, mithai, and dry fruits business",
                    "Led end-to-end operations including production, quality control, and distribution",
                    "Developed high-quality product lines with consistent taste and customer appeal"
                ]
            },
            {
                title: "Key Skills",
                items: [
                    "Food production and manufacturing",
                    "Mithai and namkeen expertise",
                    "Product development",
                    "Quality control and food safety",
                    "Supply chain and procurement",
                    "Team leadership and training",
                    "Cost optimization and budgeting",
                    "Vendor negotiation",
                    "Operations management"
                ]
            },
            {
                title: "Consulting Interests",
                items: [
                    "Setting up Namkeen and Mithai manufacturing units",
                    "Production process optimization",
                    "Quality control systems",
                    "Cost reduction strategies",
                    "Scaling food businesses"
                ]
            },
            {
                title: "Languages",
                items: [
                    "English",
                    "Hindi",
                    "Gujarati",
                    "Marathi"
                ]
            }
        ],
        bio: "Seasoned food industry entrepreneur with over 45 years of hands-on experience in building and scaling a successful snacks, mithai, and dry fruits business. Founder of Bhavnagri, a trusted brand known for quality, authenticity, and consistency.\n\nExpertise spans production management, product development, supply chain optimization, and business operations. Known for combining traditional taste with modern processes to drive growth and customer satisfaction.\n\nNow open to consulting and advisory roles in food manufacturing, helping businesses set up efficient production systems, improve quality, optimize costs, and scale sustainably.",
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                {/* Background gradient */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{
                        width: "800px",
                        height: "600px",
                        background: "radial-gradient(circle, rgba(181,148,47,0.05) 0%, transparent 70%)",
                        filter: "blur(80px)",
                    }}
                />

                <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <p className="label-mono section-tag mb-4">Our Experts</p>
                        <h1
                            className="font-heading mb-6"
                            style={{
                                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                                fontWeight: 300,
                                lineHeight: 1.1,
                            }}
                        >
                            Meet Our{" "}
                            <span className="text-gradient-gold" style={{ fontWeight: 600 }}>
                                Team
                            </span>
                        </h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "4rem" }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                            className="h-px mx-auto mb-8"
                            style={{ background: "var(--gold)" }}
                        />
                        <p
                            className="font-body text-base md:text-lg max-w-3xl mx-auto"
                            style={{ color: "var(--foreground-muted)", lineHeight: 1.85 }}
                        >
                            Industry leaders and technical experts driving green industrial transformation across India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="mb-16"
                        >
                            {/* Member Card */}
                            <div
                                className="relative overflow-hidden grain-overlay"
                                style={{
                                    background: "var(--surface-raised)",
                                    border: "1px solid var(--border)",
                                }}
                            >
                                {/* Top gold accent */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-1"
                                    style={{
                                        background: "linear-gradient(to right, transparent, var(--gold) 20%, var(--gold) 80%, transparent)",
                                        opacity: 0.7,
                                    }}
                                />

                                <div className="p-8 md:p-12">
                                    {/* Header */}
                                    <div className="mb-8">
                                        <h2
                                            className="font-heading text-gradient-gold mb-3"
                                            style={{
                                                fontSize: "clamp(2rem, 5vw, 3rem)",
                                                fontWeight: 500,
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            {member.name}
                                        </h2>

                                        <div className="flex flex-wrap gap-4 mb-4">
                                            <div className="flex items-center gap-2">
                                                <MapPin
                                                    size={16}
                                                    style={{ color: "var(--gold)" }}
                                                />
                                                <span
                                                    className="font-body text-sm"
                                                    style={{ color: "var(--foreground-muted)" }}
                                                >
                                                    {member.location}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Briefcase
                                                    size={16}
                                                    style={{ color: "var(--teal)" }}
                                                />
                                                <span
                                                    className="font-body text-sm"
                                                    style={{ color: "var(--foreground-muted)" }}
                                                >
                                                    {member.experience} in {member.roleLine}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Specializations */}
                                        <div className="flex flex-wrap gap-2">
                                            {member.specializations.map((spec, i) => (
                                                <span
                                                    key={i}
                                                    className="font-mono px-3 py-1.5"
                                                    style={{
                                                        fontSize: "0.7rem",
                                                        letterSpacing: "0.05em",
                                                        background: "var(--surface)",
                                                        color: "var(--gold)",
                                                        border: "1px solid var(--border)",
                                                        textTransform: "uppercase",
                                                    }}
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div
                                        className="h-px mb-8"
                                        style={{ background: "var(--border)" }}
                                    />

                                    {/* Summary */}
                                    <p
                                        className="font-body text-base mb-8"
                                        style={{
                                            color: "var(--foreground)",
                                            lineHeight: 1.85,
                                        }}
                                    >
                                        {member.summary}
                                    </p>

                                    {/* Detailed Bio */}
                                    <div className="mb-8">
                                        <h3
                                            className="font-heading text-xl mb-4"
                                            style={{ color: "var(--foreground)" }}
                                        >
                                            Professional Profile
                                        </h3>
                                        <p
                                            className="font-body text-sm"
                                            style={{
                                                color: "var(--foreground-muted)",
                                                lineHeight: 1.9,
                                                whiteSpace: "pre-line",
                                            }}
                                        >
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Expertise Grid */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {member.expertise.map((section, idx) => (
                                            <div
                                                key={idx}
                                                className="p-6"
                                                style={{
                                                    background: "var(--surface)",
                                                    border: "1px solid var(--border)",
                                                }}
                                            >
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Award
                                                        size={18}
                                                        style={{ color: "var(--teal)" }}
                                                    />
                                                    <h4
                                                        className="font-mono"
                                                        style={{
                                                            fontSize: "0.7rem",
                                                            letterSpacing: "0.1em",
                                                            color: "var(--teal)",
                                                            textTransform: "uppercase",
                                                        }}
                                                    >
                                                        {section.title}
                                                    </h4>
                                                </div>
                                                <ul className="space-y-2">
                                                    {section.items.map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="font-body text-sm flex items-start gap-2"
                                                            style={{ color: "var(--foreground-muted)" }}
                                                        >
                                                            <span
                                                                style={{
                                                                    color: "var(--gold)",
                                                                    marginTop: "0.35rem",
                                                                }}
                                                            >
                                                                •
                                                            </span>
                                                            <span style={{ lineHeight: 1.7 }}>
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-8 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
                                        <p
                                            className="font-body text-sm text-center"
                                            style={{ color: "var(--foreground-muted)", lineHeight: 1.85 }}
                                        >
                                            Connect to explore potential collaborations and industry insights in green technology and industrial transformation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
