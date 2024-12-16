import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Menu from "@/components/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
