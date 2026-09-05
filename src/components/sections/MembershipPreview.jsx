import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import MembershipCard from '../ui/MembershipCard'
import Button from '../ui/Button'
import { membershipTiers } from '../../data/membership'

export default function MembershipPreview() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Membership"
          title="Pick a plan that matches your goal"
          description="Every tier includes full gym access — the difference is how much coaching and class access comes with it. Pricing is shared directly since it depends on the plan and duration you choose."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {membershipTiers.map((tier, i) => (
            <MembershipCard key={tier.id} tier={tier} delay={i * 90} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button to="/membership" variant="outline" icon={ArrowRight}>
            Compare Full Membership Details
          </Button>
        </div>
      </Container>
    </section>
  )
}
