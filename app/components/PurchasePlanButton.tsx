"use client";

import { useFormStatus } from "react-dom";
import { openHostingDashboard } from "@/app/actions/hosting-dashboard";

type PurchasePlanButtonProps = {
  children: React.ReactNode;
  className?: string;
};

function SubmitButton({ children, className }: PurchasePlanButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={className}
    >
      {pending ? "Redirecting…" : children}
    </button>
  );
}

export default function PurchasePlanButton({
  children,
  className,
}: PurchasePlanButtonProps) {
  return (
    <form action={openHostingDashboard} className="w-full">
      <SubmitButton className={className}>{children}</SubmitButton>
    </form>
  );
}
