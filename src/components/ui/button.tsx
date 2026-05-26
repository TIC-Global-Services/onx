import { clsx } from "clsx";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-onx-black text-onx-white hover:bg-onx-near-black transition-colors",
  secondary:
    "bg-onx-white text-onx-black border border-onx-black hover:bg-onx-light-gray transition-colors",
  link: "underline underline-offset-4 hover:text-onx-red transition-colors",
};

const baseClasses =
  "inline-flex items-center justify-center uppercase font-antonio tracking-wider";

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const classes = clsx(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
