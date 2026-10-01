import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { BuyButton } from '../components'
import { colors } from '../theme'

/** Barra fixa no celular que aparece depois que a pessoa passa do topo */
export default function StickyCTA() {
  const show = useScrollTrigger({ disableHysteresis: true, threshold: 700 })
  return (
    <Slide direction="up" in={show}>
      <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 1100, p: 1.5,
                 pb: 'calc(12px + env(safe-area-inset-bottom))', bgcolor: 'rgba(255,251,242,.95)', backdropFilter: 'blur(8px)', borderTop: `1px solid ${colors.line}` }}>
        <BuyButton fullWidth size="large" location="sticky" />
      </Box>
    </Slide>
  )
}
