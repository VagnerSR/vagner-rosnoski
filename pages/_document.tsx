import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Vagner Rosnoski">
        <link rel="icon" href="/v.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/v.svg" />
        <meta name="theme-color" content="#242424" />
        <meta name="description" content="My personal portfolio" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
