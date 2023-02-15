interface ButtonProps {
  href?: string;
  children?: string;
  color: "primary" | "secondary";
  blank?: boolean;
}

export function Anchor({ href, children, color, blank }: ButtonProps) {
  const colorSchema =
    color === "primary" ? "bg-black text-white" : "bg-white text-black";

  return (
    <a
      target={blank ? "_blank" : ""}
      href={href}
      className={`${colorSchema} border-black inline-block cursor-pointer hover:-translate-y-1 hover:shadow-2xl border-2 py-2 w-40 text-center rounded-md transition-all`}
    >
      {children}
    </a>
  );
}
