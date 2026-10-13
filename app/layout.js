import "./globals.css";

export const metadata = {
  title: "Csak neked Peti!",
  description: "Csak neked Peti!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
