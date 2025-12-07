import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="hi">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700&family=Fira+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="राजस्थान की गर्मी में दादी और बंदर का बर्फ़ का महल | AI cartoon अनुभव"
        />
        <meta property="og:title" content="बर्फ़ का राजसी घर | Rajasthan Ice Palace" />
        <meta
          property="og:description"
          content="दादी और शरारती बंदर ने राजस्थान की तपती धरती पर बर्फ़ का महल बनाया।"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
