import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './app/store'
import { HashRouter } from 'react-router-dom'

// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = '/lettle_lemon/service-worker.js' // Correct path
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('ServiceWorker registration successful:', registration)
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed:', error)
      })
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>
)

// Measure performance
reportWebVitals()
