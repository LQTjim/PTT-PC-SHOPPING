import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-dcard-main p-5 fixed z-10 w-full">
          <div className="m-auto text-4xl font-bold text-white max-w-[1440px]">
            PTT PC-SHOPPING
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
