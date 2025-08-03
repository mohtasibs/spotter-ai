import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Spotter AI",
  description: "Trucking Automation that works for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
      </body>
    </html>
  );
}
