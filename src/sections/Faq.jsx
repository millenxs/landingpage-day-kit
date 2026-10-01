import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import { Reveal, SectionTitle, BuyButton } from '../components'
import { colors } from '../theme'

const faq = [
  ['Vou receber algo pelo correio?', 'Não. É um arquivo digital em PDF. O link de download chega no seu e-mail logo após a confirmação do pagamento.'],
  ['Preciso de impressora especial?', 'Não. Funciona em qualquer impressora comum, em papel A4. Também dá para imprimir em uma papelaria.'],
  ['Dá para reaproveitar as rotinas?', 'Sim. Plastifique ou coloque em saquinho plástico e use caneta de quadro branco. Os cartões podem ser presos com velcro ou ímã.'],
  ['Posso usar com meus alunos ou pacientes?', 'Pode. Imprima quantas vezes quiser para uso em casa, na sala de aula ou no consultório. Só não é permitido revender ou compartilhar o arquivo.'],
  ['Para qual idade é indicado?', 'Foi pensado para crianças de 3 a 8 anos, mas cada criança tem seu ritmo. Vale para qualquer idade em que as imagens façam sentido para ela.'],
  ['O kit substitui terapia?', 'Não. É um material educativo e lúdico de apoio ao dia a dia. Se a criança faz acompanhamento, mostre o kit para a equipe e combine como usar.'],
  ['E se eu não gostar?', 'Você tem 7 dias de garantia. É só pedir o reembolso pela plataforma de pagamento.'],
]

export default function Faq() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Reveal><SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" /></Reveal>
        <Reveal>
          {faq.map(([q, a], i) => (
            <Accordion key={q} disableGutters elevation={0} defaultExpanded={i === 0}
              sx={{ mb: 1.5, borderRadius: '16px !important', border: `2px solid ${colors.line}`, '&:before': { display: 'none' }, overflow: 'hidden' }}>
              <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />} sx={{ px: 3, py: .5, fontWeight: 600 }}>{q}</AccordionSummary>
              <AccordionDetails sx={{ px: 3, pt: 0, pb: 2.5, color: 'text.secondary' }}>{a}</AccordionDetails>
            </Accordion>
          ))}
        </Reveal>
        <Box sx={{ textAlign: 'center', mt: 6 }}><BuyButton location="faq" /></Box>
      </Container>
    </Box>
  )
}
