import Image from "next/image";
import logo from "@/public/assets/logo_bg.png";
import logo1 from "@/public/assets/bg.png";

import "../globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "@/utils/SessionProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html>
      <body>
        <SessionProvider session={session}>
          <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="min-h-screen flex flex-col items-center justify-center">
              <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                <div className="md:max-w-md w-full sm:px-6 py-4">
                  {children}
                </div>
                <div className="md:h-full max-md:mt-10 bg-[#000842] rounded-xl lg:p-12 p-8">
                  <img
                    src="https://readymadeui.com/signin-image.webp"
                    className="w-full h-full object-contain"
                    alt="login-image"
                  />
                </div>
              </div>
            </div>
          </section>
        </SessionProvider>
      </body>
    </html>
  );
}
