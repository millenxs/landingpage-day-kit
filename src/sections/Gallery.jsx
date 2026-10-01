import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded'
import { LazyImage, Reveal, SectionTitle } from '../components'
import { colors } from '../theme'

const PAGES = [
  { src: 'rotina-manha', label: 'Rotina da manhã', cat: 'Rotinas' },
  { src: 'rotina-noite', label: 'Rotina da noite', cat: 'Rotinas' },
  { src: 'primeiro-depois', label: 'Primeiro e depois', cat: 'Rotinas' },
  { src: 'cartoes', label: 'Cartões para recortar', cat: 'Rotinas' },
  { src: 'agenda', label: 'Agenda do dia', cat: 'Rotinas' },
  { src: 'emocoes', label: 'Como estou me sentindo?', cat: 'Emoções' },
  { src: 'emo-pintar', label: 'Pinte a carinha', cat: 'Emoções' },
  { src: 'historia-espera', label: 'Esperar a minha vez', cat: 'Histórias' },
  { src: 'historia-barulho', label: 'Quando o barulho é alto', cat: 'Histórias' },
  { src: 'lavar-maos', label: 'Lavar as mãos', cat: 'Histórias' },
  { src: 'calma', label: 'Cantinho da calma', cat: 'Calma' },
  { src: 'respiracao', label: 'Respiração da flor e da vela', cat: 'Calma' },
  { src: 'colorir-gato', label: 'Desenhos para colorir', cat: 'Colorir' },
  { src: 'caminhos', label: 'Caminhos pontilhados', cat: 'Colorir' },
  { src: 'certificado', label: 'Certificado', cat: 'Colorir' },
]
const CATS = ['Todas', 'Rotinas', 'Emoções', 'Histórias', 'Calma', 'Colorir']

export default function Gallery() {
  const [cat, setCat] = useState('Todas')
  const [open, setOpen] = useState(null)
  const list = cat === 'Todas' ? PAGES.slice(0, 8) : PAGES.filter(p => p.cat === cat)

  return (
    <Box component="section" id="paginas" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal><SectionTitle eyebrow="Veja por dentro" title="Páginas reais do kit" subtitle="Toque em uma página para ver de perto." /></Reveal>
        <Tabs value={cat} onChange={(_, v) => setCat(v)} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile
              sx={{ mb: 4, '& .MuiTabs-flexContainer': { justifyContent: { md: 'center' }, gap: 1 }, '& .MuiTabs-indicator': { display: 'none' } }}>
          {CATS.map(c => (
            <Tab key={c} value={c} label={c} sx={{ borderRadius: 99, minHeight: 40, px: 2.5, border: `2px solid ${colors.line}`, bgcolor: '#fff',
              '&.Mui-selected': { bgcolor: colors.ink, color: '#fff', borderColor: colors.ink } }} />
          ))}
        </Tabs>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {list.map((p, i) => (
            <Grid key={p.src} size={{ xs: 6, sm: 4, md: 3 }}>
              <Reveal delay={(i % 4) * 80}>
                <Box component="button" type="button" onClick={() => setOpen(p)} aria-label={`Ampliar: ${p.label}`}
                     sx={{ all: 'unset', cursor: 'pointer', display: 'block', width: '100%', borderRadius: 3, overflow: 'hidden', bgcolor: '#fff',
                           border: `2px solid ${colors.line}`, position: 'relative', transition: 'transform .25s, box-shadow .25s',
                           '&:hover, &:focus-visible': { transform: 'translateY(-4px) rotate(-.6deg)', boxShadow: '0 18px 30px -16px rgba(31,27,46,.45)' },
                           '&:focus-visible': { outline: `3px solid ${colors.purple}` },
                           '&:hover .zoom': { opacity: 1 } }}>
                  <LazyImage src={`/img/${p.src}.webp`} alt={p.label} />
                  <Box className="zoom" sx={{ position: 'absolute', top: 8, right: 8, bgcolor: colors.ink, color: '#fff', borderRadius: '50%', width: 34, height: 34,
                                               display: 'grid', placeItems: 'center', opacity: { xs: 1, md: 0 }, transition: 'opacity .2s' }}><ZoomInRoundedIcon fontSize="small" /></Box>
                  <Box sx={{ px: 1.5, py: 1.2, fontSize: 14, fontWeight: 600, borderTop: `1px solid ${colors.line}` }}>{p.label}</Box>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog open={!!open} onClose={() => setOpen(null)} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 4, m: 2 } }}>
        {open && (
          <Box sx={{ position: 'relative' }}>
            <IconButton onClick={() => setOpen(null)} aria-label="Fechar" sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, bgcolor: '#fff', '&:hover': { bgcolor: '#f3f3f3' } }}>
              <CloseRoundedIcon />
            </IconButton>
            <LazyImage src={`/img/${open.src}.webp`} alt={open.label} eager />
          </Box>
        )}
      </Dialog>
    </Box>
  )
}
