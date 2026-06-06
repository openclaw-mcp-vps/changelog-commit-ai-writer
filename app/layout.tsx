import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogAI — AI writes changelogs from Git commits",
  description: "Connect your GitHub or GitLab repo, let AI analyze commits, and get polished changelog entries in seconds. Built for product managers and engineering teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4e5dac94-8ffb-4b38-b25b-7279af01555a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
