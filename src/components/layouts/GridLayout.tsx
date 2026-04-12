// src/components/layouts/GridLayout.tsx
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function GridLayout({ children, className }: GridLayoutProps) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-12",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}