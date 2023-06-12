import "../tailwind.css";
import NextFontLocal from "next/font/local";

const fixel = NextFontLocal({
  src: "../fonts/fixel-variable.ttf",
  variable: "--font-fixel",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${fixel.variable} font-sans`}>
      <Component {...pageProps} />;
    </div>
  );
}
