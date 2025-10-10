import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
    return (
        <div className="items-center justify-center max-md:hidden relative bottom-1">
            <Link href={'/'} id="link" className="mx-3 font-semibold p-2 dark:hover:bg-white/10 rounded-md transition-colors ">Overview</Link>
            <Link id="link" href={'/#about'} className="mx-3 font-semibold p-2 dark:hover:bg-white/10 rounded-md transition-colors">About</Link>
            <Link id="link" href={'/projects'} className="mx-3 font-semibold p-2 dark:hover:bg-white/10 rounded-md transition-colors">Projects</Link>
            <Link id="link" href={'#experience'} className="mx-3 font-semibold p-2 dark:hover:bg-white/10 rounded-md transition-colors ">Experience</Link>
            <Link id="link" href={'#contact'} className="mx-3 font-semibold p-2  dark:hover:bg-white/10 rounded-md transition-colors">Contact</Link>
            <span id="separator" className="border-l-green text-white/10">|</span>
            <ThemeToggle />
        </div>
    )
}
import { Menu, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropMenu() {
    return (
        <div className="min-md:hidden bg-black/10 rounded-md">

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline"><Menu /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-30 bg-black/10 backdrop-blur-md mr-3" align="start">
                    <Link href={'/#overview'}>
                        <DropdownMenuItem>Overview</DropdownMenuItem>
                    </Link>
                    <DropdownMenuGroup>
                        <Link href={'/#about'}>
                            <DropdownMenuItem>
                                About
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem>
                            Skills
                            {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                        </DropdownMenuItem>
                        <Link href={'/projects'}>
                            <DropdownMenuItem>
                                Projects
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem>
                            Contact
                            {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                        </DropdownMenuItem>

                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <Link target="_blank" href={'https://github.com/arslan433/'}>
                    <DropdownMenuItem>GitHub
                        <DropdownMenuShortcut><ExternalLink width={15} height={15} /></DropdownMenuShortcut>
                    </DropdownMenuItem>
                    </Link>
                    <Link target="_blank" href={'https://www.linkedin.com/in/arslan-m-b9426b35a/'}>
                    <DropdownMenuItem>Linkedin
                        <DropdownMenuShortcut><ExternalLink width={15} height={15} /></DropdownMenuShortcut>
                    </DropdownMenuItem>
                    </Link>
                    {/* <DropdownMenuSeparator /> */}
                    <div className="pb-2">
                        <ThemeToggle />

                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}


