"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"
import Link from "next/link"

// Navigation links array
const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl shadow-lg border border-white/20 rounded-3xl">
        <div className="relative flex h-16 items-center justify-between gap-4 px-4 md:px-6">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-64 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink href={link.href} className="py-1.5">
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            <Link href="#home" className="hover:opacity-80 transition-opacity">
              <Image
                src={`${process.env.NODE_ENV === 'production' ? '/Arkawell' : ''}/arkawell-logo-dark.png`}
                alt="Arkawell"
                width={160}
                height={48}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center - Desktop Navigation menu */}
          <div className="absolute left-1/2 -translate-x-1/2 max-md:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild>
                      <a
                        href={link.href}
                        className="text-black/60 hover:text-black py-1.5 px-3 font-medium text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>
          </div>

          {/* Right side - Contact Button */}
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="text-sm bg-black text-white hover:bg-black/90 hover:text-white">
              <a href="#contact" className="text-white">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  ) 
}

