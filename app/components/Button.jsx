export default function Button({ children, href = "/free-assessment/", variant = "blue" }) {
  const styles =
    variant === "outline"
      ? "border border-black bg-white/20 text-black hover:bg-white"
      : variant === "dark"
        ? "bg-black text-white hover:bg-[#25334d]"
        : "bg-[#42587e] text-white hover:bg-[#31435f]";

  return (
    <a
      href={href}
      className={`inline-flex min-h-10 items-center justify-center rounded-[5px] px-6 py-2 text-sm font-bold transition ${styles}`}
    >
      {children}
    </a>
  );
}
