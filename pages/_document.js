import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href="https://www.gyozasenmonten-kou.jp/favicon.ico" />
        <link rel="apple-touch-icon" href="https://www.gyozasenmonten-kou.jp/favicon.ico" />
        {/* Global Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Shayan Shimura" />
        <meta
          name="keywords"
          content="餃, 餃子, Kou, レストラン, 日本食, 餃子店, gyoza, restaurant, dumpling"
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="餃子Kou | 本格的な餃子レストラン"
        />
        <meta
          property="og:description"
          content="餃（KOU）は、埼玉県所沢市の餃子専門店です。 餃子愛溢れるスタッフが、毎日の仕入れ、仕込みを行っています。是非ご賞味ください。 餃（KOU）の餃子はお持ち帰り・全国発送も承っています。 お土産にも最適です。"
        />
        <meta property="og:url" content="https://gyozasenmonten-kou.jp" />
        <meta
          property="og:image"
          content="images/og-image.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
