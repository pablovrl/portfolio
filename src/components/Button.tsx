interface ButtonProps {
  children?: string;
  color: "primary" | "secondary";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  color,
  fullWidth,
  disabled,
  onClick,
}: ButtonProps) {
  const colorSchema =
    color === "primary" ? "bg-black text-white" : "bg-white text-black";
  const width = fullWidth ? "w-full" : "w-40";
  const style = disabled
    ? "shadow-none bg-gray-100 text-gray-300 border-gray-100 cursor-default"
    : "border-black inline-block cursor-pointer hover:-translate-y-1 hover:shadow-2xl transition-all";

  return (
    <button
      onClick={onClick}
      className={`${colorSchema} ${width} ${style} border-2 py-2 text-center rounded-md`}
    >
      {children}
    </button>
  );
}
