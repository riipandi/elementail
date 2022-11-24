import type { AppProps } from 'next/app'

import '@elementail/core/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
