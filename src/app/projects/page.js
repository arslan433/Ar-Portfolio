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
                    <div className="border-1 h-[190px] max-sm:h-auto w-3/5 max-sm:w-full mb-2 pb-3" >
                        <div className="float-left p-4">
                            <h4 className="font-semibold">Project Name Heading</h4>
                        </div>
                        <div>
                            <p className="float-left text-left px-4 mb-2">These are most of the projects I've done since I started programming, some of them are personstarted programming, some of them are personstarted programming, some of them are personal projects, freelance, work,</p>

                        </div>
                        <div className="float-right flex gap-4 px-2 m-2">
                            <p>
                                <Image
                                    src="/assets/github.webp"
                                    alt="logo"
                                    width={30}
                                    height={30}
                                />
                            </p>
                            <p><Eye height={30} width={30}/></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}