import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS + Icons + JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

// ApexCharts CSS
import 'apexcharts/dist/apexcharts.css'

// Flatpickr CSS
import 'flatpickr/dist/flatpickr.min.css'

// Template custom styles
import './index.css'

// Template scripts (sidebar, charts, datepicker, auth)
import './assets/js/dashboard.js'
import './assets/js/auth.js'

import App from './App.tsx'
import { NavigationProvider } from './context/navigation'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </StrictMode>,
)
