import { createSlice } from '@reduxjs/toolkit'

export const pageViewSlice = createSlice({
  name: 'page_view',
  initialState: {
    render: false,
    error: false,
    modal: false,
    alert: { status: false, message: '' },
    isLoading: false,
    lastWidth: window.innerWidth,
    isMobile:
      /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    isMobileMenuOpen: false,
  },
  reducers: {
    toggleRender: (state) => {
      state.render = !state.render
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setMobileMenuOpen: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },

    setError: (state, action) => {
      state.error = action.payload
    },
    setMobile: (state, action) => {
      state.isMobile = action.payload
    },
    setLastWidth: (state, action) => {
      state.lastWidth = action.payload
    },

    toggleModal: (state) => {
      state.modal = !state.modal
    },

    alertMessage: (state, action) => {
      state.alert.status = action.payload.status
      state.alert.message = { ...action.payload.message }
    },
  },
})

// Export actions
export const {
  toggleRender,
  setLoading,
  setError,
  toggleModal,
  setLastWidth,
  setMobile,
  alertMessage,
  setMobileMenuOpen,
} = pageViewSlice.actions
export const renderSelector = (state) => state.page_view.render
export const pageSelector = (state) => state.page_view

export default pageViewSlice.reducer
