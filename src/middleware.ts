import { withAuth } from 'next-auth/middleware'
import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const locales = ['ua', 'en']
const adminPathRegex = new RegExp(`^(/(${locales.join('|')}))?/admin(/.*)?$`, 'i')

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'ua',
  localeDetection: false,
  localePrefix: 'as-needed'
})

const authMiddleware = withAuth(
  function onSuccess(req) {
    return nextIntlMiddleware(req)
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null
    },
    pages: {
      signIn: '/login'
    }
  }
)

export default function middleware(req: NextRequest) {
  if (adminPathRegex.test(req.nextUrl.pathname)) {
    return (authMiddleware as any)(req)
  }
  return nextIntlMiddleware(req)
}

export const config = {
  matcher: [
    '/',
    '/:locale(ua|en)/:path*',
    '/((?!api|_next|_vercel|public|images|icons|favicon.ico|.*\\..*).*)'
  ]
}
