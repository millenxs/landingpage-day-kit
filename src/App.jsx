import { lazy, Suspense } from 'react'
import Box from '@mui/material/Box'
import Header from './sections/Header'
import Hero from './sections/Hero'
import StickyCTA from './sections/StickyCTA'

// Seções abaixo da dobra: carregadas sob demanda (code splitting)
const Benefits = lazy(() => import('./sections/Benefits'))
const Inside = lazy(() => import('./sections/Inside'))
const Gallery = lazy(() => import('./sections/Gallery'))
const Sample = lazy(() => import('./sections/Sample'))
const Audience = lazy(() => import('./sections/Audience'))
const Offer = lazy(() => import('./sections/Offer'))
const Faq = lazy(() => import('./sections/Faq'))
const Footer = lazy(() => import('./sections/Footer'))

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Box sx={{ minHeight: '100vh' }} />}>
          <Benefits />
          <Inside />
          <Gallery />
          <Sample />
          <Audience />
          <Offer />
          <Faq />
          <Footer />
        </Suspense>
      </main>
      <StickyCTA />
    </>
  )
}
