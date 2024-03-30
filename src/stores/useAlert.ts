/* eslint-disable no-unused-vars */
import { create } from 'zustand'

type AlertType = 'testimonial' | 'feedback' | ''

interface AlertState {
  isAlertOpen: boolean
  alertType: AlertType
  openAlert: (type:AlertType) => void
  closeAlert: () => void
}

export const useAlert = create<AlertState>((set) => ({
  isAlertOpen: false,
  alertType: '',
  openAlert: (type) => set({ isAlertOpen: true, alertType:type  }),
  closeAlert: () => set({ isAlertOpen: false, alertType:'' })
}))
