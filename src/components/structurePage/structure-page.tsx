'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Card from "./card";
import { FaHeartBroken } from "react-icons/fa";
import clsx from "clsx";
import { Streamings } from "@/models/streamings";

export default function StructurePage({ streamings }: { streamings: Streamings[] }) {
    const pathname = usePathname();

    function Cards() {
        return (
            <>
                {
                    streamings.map((streaming) => (
                        <section className="inline-block m-8 text-center" key={streaming.id}>
                            <div className="transform transition duration-500 scale-95 hover:scale-100 cursor-pointer">
                                <Link href={"/detail"}>
                                    <Card streaming={streaming} />
                                </Link>
                            </div>
                            <div className={clsx("w-[304px] flex justify-center",
                                {
                                    "hidden": pathname !== '/favorites'
                                }
                            )}>
                                <button className="rounded-full w-6 h-6 flex justify-center items-center bg-neutral-100 text-black hover:text-red-700 outline-none hover:ring-2 hover:ring-neutral-500 ring-offset-2 ring-offset-gray-800 my-6 transition duration-300 hover:scale-125" >
                                    <FaHeartBroken />
                                </button>
                            </div>
                        </section>
                    ))
                }
            </>
        );
    }

    return (
        <main className="text-center inline-flex min-h-screen min-w-full justify-center flex-wrap p-8 overflow-hidden">
            <Cards />
        </main>
    );
}