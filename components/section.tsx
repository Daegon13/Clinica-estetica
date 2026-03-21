import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, desc, className }: { eyebrow?: string; title: string; desc?: string; className?: string }) {
  return (
    <div className={cn("grid gap-2.5", className)}>
      {eyebrow ? <div className="text-xs font-bold uppercase tracking-[0.18em] text-cyanSoft-600 dark:text-cyanSoft-300">{eyebrow.toUpperCase()}</div> : null}
      <h1 className="text-balance text-2xl font-black tracking-tight sm:text-3xl lg:text-[2.1rem]">{title}</h1>
      {desc ? <p className="max-w-2xl text-sm leading-6 text-black/65 dark:text-white/70 sm:text-base">{desc}</p> : null}
    </div>
  );
}
