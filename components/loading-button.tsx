"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "@/components/spinner";

type LoadingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  loadingLabel?: string;
  children: ReactNode;
};

export function LoadingButton({
  loading = false,
  loadingLabel = "Loading",
  children,
  className = "",
  disabled,
  type = "button",
  ...props
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading}
      className={`inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {loading && <Spinner className="h-4 w-4" label={loadingLabel} />}
      <span>{loading ? loadingLabel : children}</span>
    </button>
  );
}
