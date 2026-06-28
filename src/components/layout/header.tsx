import { ShoppingBag, User, Heart } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MobileMenu } from "./mobile-menu";

interface HeaderProps {
  dark?: boolean;
  absolute?: boolean;
  isHome?: boolean;
}

export function Header({ dark = false, absolute = false, isHome = false }: HeaderProps) {
  const textColor = dark ? "text-onx-white" : "text-onx-near-black";
  const hoverColor = dark ? "hover:text-onx-red" : "hover:text-onx-red";

  return (
    <header className={`h-[78px] bg-transparent z-50 ${absolute ? 'absolute top-0 left-0 w-full' : 'relative'}`}>
      <Container className="flex h-full items-center justify-between">
        {/* Left side: Menu trigger */}
        <div className="flex-1 flex items-center justify-start">
          <MobileMenu dark={dark} />
        </div>

        {/* Center: ONX Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-center">
            <img src={isHome ? "/images/arc-and-bore-enhanced.png" : "/images/arc and bore logo white.png"} alt="Arc & Bore Logo" className="h-32 md:h-40 w-auto object-contain translate-y-1" />
          </Link>
        </div>

        {/* Right side: Icon group */}
        <div className="flex-1 flex items-center justify-end gap-5">
          <Link
            href="/account"
            className={`${textColor} ${hoverColor} transition-colors`}
            aria-label="Account"
          >
            <User size={16} strokeWidth={1.5} />
          </Link>
          <Link
            href="/cart"
            className={`${textColor} ${hoverColor} transition-colors`}
            aria-label="Cart"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
          </Link>
          <Link
            href="/wishlist"
            className={`${textColor} ${hoverColor} transition-colors`}
            aria-label="Wishlist"
          >
            <Heart size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </Container>
    </header>
  );
}
