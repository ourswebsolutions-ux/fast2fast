
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans antialiased bg-white">
        {/* Navbar hamesha top par rahega */}
        
        
        {/* Main page content center mein space lega */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer hamesha bottom par rahega */}
        
      </body>
    </html>
  );
}