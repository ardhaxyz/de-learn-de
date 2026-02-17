"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Info } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Beranda', icon: Home, href: '/' },
    { label: 'Belajar', icon: BookOpen, href: '/learn' },
    { label: 'About', icon: Info, href: '/about' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center h-16 pb-safe bottom-nav-shadow z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href === '/learn' && pathname.startsWith('/day'));
        const Icon = item.icon;
        
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              isActive ? 'text-de-red' : 'text-gray-400'
            }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] mt-1 font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
