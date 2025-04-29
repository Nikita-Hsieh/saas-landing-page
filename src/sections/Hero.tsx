import Button from "@/components/Button";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    {/* Pointer */}
                    <div className="absolute left-56  top-96">
                        <Pointer name="Vic" />
                    </div>
                    <div className="absolute right-80 top-34">
                        <Pointer name="Bryan" color="red" />
                    </div>
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl  font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Boost productivity and streamline your workflow with our
                    intuitive, all-in-one SaaS platform for modern teams.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 "
                    />
                    <Button
                        variant="primary"
                        size="sm"
                        type="submit"
                        className="whitespace-nowrap"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
