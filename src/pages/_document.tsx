import Document, { Html, Head, Main, NextScript } from "next/document";
const TITLE = "Solana pNFT Staking Frontend";
const DESCRIPTION =
  "Solana pNFT Staking Frontend - Next.js, TypeScript, Solana Web3, Smart contract integration, TailwindCSS";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>{TITLE}</title>
          <meta name="description" content={DESCRIPTION} />

          <meta
            property="og:url"
            content="https://pnft-staking.spmoe.xyz"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta
            property="og:image"
            content="https://pnft-staking.spmoe.xyz/images/og.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="https://pnft-staking.spmoe.xyz" />
          <meta
            property="twitter:url"
            content="https://pnft-staking.spmoe.xyz"
          />
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta
            name="twitter:image"
            content="https://pnft-staking.spmoe.xyz/images/og.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
