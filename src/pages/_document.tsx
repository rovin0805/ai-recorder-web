import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body className="max-w-screen-sm mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
