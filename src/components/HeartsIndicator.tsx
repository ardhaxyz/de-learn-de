"use client";

import { Heart } from "lucide-react";

interface HeartsIndicatorProps {
  hearts: number;
  maxHearts?: number;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function HeartsIndicator({
  hearts,
  maxHearts = 3,
  size = "md",
  showText = false,
}: HeartsIndicatorProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxHearts }).map((_, index) => (
          <Heart
            key={index}
            className={`${sizeClasses[size]} ${
              index < hearts
                ? "fill-red-500 text-red-500"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-medium text-gray-600 ml-1`}>
          {hearts}/{maxHearts}
        </span>
      )}
    </div>
  );
}
