import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a192f] text-[#e6f1ff]">
        {children}
      </body>
    </html>
  );
}
