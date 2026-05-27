import { openHostingDashboard } from "@/app/actions/hosting-dashboard";

export default async function SsoContinuePage() {
  await openHostingDashboard();
}
