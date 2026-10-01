import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import { Reveal, SectionTitle } from '../components'
import { colors } from '../theme'

const items = [
  { n: 6, color: colors.blue, title: 'Rotinas visuais', text: 'Rotina da manhã e da noite, quadro "Primeiro e depois" e agenda do dia.' },
  { n: 24, color: colors.blue, title: 'Cartões para recortar', text: 'Acordar, escola, banho, comer, esperar, parque e mais. Um deles em branco para personalizar.' },
  { n: 8, color: colors.pink, title: 'Páginas de emoções', text: 'Quadro "Como estou me sentindo?", 6 carinhas para pintar e um jogo de ligar.' },
  { n: 3, color: colors.green, title: 'Histórias sociais', text: 'Esperar a minha vez, quando o barulho é alto e lavar as mãos passo a passo.' },
  { n: 2, color: colors.lilac, title: 'Cantinho da calma', text: 'Cartaz com 6 estratégias para momentos difíceis e a respiração da flor e da vela.' },
  { n: 15, color: colors.sand, title: 'Colorir e coordenação', text: '12 desenhos grandes, caminhos pontilhados, jogo das sombras e certificado.' },
]

export default function Inside() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff', borderBlock: `1px solid ${colors.line}` }}>
      <Container maxWidth="lg">
        <Reveal><SectionTitle eyebrow="O que vem no kit" title="37 páginas organizadas por tema" subtitle="Um único PDF, com guia rápido para os adultos e tudo pronto para imprimir em papel A4." /></Reveal>
        <Grid container spacing={2.5}>
          {items.map((it, i) => (
            <Grid key={it.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Reveal delay={(i % 3) * 100} sx={{ height: '100%' }}>
                <Box sx={{ height: '100%', display: 'flex', gap: 2, p: 3, borderRadius: 4, border: `2px solid ${colors.line}`, bgcolor: colors.cream }}>
                  <Box sx={{ flex: '0 0 60px', height: 60, borderRadius: 3, bgcolor: it.color, display: 'grid', placeItems: 'center',
                             fontWeight: 700, fontSize: 24, border: `2px solid ${colors.ink}` }}>{it.n}</Box>
                  <Box>
                    <Box component="h3" sx={{ typography: 'h3', m: 0, mb: .5 }}>{it.title}</Box>
                    <Box component="p" sx={{ m: 0, color: 'text.secondary', fontSize: 15 }}>{it.text}</Box>
                  </Box>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
