import { withAuth } from 'next-auth/middleware'
import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const nonPublicPages = ['/admin']
const locales = ['ua', 'en']

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
  const noPublicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${nonPublicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  )
  const isNonPublicPage = noPublicPathnameRegex.test(req.nextUrl.pathname)

  if (isNonPublicPage) {
    return (authMiddleware as any)(req)
  } else {
    return nextIntlMiddleware(req)
  }
}

export const config = {
  matcher: [
    '/',
    '/:locale(ua|en)/:path*',
    '/((?!api|_next|_vercel|public|images|icons|favicon.ico|.*\\..*).*)'
  ]
}
