import { create } from 'zustand'

interface AlertState {
  isAlertOpen: boolean
  openAlert: () => void
  closeAlert: () => void
}

export const useAlert = create<AlertState>((set) => ({
  isAlertOpen: false,
  openAlert: () => set({ isAlertOpen: true }),
  closeAlert: () => set({ isAlertOpen: false })
}))
