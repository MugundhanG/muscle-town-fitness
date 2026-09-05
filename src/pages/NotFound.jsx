import { useSeo } from '../hooks/useSeo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  useSeo({ title: 'Page Not Found' })

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-canvas py-24">
      <Container className="flex flex-col items-center gap-5 text-center">
        <span className="font-display text-7xl text-primary">404</span>
        <h1 className="font-display text-3xl uppercase text-ink">This page skipped leg day.</h1>
        <p className="max-w-sm text-ink-soft">
          The page you're looking for doesn't exist. Let's get you back to somewhere useful.
        </p>
        <Button to="/">Back to Home</Button>
      </Container>
    </section>
  )
}
