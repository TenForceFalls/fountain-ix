import { Server, Network, Zap, Shield, Users } from "lucide-react"
import Layout from "@/components/Layout"
import { StatCard, FeatureCard } from "@/components/ReusableComponents"

export default function OverviewPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center space-y-4 mb-24">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            FOUNTAIN-IX
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Providing high quality peering without the hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard title="ASN" value="AS55287" icon={<Server />} />
          <StatCard
            title="IPv4 Subnet"
            value="149.112.138.0/24"
            icon={<Network />}
          />
          <StatCard
            title="IPv6 Subnet"
            value="2001:505:144::/48"
            icon={<Network />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="High Performance"
            icon={<Zap />}
            description="Ultra-low latency peering with advanced routing optimization"
          />
          <FeatureCard
            title="Secure Infrastructure"
            icon={<Shield />}
            description="Enterprise-grade security with comprehensive monitoring"
          />
          <FeatureCard
            title="Growing Community"
            icon={<Users />}
            description="Join a thriving ecosystem of network operators and ISPs"
          />
        </div>
      </div>
    </Layout>
  )
}