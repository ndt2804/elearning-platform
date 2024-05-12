import Image from "next/image";
import logo from "@/public/assets/logo.png";
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
          <div className="container mx-auto scroll-smooth">
            <div className="flex justify-between px-6">
              <div className="flex items-center py-4">
                <a
                  aria-current="page"
                  href="/"
                  className="router-link-active router-link-exact-active"
                >
                  <Image
                    src={logo} // Đường dẫn đến hình ảnh
                    width={100} // Chiều rộng (px)
                    height={100} // Chiều cao (px)
                    alt="Mô tả hình ảnh" // Văn bản thay thế cho hình ảnh
                    priority={false}
                  />
                </a>
              </div>
            </div>
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
