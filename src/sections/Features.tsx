"use client";
import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import { useEffect, useState } from "react";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

function InteractiveVideo() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <video
            src="/images/prototyping.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        />
    );
}

export default function Features() {
    return (
        <section className="py-24 relative">
            <div className="container">
                <div className="flex justify-center ">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Real Time Collaboration"
                        description=" Work together seamlessly with conflict-free team
                                editing"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar1"
                                    className="rounded-full"
                                    width={120}
                                    style={{ height: "auto" }}
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-600 z-30">
                                <Image
                                    src={avatar2}
                                    alt="avatar2"
                                    className="rounded-full"
                                    width={120}
                                    style={{ height: "auto" }}
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-400 z-20">
                                <Image
                                    src={avatar3}
                                    alt="avatar3"
                                    className="rounded-full"
                                    width={120}
                                    style={{ height: "auto" }}
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="size-full items-center justify-center bg-neutral-700 rounded-full inline-flex gap-1 relative">
                                    <Image
                                        src={avatar4}
                                        alt="avatar 4"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                        width={120}
                                        style={{ height: "auto" }}
                                    />{" "}
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="size-1.5 rounded-full bg-white"
                                        />
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that react with user's action"
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video relative flex items-center justify-center group overflow-hidden">
                            <InteractiveVideo />
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center relative z-10">
                                We&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "}
                                growth this year!
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description=" Powerful commands to help you create design more
                                quickly."
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4 ">
                            <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">
                                shift
                            </Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-150">
                                alt
                            </Key>
                            <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-300">
                                c
                            </Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center ">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="group bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 "
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 inline-flex justify-center items-center rounded-full text-xl group-hover:rotate-45 transition rotate-0">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
