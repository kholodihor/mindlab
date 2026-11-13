import { useEffect } from 'react'

type OnPreview = (_url: string) => void

/**
 * Calls `onPreview` with an object URL for a newly picked file and revokes the URL
 * when the file changes or the component unmounts. Zero-size placeholder files are ignored.
 */
export const useFilePreview = (file: File | undefined, onPreview: OnPreview) => {
  useEffect(() => {
    if (!file?.size) return
    const url = URL.createObjectURL(file)
    onPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [file])
}
