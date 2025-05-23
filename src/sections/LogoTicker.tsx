"use client";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", image: "/images/quantum.svg" },
    { name: "Acme Corp", image: "/images/acme-corp.svg" },
    { name: "Echo Valley", image: "/images/echo-valley.svg" },
    { name: "Pulse", image: "/images/pulse.svg" },
    { name: "Outside", image: "/images/outside.svg" },
    { name: "Apex", image: "/images/apex.svg" },
    { name: "Celestial", image: "/images/celestial.svg" },
    { name: "Twice", image: "/images/twice.svg" },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Chosen by these market enterprises
                </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map((logo) => (
                                    <Image
                                        key={`${logo.name}-${i}`}
                                        src={logo.image}
                                        alt={logo.name}
                                        width={120}
                                        height={40}
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
