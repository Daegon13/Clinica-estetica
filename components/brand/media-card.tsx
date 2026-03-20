import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaCardProps = {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  aspectClassName?: string;
  overlay?: "light" | "dark" | "none";
};

export function MediaCard({
  src,
  alt,
  eyebrow,
  title,
  description,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw",
  aspectClassName = "aspect-[4/3]",
  overlay = "light"
}: MediaCardProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-soft dark:border-white/10 dark:bg-graphite-900", className)}>
      <div className={cn("relative w-full", aspectClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover transition duration-500 group-hover:scale-[1.03]", imageClassName)}
        />
        {overlay !== "none" ? (
          <div
            className={cn(
              "pointer-events-none absolute inset-0",
              overlay === "dark"
                ? "bg-gradient-to-t from-graphite-950/72 via-graphite-950/10 to-white/15"
                : "bg-gradient-to-t from-white/82 via-white/10 to-transparent"
            )}
          />
        ) : null}
        {eyebrow || title || description ? (
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="max-w-md rounded-3xl border border-white/60 bg-white/78 p-4 shadow-soft backdrop-blur dark:border-white/15 dark:bg-graphite-950/70">
              {eyebrow ? <div className="text-[11px] font-black uppercase tracking-[0.22em] text-black/45 dark:text-white/45">{eyebrow}</div> : null}
              {title ? <div className="mt-1 text-lg font-black tracking-tight text-graphite-950 dark:text-white">{title}</div> : null}
              {description ? <p className="mt-2 text-sm leading-6 text-black/65 dark:text-white/70">{description}</p> : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
