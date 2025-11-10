'use client';

import {
  User,
  FolderOpen,
  Github,
  Linkedin,
  MessageCircle,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const navItems = [
  { label: 'About',    href: '/#about',    icon: User },
  { label: 'Projects', href: '/projects', icon: FolderOpen },
  { label: 'CV',       href: '/cv.pdf',   external: true, icon: FileText },
  { label: 'GitHub',   href: 'https://github.com/arslan433/',   external: true, icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arslan-m-b9426b35a/', external: true, icon: Linkedin },
  { label: 'WhatsApp', href: 'https://wa.me/923474875097',      external: true, icon: MessageCircle },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="flex  border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-6 ">
        <nav className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm ">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = !item.external && pathname === item.href;

            const linkContent = (
              <div
                className={clsx(
                  'flex px-10 items-center gap-2 transition-all duration-300',
                  isActive
                    ? ''
                    : ' hover:translate-y-[-2px]'
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            );

            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                {linkContent}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-gray-500"></span>
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="group">
                {linkContent}
                <span
                  className={clsx(
                    'block max-w-0 group-hover:max-w-full transition-all duration-300 h-px',
                    isActive ? 'bg-white max-w-full' : 'bg-gray-500'
                  )}
                ></span>
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}