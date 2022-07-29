import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import { RecoilRoot } from 'recoil'

import Layout from '../components/Layout.js'

import '../i18n'

export default function MyApp({ Component, pageProps }) {
  const myTheme = extendTheme(
    {
      fonts: {
        heading: ' -apple-system, system-ui, sans-serif',
        body: ' -apple-system, system-ui, sans-serif',
      },
    },
    theme
  )
  return (
    <RecoilRoot>
      <ChakraProvider theme={myTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  )
}
