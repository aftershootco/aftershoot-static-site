"use client";

type TLayout = {
  children: React.ReactNode;
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  title: "Aftershoot marketing";
}) {
  return <div>{children}</div>;
}
