// =====================================================
//  CONFIGURE AQUI antes de publicar
// =====================================================

// Link de checkout do produto na Cakto (Produtos > seu produto > Links)
export const CHECKOUT_URL = 'https://pay.cakto.com.br/SEU-LINK'

// PDF gratuito (fica na pasta /public)
export const SAMPLE_PDF = '/amostra-gratis-meu-dia-tranquilo.pdf'

export const PRICE = '19,90'
export const BUMP_PRICE = '9,90'

// Dispara eventos do Meta Pixel, se ele estiver instalado no index.html
export function track(event, params) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params)
  }
}
