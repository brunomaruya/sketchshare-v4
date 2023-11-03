import Image from "next/image";
import Provider from "../../../providers/Provider";
import "../globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const imgLink =
    "https://images.unsplash.com/photo-1505569127510-bde1536937bc?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <html lang="en">
      <body className="m-0 md:rid grid-cols-2 max-h-screen md:w-full">
        <Provider>
          <div className="w-72 md:w-96 mx-auto my-20">{children}</div>
          <div className="hidden md:block md:w-full">
            <Image
              src={imgLink}
              height={500}
              width={500}
              alt="img"
              className="h-screen w-full object-cover "
            />
          </div>
        </Provider>
      </body>
    </html>
  );
}
