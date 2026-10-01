import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import PixRoundedIcon from '@mui/icons-material/PixRounded'
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded'
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded'
import { BuyButton, LazyImage, Reveal } from '../components'
import { PRICE, BUMP_PRICE } from '../config'
import { colors } from '../theme'

const list = ['Rotinas da manhã e da noite', '24 cartões + "Primeiro e depois" + agenda do dia', '8 páginas de emoções',
              '3 histórias sociais', 'Cantinho da calma e respiração guiada', '12 desenhos para colorir, atividades e certificado',
              'Guia rápido para pais e educadores', 'Uso ilimitado em casa e na sala de aula']

export default function Offer() {
  return (
    <Box component="section" id="oferta" sx={{ py: { xs: 8, md: 12 }, bgcolor: colors.ink, color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, opacity: .5,
        background: `radial-gradient(40% 50% at 15% 20%, ${colors.purple}66 0%, transparent 70%), radial-gradient(35% 45% at 90% 80%, ${colors.yellow}33 0%, transparent 70%)` }} />
      <Container maxWidth="sm" sx={{ position: 'relative' }}>
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box component="span" sx={{ typography: 'overline', color: colors.sand }}>Oferta</Box>
            <Box component="h2" sx={{ typography: 'h2', m: 0, mt: 1 }}>Kit Meu Dia Tranquilo</Box>
          </Box>
          <Box sx={{ bgcolor: '#fff', color: colors.ink, borderRadius: 6, p: { xs: 3, sm: 5 }, boxShadow: '0 40px 80px -30px rgba(0,0,0,.6)' }}>
            <Stack spacing={1.4}>
              {list.map(t => (
                <Stack key={t} direction="row" spacing={1.5} alignItems="flex-start">
                  <Box sx={{ flex: '0 0 26px', height: 26, borderRadius: '50%', bgcolor: colors.green, display: 'grid', placeItems: 'center', mt: '1px' }}>
                    <CheckRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <span>{t}</span>
                </Stack>
              ))}
            </Stack>
            <Divider sx={{ my: 3.5, borderColor: colors.line }} />
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ color: 'text.secondary', fontSize: 15 }}>pagamento único</Box>
              <Box sx={{ fontSize: { xs: 56, md: 68 }, fontWeight: 700, lineHeight: 1.05, my: 1 }}>
                <Box component="span" sx={{ fontSize: '.4em', verticalAlign: 'top', mr: .5, position: 'relative', top: '.6em' }}>R$</Box>{PRICE}
              </Box>
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ color: 'text.secondary', fontSize: 14, mb: 3, '& svg': { fontSize: 18 } }}>
                <Stack direction="row" spacing={.6} alignItems="center"><PixRoundedIcon /><span>Pix</span></Stack>
                <Stack direction="row" spacing={.6} alignItems="center"><CreditCardRoundedIcon /><span>Cartão</span></Stack>
                <Stack direction="row" spacing={.6} alignItems="center"><LockRoundedIcon /><span>Compra segura</span></Stack>
              </Stack>
              <BuyButton fullWidth location="offer" sx={{ py: 2, fontSize: '1.15rem' }}>Quero meu kit agora</BuyButton>
              <Box sx={{ mt: 1.5, fontSize: 13, color: 'text.secondary' }}>O PDF chega no seu e-mail logo após o pagamento.</Box>
            </Box>

            <Box sx={{ mt: 3.5, p: 2, borderRadius: 4, border: `2px dashed ${colors.yellow}`, bgcolor: '#FFF9E6', display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box sx={{ flex: '0 0 72px', borderRadius: 2, overflow: 'hidden', border: `1px solid ${colors.line}` }}>
                <LazyImage src="/img/colorir-capa.webp" alt="Kit Colorir e Brincar" />
              </Box>
              <Box sx={{ fontSize: 14 }}>
                <b>Bônus opcional no checkout:</b> adicione o <b>Kit Colorir &amp; Brincar</b> (30 desenhos + 7 atividades) por apenas <b>R$ {BUMP_PRICE}</b>.
              </Box>
            </Box>
          </Box>

          <Stack direction="row" spacing={2.5} alignItems="center" sx={{ mt: 4, p: 3, borderRadius: 5, bgcolor: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)' }}>
            <Box sx={{ flex: '0 0 68px', height: 68, borderRadius: '50%', bgcolor: '#2E9E62', display: 'grid', placeItems: 'center' }}>
              <VerifiedUserRoundedIcon sx={{ fontSize: 34 }} />
            </Box>
            <Box><b>Garantia incondicional de 7 dias.</b> Se o kit não servir para vocês, peça o reembolso direto pela plataforma, sem perguntas.</Box>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  )
}
