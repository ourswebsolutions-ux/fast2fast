// src/components/layouts/GridLayout.tsx
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function GridLayout({ children, className }: GridLayoutProps) {
  return (
    // yahan se min-h-screen aur unnecessary centering nikaal di hai
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-12">
        {children}
      </div>
    </div>
  );
}