import { clsx } from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={clsx("mx-auto max-w-[1440px] px-4 md:px-5", className)}>
      {children}
    </Component>
  );
}
