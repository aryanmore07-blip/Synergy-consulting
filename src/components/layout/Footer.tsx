import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-secondary text-white py-12">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold font-heading uppercase tracking-widest">
                            Synergy
                        </h3>
                        <p className="text-sm text-gray-400">
                            Integrated industrial transformation partner for a sustainable future.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
                            Solutions
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Hydrogen & Clean Energy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Industrial Additives
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Waste-to-Energy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Food Technology
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
                            Connect
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary">
                                    Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Synergy Consulting & Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
