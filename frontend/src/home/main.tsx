import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HeaderComponent, FooterComponent } from '../general/headerFooter.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HeaderComponent/>
        <App />
        <FooterComponent/>
    </StrictMode>,
)
