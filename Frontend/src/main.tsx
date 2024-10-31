import { createRoot } from 'react-dom/client'
import App from './App'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './reset.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RootStoreProvider } from './Store/RootStore/RootStoreProvider'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RootStoreProvider>
      <Header />
      <App />
      <Footer />
    </RootStoreProvider>
  </BrowserRouter>
)
