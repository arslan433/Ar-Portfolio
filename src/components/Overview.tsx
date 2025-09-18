import Image from "next/image";
import Header from "./Header";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";
export default function Overview() {
    return (
        <>
            <Header />
            <div id="overview" className="flex max-sm:mx-3 justify-center ">
                <div className="flex flex-col mt-20">
                    <div className="max-w-sm rounded-md bg-whte/10 p-5 backdirop-blur-md text-center items-center" id="">
                        <div className="justify-items-center">
                            <h1 id="overview" className="text-3xl font-bold pb-4 max-sm:w-[307px]"> Hi, I am <i>Arslan.M</i> </h1>
                            <Image
                                src="/assets/profile.png"
                                alt="profile"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-2xl font-bold mt-2 p-4">The Full Stack Developer</h2>
                        </div>
                        <DropdownMenuSeparator />
                        {/* Expertises section */}
                        <div className="justify-items-center">
                            <h3 className="text-xl font-semibold pb-3">Expertise in</h3>
                            <div className="flex max-sm:flex-wrap max-sm:justify-center">
                                <div className="p-2 justify-items-center">
                                    <Image
                                        src="/assets/react.webp"
                                        alt="logo"
                                        width={40}
                                        height={40}
                                    />
                                    <h4>React</h4>
                                </div>
                                <div className="p-2 justify-items-center">
                                    <Image
                                        src="/assets/next.webp"
                                        alt="logo"
                                        width={40}
                                        height={40}
                                        className="invert brightness-0"
                                        id="imginvert"
                                    />
                                    <h4>Next.js</h4>
                                </div>
                                <div className="p-2 justify-items-center">
                                    <Image
                                        src="/assets/laravel.webp"
                                        alt="logo"
                                        width={40}
                                        height={40}
                                    />
                                    <h4>Laravel</h4>
                                </div>
                                <div className="p-2 justify-items-center">
                                    <Image
                                        src="/assets/firebase.webp"
                                        alt="logo"
                                        width={40}
                                        height={40}
                                    />
                                    <h4>Firebase</h4>
                                </div>
                                <div className="p-2 justify-items-center mt-3 max-sm:mt-0">
                                    <Image
                                        src="/assets/sql.webp"
                                        alt="logo"
                                        width={40}
                                        height={40}
                                        className="invert brightness-0"
                                        id="imginvert"
                                    />
                                    <h4>SQL</h4>
                                </div>
                                <div className="p-2 justify-items-center">
                                    <Image
                                        src="/assets/tailwind.webp"
                                        alt="logo"
                                        width={40}
                                        height={40}
                                    />
                                    <h4>Tailwind</h4>
                                </div>

                                <div className="p-2 justify-items-center">
                                    <Image
                                        src="/assets/bootstrap.webp"
                                        alt="logo"
                                        width={40}
                                        height={40}
                                    />
                                    <h4>Bootstrap</h4>
                                </div>
                                <div className="p-2 justify-items-center">
                                    <Image
                                        src="/assets/wordpress.webp"
                                        alt="logo"
                                        width={40}
                                        height={40}
                                    />
                                    <h4>Wordpress</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="about" className="justify-content-center justify-items-center">
                <div className="w-3/5 max-sm:w-[95%] max-sm:px-2">
                    <h2 className="text-3xl font-bold text-center mb-3 pt-15">About me</h2>
                    <div className="">
                        <p className="text-left">I am a passionate full stack developer who loves building web applications that are simple, fast, and user-friendly. I enjoy learning something new every day and improving my skills to create better solutions. Working with a team excites me because I believe in growth through communication, trust, and teamwork. I also believe that every problem has a solution, and with focus and consistency, success can always be achieved.</p>
                    </div>
                </div>
            </section>
        </>
    )
}