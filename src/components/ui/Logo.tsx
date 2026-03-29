interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LS Logo"
    >
      {/* Quadrado de fundo */}
      <rect x="0.75" y="0.75" width="38.5" height="38.5" stroke="currentColor" strokeWidth="1.5" />

      {/* Letra L */}
      <path
        d="M8 10 L8 30 L16 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letra S */}
      <path
        d="M24 13 C24 11 25.5 10 28 10 C30.5 10 32 11.5 32 13.5 C32 15.5 30 16.8 28 18 C26 19.2 24 20.5 24 22.5 C24 24.5 25.5 26 28 26 C30.5 26 32 24.5 32 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Ponto decorativo — canto inferior direito interno */}
      <circle cx="35" cy="35" r="1.5" fill="currentColor" />
    </svg>
  );
}
