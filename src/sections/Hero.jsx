import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import { BuyButton, SampleButton, LazyImage } from '../components'
import { colors } from '../theme'

const float = (deg, dist = 10) => ({
  '@keyframes floatY': { '0%,100%': { translate: '0 0' }, '50%': { translate: `0 -${dist}px` } },
  transform: `rotate(${deg}deg)`,
  animation: 'floatY 6s ease-in-out infinite',
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
})

function Page({ src, alt, sx, eager }) {
  return (
    <Box sx={{ position: 'absolute', width: { xs: '56%', md: '58%' }, borderRadius: 3, overflow: 'hidden',
               boxShadow: '0 24px 50px -12px rgba(31,27,46,.35)', border: `1px solid ${colors.line}`, bgcolor: '#fff', ...sx }}>
      <LazyImage src={src} alt={alt} eager={eager} />
    </Box>
  )
}

export default function Hero() {
  return (
    <Box id="topo" component="section" sx={{
      position: 'relative', overflow: 'hidden', mt: { xs: -7.5, md: -8.75 }, pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 12 },
      background: `radial-gradient(60% 50% at 85% 20%, ${colors.lilac} 0%, transparent 70%),
                   radial-gradient(45% 40% at 10% 90%, ${colors.pink} 0%, transparent 70%),
                   radial-gradient(40% 35% at 60% 100%, ${colors.blue}AA 0%, transparent 70%), ${colors.cream}`,
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Chip icon={<AutoAwesomeRoundedIcon />} label="Kit de atividades visuais para crianças autistas"
                  sx={{ bgcolor: '#fff', border: `2px solid ${colors.line}`, mb: 3, height: 'auto', py: .8, '& .MuiChip-label': { whiteSpace: 'normal' } }} />
            <Box component="h1" sx={{ typography: 'h1', m: 0 }}>
              Mais{' '}
              <Box component="span" sx={{ background: `linear-gradient(transparent 58%, ${colors.sand} 58%)`, px: .5 }}>previsibilidade</Box>
              {' '}e menos sustos no dia a dia
            </Box>
            <Box component="p" sx={{ fontSize: { xs: 17, md: 19 }, color: 'text.secondary', mt: 3, mb: 4, maxWidth: 540, mx: { xs: 'auto', md: 0 } }}>
              Rotinas visuais, cartões de emoções, histórias sociais e cantinho da calma em <b>37 páginas prontas para imprimir</b>. Traço limpo e sem poluição visual, para crianças de 3 a 8 anos.
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} useFlexGap flexWrap="wrap" justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <BuyButton location="hero">Comprar o kit · R$ 19,90</BuyButton>
              <SampleButton>Baixar amostra grátis</SampleButton>
            </Stack>
            <Stack direction="row" spacing={{ xs: 2, sm: 3 }} useFlexGap flexWrap="wrap" justifyContent={{ xs: 'center', md: 'flex-start' }}
                   sx={{ mt: 3.5, color: 'text.secondary', fontSize: 14, '& svg': { fontSize: 20, color: 'primary.main' } }}>
              <Stack direction="row" spacing={.8} alignItems="center"><PictureAsPdfRoundedIcon /><span>PDF para imprimir</span></Stack>
              <Stack direction="row" spacing={.8} alignItems="center"><BoltRoundedIcon /><span>Acesso imediato</span></Stack>
              <Stack direction="row" spacing={.8} alignItems="center"><VerifiedUserRoundedIcon /><span>Garantia de 7 dias</span></Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', height: { xs: 380, sm: 480, md: 560 }, maxWidth: 520, mx: 'auto' }} aria-hidden="true">
              <Page src="/img/emocoes.webp" alt="" sx={{ left: 0, top: { xs: 30, md: 50 }, ...float(-7, 8) }} />
              <Page src="/img/rotina-manha.webp" alt="" sx={{ right: 0, top: 0, ...float(6, 12), animationDelay: '1s' }} />
              <Page src="/img/capa.webp" alt="Capa do kit Meu Dia Tranquilo" eager sx={{ left: '21%', top: { xs: 60, md: 90 }, zIndex: 2, ...float(-1, 10), animationDelay: '.5s' }} />
              <Box sx={{ position: 'absolute', zIndex: 3, right: { xs: 4, md: 10 }, bottom: { xs: 8, md: 20 }, bgcolor: colors.ink, color: '#fff',
                         borderRadius: '50%', width: { xs: 96, md: 118 }, height: { xs: 96, md: 118 }, display: 'grid', placeItems: 'center',
                         textAlign: 'center', transform: 'rotate(10deg)', boxShadow: '0 12px 30px rgba(31,27,46,.3)' }}>
                <Box><Box sx={{ fontSize: { xs: 30, md: 38 }, fontWeight: 700, lineHeight: 1, color: colors.sand }}>37</Box><Box sx={{ fontSize: 13 }}>páginas</Box></Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
