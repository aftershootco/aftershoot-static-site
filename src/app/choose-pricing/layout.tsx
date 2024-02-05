import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Culling and Editing App - Aftershoot",
  description:
    "Go from shoot to gallery in record time with Aftershoot. Enjoy exclusive event discount on all annual plans. This limited-time offer won’t last, so seize the savings while you can! ",
  // metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

type TLayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
