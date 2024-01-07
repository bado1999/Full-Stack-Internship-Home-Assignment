import { Html, Head,NextScript } from 'next/document'

import Home from "@/pages/index.js";

const Document=() =>{
  return (
    <Html lang="en">
      <Head />
      <body>
      <Home/>
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
