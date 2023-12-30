/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";

/* Instruments */
import "bootstrap/dist/css/bootstrap.css";

import "./styles/layout.css";
import "./styles/globals.css";
import { Footer } from "./components/Footer";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="icon" href="./logo.png" sizes="any" />
        </head>
        <body className="bg">
          <section>
            <Nav />

            <header></header>

            <main>{props.children}</main>
          </section>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
