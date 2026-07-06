import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showName?: boolean;
  size?: number;
  variant?: "light" | "dark";
}

/** iOS-style squircle radius (~22% of size) */
function squircleRadius(size: number) {
  return Math.round(size * 0.2237);
}

export function Logo({ className, showName = true, size = 40, variant = "dark" }: LogoProps) {
  const radius = squircleRadius(size);

  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <span
        className="relative block shrink-0 overflow-hidden leading-none"
        style={{ width: size, height: size, borderRadius: radius }}
      >
        <Image
          src="/logo/app_icon.png"
          alt={`${APP_NAME} logo`}
          fill
          className="object-cover"
          sizes={`${size}px`}
          priority
        />
      </span>
      {showName && (
        <span
          className={cn(
            "text-lg font-semibold leading-none",
            variant === "light" ? "text-white" : "text-brand-text",
          )}
        >
          {APP_NAME}
        </span>
      )}
    </Link>
  );
}
