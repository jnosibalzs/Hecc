import "./globals.css";

export const metadata = {
  title: "Csak neked Gábor!",
  description: "Csak neked Gábor!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
