import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import FamilyRestroomRoundedIcon from '@mui/icons-material/FamilyRestroomRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded'
import { Reveal, SectionTitle } from '../components'
import { colors } from '../theme'

const items = [
  { icon: <FamilyRestroomRoundedIcon />, color: colors.pink, title: 'Mães, pais e famílias', text: 'Para organizar a rotina de casa e conversar sobre emoções com mais tranquilidade.' },
  { icon: <SchoolRoundedIcon />, color: colors.sand, title: 'Professoras e AEE', text: 'Atividades prontas para a sala de aula, com uso ilimitado para seus alunos.' },
  { icon: <PsychologyRoundedIcon />, color: colors.lilac, title: 'Terapeutas', text: 'Material de apoio visual para usar nas sessões e enviar para as famílias.' },
]

export default function Audience() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Reveal><SectionTitle eyebrow="Para quem é" title="Feito para quem cuida e ensina" /></Reveal>
        <Grid container spacing={3}>
          {items.map((it, i) => (
            <Grid key={it.title} size={{ xs: 12, md: 4 }}>
              <Reveal delay={i * 120} sx={{ height: '100%' }}>
                <Box sx={{ height: '100%', textAlign: 'center', p: 4, borderRadius: 5, bgcolor: '#fff', border: `2px solid ${colors.line}` }}>
                  <Box sx={{ width: 72, height: 72, mx: 'auto', mb: 2, borderRadius: '50%', bgcolor: it.color, display: 'grid', placeItems: 'center', '& svg': { fontSize: 36 } }}>{it.icon}</Box>
                  <Box component="h3" sx={{ typography: 'h3', m: 0, mb: 1 }}>{it.title}</Box>
                  <Box component="p" sx={{ m: 0, color: 'text.secondary' }}>{it.text}</Box>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
