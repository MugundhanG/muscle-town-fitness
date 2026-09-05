import { Flame, MessageCircle } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { whatsappLink } from '../../config/business'

export default function CtaBanner({
  title = 'Ready to start training like you mean it?',
  description = 'Book a free trial session and see what a coached, structured plan actually feels like.',
}) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <h2 className="max-w-2xl font-display text-4xl uppercase text-white md:text-5xl">{title}</h2>
          <p className="max-w-lg text-white/90">{description}</p>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap justify-center gap-3">
          <Button to="/contact" size="lg" variant="white" icon={Flame}>
            Book a Free Trial
          </Button>
          <Button
            href={whatsappLink()}
            target="_blank"
            size="lg"
            variant="ghost"
            icon={MessageCircle}
            className="border border-white/50 text-white hover:bg-white/10"
          >
            WhatsApp Us
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
