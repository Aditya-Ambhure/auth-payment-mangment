type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full bg-black text-white p-2 rounded hover:opacity-90"
    >
      {children}
    </button>
  );
}
