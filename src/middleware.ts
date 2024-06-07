import { withAuth } from 'next-auth/middleware'
import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const publicPages = ['/', '/login']
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
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  )
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return nextIntlMiddleware(req)
  } else {
    return (authMiddleware as any)(req)
  }
}

export const config = {
  matcher: [
    '/',
    '/(ua|en)/:path*',
    '/((?!api|_next|_vercel|public|images|icons|favicon.ico|.*\\..*).*)'
  ]
}
