/* eslint-disable @typescript-eslint/ban-ts-comment */
import useSWR from 'swr'
import { lazy, Suspense } from 'react'
import type { LottieComponentProps } from 'lottie-react'

const LazyLottieComponent = lazy(() => import('lottie-react'))

interface LottieProps<T extends Record<string, unknown>> {
  getAnimationData: () => Promise<T>
  id: string
  fallback?: React.ReactNode
}

export function LazyLottie<T extends Record<string, unknown>>({
  getAnimationData,
  id,
  fallback = null,
  ...props
}: LottieProps<T> & Omit<LottieComponentProps, 'animationData'>) {
  const fetcher = async () => {
    // Preload the Lottie library
    await import('lottie-react') // Ensure Lottie is loaded
    const animationData = await getAnimationData()
    return animationData
  }

  const { data, error } = useSWR<T>(id, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 3600000, // Cache for 1 hour
    suspense: true
  })

  if (error) {
    console.error('Failed to load animation:', error)
    return null
  }

  if (!data) return fallback

  return (
    <Suspense fallback={fallback}>
      {/* @ts-expect-error */}
      <LazyLottieComponent animationData={data} {...props} />
    </Suspense>
  )
}
