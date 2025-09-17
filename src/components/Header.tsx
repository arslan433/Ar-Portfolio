import Navbar, { DropMenu } from "./Navbar";
export default function Header() {
    return (
        <>
            <div className="w-[-webkit-fill-available] flex justify-between py-3 rounded-md ml-10 mr-5 max-sm:mx-3 backdrop-blur-sm fixed z-1 items-center">

                <div className="flex items-center gap-2 font-medium px-2">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-90 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="font-bold text-lg">Open to work</span>
                </div>

                <Navbar />
                <DropMenu />
            </div>
           
        </>
    )
}