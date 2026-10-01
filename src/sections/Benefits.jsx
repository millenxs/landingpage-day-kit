import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded'
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded'
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded'
import { Reveal, SectionTitle } from '../components'
import { colors } from '../theme'

const items = [
  { icon: <ScheduleRoundedIcon />, color: colors.blue, title: 'Sabe o que vem depois',
    text: 'A rotina em imagens mostra cada passo da manhã e da noite. A criança acompanha e marca o que já fez.' },
  { icon: <EmojiEmotionsRoundedIcon />, color: colors.pink, title: 'Dá nome ao que sente',
    text: 'Carinhas grandes, com cor própria para cada emoção, para apontar quando falar é difícil.' },
  { icon: <AutoStoriesRoundedIcon />, color: colors.green, title: 'Se prepara antes',
    text: 'Histórias sociais curtas para ler juntos antes de situações como esperar a vez ou enfrentar barulho alto.' },
]

export default function Benefits() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Reveal>
          <SectionTitle eyebrow="Por que funciona" title="Imagens que ajudam a entender o dia"
            subtitle="Muitas crianças autistas entendem melhor o que veem do que o que ouvem. Imagens simples, sempre no mesmo lugar, ajudam a saber o que vem agora e o que vem depois." />
        </Reveal>
        <Grid container spacing={3}>
          {items.map((it, i) => (
            <Grid key={it.title} size={{ xs: 12, md: 4 }}>
              <Reveal delay={i * 120} sx={{ height: '100%' }}>
                <Card sx={{ height: '100%', transition: 'transform .25s, box-shadow .25s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 30px -18px rgba(31,27,46,.4)' } }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Box sx={{ width: 56, height: 56, borderRadius: 3, bgcolor: it.color, display: 'grid', placeItems: 'center', mb: 2.5, '& svg': { fontSize: 30, color: colors.ink } }}>{it.icon}</Box>
                    <Box component="h3" sx={{ typography: 'h3', m: 0, mb: 1 }}>{it.title}</Box>
                    <Box component="p" sx={{ m: 0, color: 'text.secondary' }}>{it.text}</Box>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
