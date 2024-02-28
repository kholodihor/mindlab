import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SWRProvider } from '../swr-provider'
import { getServerSession } from 'next-auth'
import SessionWrapper from '../session-provider'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import './globals.css'

const fixelDisplay = localFont({
  src: [
    {
      path: '../../../public/fonts/FixelDisplay-ExtraLight.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Light.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Thin.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-SemiBold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/FixelDisplay-Bold.woff2',
      weight: '800',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: 'MindLab',
  description: 'Сторінка освітньої платформи MindLab',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  manifest: '/site.webmanifest'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()
  return (
    <html lang="uk" className={fixelDisplay.className}>
      <SessionWrapper session={session}>
        <SWRProvider>
          <body>
            <Header />
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </body>
        </SWRProvider>
      </SessionWrapper>
    </html>
  )
}
