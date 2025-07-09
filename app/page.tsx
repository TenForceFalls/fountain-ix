"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Network,
  Shield,
  Users,
  Server,
  Zap,
  MapPin,
  Mail,
} from "lucide-react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("overview")

  const policies = [
    {
      id: 1,
      title: "AS Number Requirement",
      description:
        "The peering member must have a registered, public AS Number issued with the appropriate Regional Internet Registry for your country (RIPE, ARIN, APNIC, LACNIX, AfriNIC)",
    },
    {
      id: 2,
      title: "NOC Contact",
      description:
        "The peering member must provide Fountain-IX with a NOC contact",
    },
    {
      id: 3,
      title: "BGP Protocol",
      description:
        "The peering member must use BGPv4 or its successor and must set NEXT_HOP_SELF, when advertising routes",
    },
    {
      id: 4,
      title: "Allowed Ethertypes",
      description:
        "The only ethertypes allowed are IPv4 (Ethertype 0x0800), IPv6 (Ethertype 0x86DD), and ARP (Ethertype 0x0806)",
    },
    {
      id: 5,
      title: "Prefix Registration",
      description:
        "The peering member is only allowed to announce prefixes registered to the member and contains appropriate IRR",
    },
    {
      id: 6,
      title: "Minimum Prefix Length",
      description:
        "The minimum prefixes announced should be /24 for IPv4 and /48 for IPv6. Members are additionally encouraged to aggregate prefixes, when ever possible.",
    },
    {
      id: 7,
      title: "Non-Unicast Traffic",
      description:
        "The only non-unicast traffic allowed is broadcast ARP and multicast ICMPv6 Neighbor Discovery packets. Per-neighbor timeouts for broadcast/multicast packets should be set to 4 hours",
    },
    {
      id: 8,
      title: "Route Propagation",
      description:
        "The peering member should not propagate Fountain-IX prefixes, externally and minimize, internally",
    },
    {
      id: 9,
      title: "Resource Usage",
      description:
        "The peering member may not point default route or use another member's or Fountain-IX's resources without permission",
    },
    {
      id: 10,
      title: "Physical Presence",
      description:
        "The peering member must be present at the facility to peer over Fountain-IX",
    },
  ]

  const members: any[] = []

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="relative z-10 border-b border-blue-500/20 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Network className="h-8 w-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-blue-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  FOUNTAIN-IX
                </h1>
                <p className="text-sm text-slate-400">Internet Exchange Point</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {["overview", "policies", "members", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section
                      ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                      : "text-slate-300 hover:text-blue-300 hover:bg-slate-800/50"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8 pb-32">
        {/* Overview Section */}
        {activeSection === "overview" && (
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
              <StatCard title="IPv4 Subnet" value="149.112.138.0/24" icon={<Network />} />
              <StatCard title="IPv6 Subnet" value="	2001:505:144::/48" icon={<Network />} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard title="High Performance" icon={<Zap />} description="Ultra-low latency peering with advanced routing optimization" />
              <FeatureCard title="Secure Infrastructure" icon={<Shield />} description="Enterprise-grade security with comprehensive monitoring" />
              <FeatureCard title="Growing Community" icon={<Users />} description="Join a thriving ecosystem of network operators and ISPs" />
            </div>
          </div>
        )}

        {/* Policies Section */}
        {activeSection === "policies" && (
          <div className="space-y-6">
            <SectionHeader title="Connection Policies" subtitle="Requirements for peering at FOUNTAIN-IX" />
            <div className="grid gap-4">
              {policies.map((policy) => (
                <Card
                  key={policy.id}
                  className="bg-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-3 py-1 font-mono">
                        {policy.id.toString().padStart(2, "0")}
                      </Badge>
                      <div>
                        <CardTitle className="text-white text-lg mb-2">{policy.title}</CardTitle>
                        <CardDescription className="text-slate-300 leading-relaxed">
                          {policy.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Members Section */}
        {activeSection === "members" && (
          <div className="space-y-6">
            <SectionHeader title="Exchange Members" subtitle="Networks connected to FOUNTAIN-IX" />
            {members.length === 0 ? (
              <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm">
                <CardContent className="text-center py-16">
                  <Users className="h-16 w-16 text-slate-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No Members Yet</h3>
                  <p className="text-slate-400 mb-8">Be among the first to join FOUNTAIN-IX</p>
                  <Button
                    className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3"
                    onClick={() =>
                      (window.location.href =
                        "mailto:peering@fountain-ix.net?subject=Membership Application - FOUNTAIN-IX")
                    }
                  >
                    Apply for Membership
                  </Button>
                </CardContent>
              </Card>
            ) : (
              // Future members rendering
              <div>Members will be listed here.</div>
            )}
          </div>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <div className="space-y-6">
            <SectionHeader title="Contact Us" subtitle="Get in touch with the FOUNTAIN-IX team" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactCard icon={<Mail />} title="General Inquiries" email="info@fountain-ix.net" description="For general questions and information" />
              <ContactCard icon={<Network />} title="Peering Requests" email="peering@fountain-ix.net" description="For membership and peering applications" />
              <ContactCard icon={<Shield />} title="NOC / Technical" email="noc@fountain-ix.net" description="24/7 network operations center" />
              <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                    <span>Facility Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-slate-300">1530 Swift St</p>
                  <p className="text-slate-300">North Kansas City, MO 64116</p>
                  <p className="text-slate-400 text-sm">Physical presence required for peering</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm">
              <CardContent className="text-center py-12">
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Join FOUNTAIN-IX?</h3>
                <p className="text-slate-300 mb-8">
                  Connect your network to the future of internet infrastructure
                </p>
                <Button
                  className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() =>
                    (window.location.href =
                      "mailto:peering@fountain-ix.net?subject=Membership Application - FOUNTAIN-IX")
                  }
                >
                  Apply for Membership
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 border-t border-blue-500/20 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Network className="h-5 w-5 text-blue-400" />
              <span className="text-slate-300">© 2025 FOUNTAIN-IX</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">A service of</span>
              <a
                href="https://nova86.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Nova86-LLC
              </a>
            </div>
            <div className="text-slate-400 text-sm">AS55287</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Reusable Components
function StatCard({ title, value, icon }: any) {
  return (
    <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 text-blue-400 bg-blue-500/10 rounded-lg">{icon}</div>
          <CardTitle className="text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-blue-300">{value}</p>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ title, description, icon }: any) {
  return (
    <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-3 text-blue-400 bg-blue-500/10 rounded-lg">{icon}</div>
          <CardTitle className="text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function SectionHeader({ title, subtitle }: any) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-slate-300">{subtitle}</p>
    </div>
  )
}

function ContactCard({ title, email, description, icon }: any) {
  return (
    <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">{icon}</div>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-blue-300 font-mono">{email}</p>
        <p className="text-slate-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
