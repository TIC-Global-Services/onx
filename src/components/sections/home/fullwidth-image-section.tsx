import { clsx } from "clsx";

interface FullwidthImageSectionProps {
  /** Alt text / placeholder label */
  alt: string;
  /** Image source path — renders placeholder if omitted */
  src?: string;
  /** CSS aspect-ratio value, e.g. "16/7" */
  aspectRatio?: string;
  /** Use dark background (default true) */
  dark?: boolean;
  className?: string;
  /** Custom classes for the image itself */
  imageClassName?: string;
}

export function FullwidthImageSection({
  alt,
  src,
  aspectRatio = "16/7",
  dark = true,
  className,
  imageClassName,
}: FullwidthImageSectionProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden",
        dark ? "bg-onx-near-black" : "bg-onx-warm-light",
        className,
      )}
    >
      <div
        className="w-full flex items-center justify-center min-h-[100vh] md:min-h-0"
        style={{ aspectRatio }}
      >
        {src ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={src} alt={alt} className={clsx("w-full h-full object-cover", imageClassName)} />
        ) : (
          <span
            className={clsx(
              "text-xs uppercase tracking-[0.25em]",
              dark ? "text-white/12" : "text-onx-near-black/12",
            )}
          >
            {alt}
          </span>
        )}
      </div>
    </section>
  );
}
