import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import { CHECKOUT_URL, SAMPLE_PDF, PRICE, track } from './config'
import { colors } from './theme'

/** Imagem com lazy loading nativo, espaço reservado (sem pulo de layout) e fade ao carregar */
export function LazyImage({ src, alt, ratio = 1.414, eager = false, sx, ...rest }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <Box sx={{ position: 'relative', width: '100%', aspectRatio: `1 / ${ratio}`, bgcolor: '#F3EEE3', overflow: 'hidden', ...sx }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchpriority={eager ? 'high' : 'auto'}
        decoding="async"
        width={720}
        height={Math.round(720 * ratio)}
        onLoad={() => setLoaded(true)}
        sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              opacity: loaded ? 1 : 0, transition: 'opacity .5s ease' }}
        {...rest}
      />
    </Box>
  )
}

/** Faz o conteúdo surgir suavemente quando entra na tela */
export function Reveal({ children, delay = 0, sx }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { rootMargin: '0px 0px -60px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Box ref={ref} sx={{
      opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(24px)',
      transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
      '@media (prefers-reduced-motion: reduce)': { transition: 'none', transform: 'none', opacity: 1 },
      ...sx,
    }}>{children}</Box>
  )
}

export function BuyButton({ children, size = 'large', fullWidth, sx, location = 'page' }) {
  return (
    <Button
      variant="contained" color="secondary" size={size} fullWidth={fullWidth}
      href={CHECKOUT_URL} startIcon={<ShoppingCartRoundedIcon />}
      style={{ whiteSpace: 'nowrap' }}
      onClick={() => track('InitiateCheckout', { content_name: 'Meu Dia Tranquilo', value: 19.9, currency: 'BRL', location })}
      sx={{ color: colors.ink, boxShadow: `0 5px 0 #C99A16`, '&:hover': { bgcolor: '#FFD25C', boxShadow: `0 5px 0 #C99A16` },
            '&:active': { transform: 'translateY(3px)', boxShadow: `0 2px 0 #C99A16` }, ...sx }}
    >
      {children || `Quero o kit completo · R$ ${PRICE}`}
    </Button>
  )
}

export function SampleButton({ children, variant = 'outlined', size = 'large', fullWidth, sx }) {
  return (
    <Button
      variant={variant} size={size} fullWidth={fullWidth}
      href={SAMPLE_PDF} download startIcon={<DownloadRoundedIcon />}
      style={{ whiteSpace: 'nowrap' }}
      onClick={() => track('Lead', { content_name: 'Amostra grátis' })}
      sx={{ borderWidth: 2, '&:hover': { borderWidth: 2 }, ...sx }}
    >
      {children || 'Baixar amostra grátis'}
    </Button>
  )
}

export function SectionTitle({ eyebrow, title, subtitle, light }) {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: { xs: 4, md: 6 } }}>
      {eyebrow && <Box component="span" sx={{ typography: 'overline', color: light ? colors.sand : 'primary.main' }}>{eyebrow}</Box>}
      <Box component="h2" sx={{ typography: 'h2', m: 0, mt: 1, color: light ? '#fff' : 'text.primary' }}>{title}</Box>
      {subtitle && <Box component="p" sx={{ mt: 2, mb: 0, fontSize: { xs: 16, md: 18 }, color: light ? 'rgba(255,255,255,.8)' : 'text.secondary' }}>{subtitle}</Box>}
    </Box>
  )
}
