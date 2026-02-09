
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100">
        <div className="flex">
          <Sidebar />
          <main className="ml-64 w-full p-6 bg-gray-900 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

