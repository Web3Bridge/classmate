'use client'
import { navLinks } from "@/utils/NavLinks"
import Logo from "./Logo"
import MaxWrapper from "./MaxWrapper"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { MobileNavToggler } from "./MobileNavToggler"
import { usePathname } from "next/navigation"
import { useScroll, useSpring, motion } from "framer-motion"


const OnboardingHeader = () => {

    const pathname = usePathname();
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <header className="w-full">
            <div className="fixed top-0 inset-x-0 z-50 w-full bg-white h-20 lg:px-8 md:px-4 shadow-sm">
                <MaxWrapper className="h-full w-full flex items-center justify-between">
                    <Logo />

                    <div className="hidden md:flex h-full items-stretch justify-center">
                        {navLinks.map((link, _key) => (
                            <Link
                                href={link.href}
                                key={_key}
                                className={cn(
                                    "text-base overflow-hidden relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-color1  before:transition-all before:duration-200 text-color2 before:-z-10  flex justify-center items-center px-6 transition",
                                    {
                                        "before:h-full text-white": link.href == pathname,
                                        "hover:before:h-full hover:text-white":
                                            link.href != pathname,
                                    }
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center justify-end gap-3">
                        <Button
                            type="button"
                            className="text-white bg-color1 hover:bg-color2 flex items-center gap-1"
                        >
                            Connect Wallet
                        </Button>

                        <div className="md:hidden">
                            <MobileNavToggler />
                        </div>
                    </div>
                </MaxWrapper>
            </div>
            <motion.div
                className="fixed top-20 left-0 right-0 bg-color1 origin-[0%] h-[5px] z-[42]"
                style={{ scaleX }}
            />
        </header>
    )
}

export default OnboardingHeader