import Header from "../../components/Header";
import { Eye } from 'lucide-react';
import Image from "next/image";


export default function Projects() {
    return (
        <>
            <Header />
            <div className="flex-1 justify-center text-center pt-15">
                <h3 className="text-3xl font-bold mb-3">Projects</h3>
                <div className="justify-items-center">
                    <p className="w-3/5 text-left max-sm:w-full px-2">
                        These are most of the projects I've done since I started programming, some of them are personal projects, freelance, work, practice or for other situation. If you want to see absolutely all my projects go to my
                    </p>
                </div>
                {/* Projects listing  */}
                <div className="justify-items-center px-2 mt-15 items-center">
                    <div className="border-1 h-full w-3/5 max-sm:w-full mb-2 pb-3 px-4" >
                        <div className="py-4 text-left">
                            <h4 className="font-semibold text-xl">Project Name Heading</h4>
                        </div>
                        <div>
                            <p className="text-left mb-2 leading-[normal]">These are most of the projects I've done since I started programming, some of them are personstarted programming, some of them are personstarted programming, some of them are personal projects, freelance, work,</p>
                        </div>
                        <div className="flex justify-between items-center max-sm:items-start flex-wrap max-sm:flex-col flex-row mt-2">
                            <div className="bg-white/15 px-2 py-1 max-sm:mb-4 rounded-xs">
                                <p className="font-[700] tracking-tighter uppercase text-xs font-sans">
                                    Javascript - React - Tailwind
                                </p>
                            </div>
                            <div className="flex justify-center items-end gap-5">
                                <p>
                                    <Image
                                        src="/assets/github.webp"
                                        alt="logo"
                                        width={30}
                                        height={30}
                                        id="imginvert" class="invert brightness-0"
                                    />
                                </p>
                                <p><Eye height={30} width={30} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}