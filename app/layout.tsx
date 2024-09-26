import "./globals.css";
import "flowbite/dist/flowbite.css"; //import Flowbite CSS
import "tailwindcss/tailwind.css"; //import Tailwind CSS

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto max-w-screen-xl sm:w-11/12 md:w-5/6 lg:w-3/4 mt-10">
        {children}
      </body>
    </html>
  );
}
