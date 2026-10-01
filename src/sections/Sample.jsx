import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { LazyImage, Reveal, SampleButton } from '../components'
import { colors } from '../theme'

const list = ['Quadro "Como estou me sentindo?"', 'Rotina da manhã com caixinhas de "feito"', 'Cantinho da calma com 6 estratégias',
              'Respiração da flor e da vela', 'Um desenho grande para colorir', 'Guia rápido de como usar cada página']

export default function Sample() {
  return (
    <Box component="section" id="amostra" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ borderRadius: { xs: 5, md: 8 }, p: { xs: 3, sm: 5, md: 7 }, position: 'relative', overflow: 'hidden',
                     background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.purpleDark} 100%)`, color: '#fff' }}>
            <Box aria-hidden sx={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', bgcolor: 'rgba(255,255,255,.07)', top: -120, right: -80 }} />
            <Box aria-hidden sx={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', bgcolor: 'rgba(255,201,60,.15)', bottom: -90, left: -60 }} />
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ position: 'relative' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box component="span" sx={{ typography: 'overline', color: colors.sand }}>Amostra grátis</Box>
                <Box component="h2" sx={{ typography: 'h2', m: 0, mt: 1 }}>Teste antes de comprar: 5 atividades de presente</Box>
                <Box component="p" sx={{ mt: 2, mb: 3, fontSize: { xs: 16, md: 18 }, opacity: .9 }}>Baixe o PDF, imprima e veja se o material funciona para a sua criança.</Box>
                <Stack spacing={1.2} sx={{ mb: 4 }}>
                  {list.map(t => (
                    <Stack key={t} direction="row" spacing={1.2} alignItems="center">
                      <CheckCircleRoundedIcon sx={{ color: colors.sand }} /><span>{t}</span>
                    </Stack>
                  ))}
                </Stack>
                <SampleButton variant="contained" sx={{ bgcolor: '#fff', color: colors.ink, '&:hover': { bgcolor: colors.cream } }}>
                  Baixar amostra grátis (PDF)
                </SampleButton>
                <Box sx={{ mt: 1.5, fontSize: 13, opacity: .75 }}>Download direto, sem cadastro.</Box>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ maxWidth: 340, mx: 'auto', transform: 'rotate(3deg)', borderRadius: 3, overflow: 'hidden', boxShadow: '0 30px 60px -20px rgba(0,0,0,.5)' }}>
                  <LazyImage src="/img/amostra-capa.webp" alt="Capa da amostra grátis" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Reveal>
      </Container>
    </Box>
  )
}
