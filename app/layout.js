import localFont from 'next/font/local'
import './globals.css'
import Head from 'next/head'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
})

export const metadata = {
  title: 'Tristan - Software Developer',
  description:
    'Crafting innovative solutions to drive scalable enterprise growth with a business-focused approach'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <Head>
        <meta
          name='keywords'
          content='Jidef, software developer, software developer, enterprise solutions, scalable growth, GitHub, X, YouTube, Tristan Vidal'
        />
        <link rel='canonical' href='https://jidef.com' />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content='Jidef | Software Developer' />
        <meta
          property='og:description'
          content='Architecting innovative solutions for scalable enterprise growth.'
        />
        <meta property='og:image' content='/og.jpg' />
        <meta property='og:url' content='https://jidef.com' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Jidef | Software Developer' />
        <meta
          name='twitter:description'
          content='Architecting innovative solutions for scalable enterprise growth.'
        />
        <meta
          name='twitter:image'
          content='https://jidef.com/images/image.jpg'
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
