import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { BuyButton } from '../components'
import { SAMPLE_PDF, track } from '../config'
import { colors } from '../theme'

export default function Header() {
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 12 })
  return (
    <AppBar position="sticky" elevation={0} sx={{
      bgcolor: scrolled ? 'rgba(255,251,242,.92)' : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: `1px solid ${scrolled ? colors.line : 'transparent'}`, color: 'text.primary', transition: 'all .25s',
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, minHeight: { xs: 60, md: 70 } }}>
          <Box component="a" href="#topo" sx={{ display: 'flex', alignItems: 'center', gap: 1.2, textDecoration: 'none', color: 'inherit', mr: 'auto' }}>
            <Box component="img" src="/favicon.svg" alt="" width={34} height={34} />
            <Box sx={{ fontWeight: 700, fontSize: { xs: 16, md: 18 } }}>Meu Dia Tranquilo</Box>
          </Box>
          <Button href={SAMPLE_PDF} download onClick={() => track('Lead', { content_name: 'Amostra grátis' })}
                  sx={{ display: { xs: 'none', sm: 'inline-flex' }, color: 'text.primary' }}>
            Amostra grátis
          </Button>
          <BuyButton size="medium" location="header" sx={{ boxShadow: 'none', '&:hover': { boxShadow: 'none', bgcolor: '#FFD25C' }, px: 2 }}>
            Comprar
          </BuyButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
