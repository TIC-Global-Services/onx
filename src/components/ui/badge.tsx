import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center bg-onx-red px-4 py-1 text-badge uppercase text-onx-white",
        className
      )}
    >
      {children}
    </span>
  );
}
