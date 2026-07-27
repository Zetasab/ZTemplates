export function BrandMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-4 w-4";
  const text =
    size === "sm" ? "text-lg" : size === "lg" ? "text-3xl md:text-4xl" : "text-2xl";
  return (
    <div className="flex items-center gap-2 select-none">
      <div className={`${dim} bg-primary`} aria-hidden />
      <span className={`${text} font-display leading-none tracking-tighter`}>
        NEONIC
      </span>
    </div>
  );
}