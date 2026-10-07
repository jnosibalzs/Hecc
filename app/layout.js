import "./globals.css";

export const metadata = {
  title: "Csak neked Robi!",
  description: "Csak neked Robi!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
