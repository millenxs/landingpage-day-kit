import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { colors } from '../theme'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 5, pb: { xs: 14, md: 5 }, borderTop: `1px solid ${colors.line}`, textAlign: 'center', color: 'text.secondary', fontSize: 13, lineHeight: 1.8 }}>
      <Container>
        <b>Meu Dia Tranquilo</b> · Produto digital · Todos os desenhos são originais.<br />
        Material educativo e lúdico. Não substitui o acompanhamento de profissionais.<br />
        Este site não faz parte do Facebook ou da Meta Platforms, Inc.
      </Container>
    </Box>
  )
}
