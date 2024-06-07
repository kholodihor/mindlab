/* eslint-disable @typescript-eslint/ban-ts-comment */
import useSWR from 'swr'
import { lazy, Suspense } from 'react'
import type { LottieComponentProps } from 'lottie-react'

const LazyLottieComponent = lazy(() => import('lottie-react'))

interface LottieProps<T extends Record<string, unknown>> {
  getAnimationData: () => Promise<T>
  id: string
}

export function LazyLottie<T extends Record<string, unknown>>({
  getAnimationData,
  id,
  ...props
}: LottieProps<T> & Omit<LottieComponentProps, 'animationData'>) {
  const fetcher = async () => {
    await import('lottie-react')
    return getAnimationData()
  }

  const { data } = useSWR<T>(id, fetcher)

  if (!data) return null

  return (
    <Suspense fallback={null}>
      {/* @ts-expect-error */}
      <LazyLottieComponent animationData={data} {...props} />
    </Suspense>
  )
}
