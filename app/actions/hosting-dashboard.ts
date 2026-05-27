"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  buildSsoRedirectUrl,
  createSsoToken,
  syncUserToHosting,
} from "@/lib/sso";

const SSO_CONTINUE_PATH = "/sso-continue";

export async function openHostingDashboard() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) {
    return redirectToSignIn({ returnBackUrl: SSO_CONTINUE_PATH });
  }

  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;
  const name =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") || "User";

  if (!email) {
    throw new Error("A verified email is required to open the hosting dashboard.");
  }

  await syncUserToHosting({ clerkId: userId, name, email });

  const token = createSsoToken(userId, email);
  redirect(buildSsoRedirectUrl(token));
}
