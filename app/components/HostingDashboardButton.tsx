"use client";

import { useFormStatus } from "react-dom";
import { openHostingDashboard } from "@/app/actions/hosting-dashboard";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="text-sm font-medium bg-emerald-800 text-white px-4 py-2 rounded-lg hover:bg-emerald-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Opening dashboard…" : "Hosting dashboard"}
    </button>
  );
}

export default function HostingDashboardButton() {
  return (
    <form action={openHostingDashboard}>
      <SubmitButton />
    </form>
  );
}
