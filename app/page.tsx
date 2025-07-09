"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Network, Shield, Users, Server, Zap, MapPin, Mail } from "lucide-react"

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
      description: "The peering member must provide Fountain-IX with a NOC contact",
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
      description: "The peering member should not propagate Fountain-IX prefixes, externally and minimize, internally",
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
      description: "The peering member must be present at the facility to peer over Fountain-IX",
    },
  ]

  const members = [
    // Placeholder for future members
    // {
    //   name: "Example ISP",
    //   asn: "AS12345",
    //   type: "ISP",
    //   location: "City, Country"
    // }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

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

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Overview Section */}
        {activeSection === "overview" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                FOUNTAIN-IX
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Next-generation Internet Exchange Point connecting networks across the digital frontier
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Server className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">ASN</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-300">AS55287</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Network className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">IPv4 Subnet</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-slate-400">TBD</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Network className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">IPv6 Subnet</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-slate-400">TBD</p>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Zap className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">High Performance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Ultra-low latency peering with advanced routing optimization</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">Secure Infrastructure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Enterprise-grade security with comprehensive monitoring</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">Growing Community</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Join a thriving ecosystem of network operators and ISPs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Policies Section */}
        {activeSection === "policies" && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Connection Policies
              </h2>
              <p className="text-slate-300">Requirements for peering at FOUNTAIN-IX</p>
            </div>

            <div className="grid gap-4">
              {policies.map((policy) => (
                <Card
                  key={policy.id}
                  className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300"
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
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Exchange Members
              </h2>
              <p className="text-slate-300">Networks connected to FOUNTAIN-IX</p>
            </div>

            {members.length === 0 ? (
              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm">
                <CardContent className="text-center py-16">
                  <Users className="h-16 w-16 text-slate-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No Members Yet</h3>
                  <p className="text-slate-400 mb-8">Be among the first to join FOUNTAIN-IX</p>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                    onClick={() =>
                      (window.location.href =
                        "mailto:peering@fountainix.net?subject=Membership Application - FOUNTAIN-IX")
                    }
                  >
                    Apply for Membership
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {members.map((member, index) => (
                  <Card key={index} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-slate-200">{member.name}</CardTitle>
                          <CardDescription className="text-slate-400">{member.location}</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="bg-cyan-600/20 text-cyan-300 border-cyan-500/30">
                            {member.asn}
                          </Badge>
                          <p className="text-sm text-slate-400 mt-1">{member.type}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Contact Us
              </h2>
              <p className="text-slate-300">Get in touch with the FOUNTAIN-IX team</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <span>General Inquiries</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-blue-300 font-mono">info@FOUNTAIN-IX.NET</p>
                  <p className="text-slate-400 text-sm">For general questions and information</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Network className="h-5 w-5 text-blue-400" />
                    </div>
                    <span>Peering Requests</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-blue-300 font-mono">peering@FOUNTAIN-IX.NET</p>
                  <p className="text-slate-400 text-sm">For membership and peering applications</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-400" />
                    </div>
                    <span>NOC / Technical</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-blue-300 font-mono">noc@FOUNTAIN-IX.NET</p>
                  <p className="text-slate-400 text-sm">24/7 network operations center</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
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

            <Card className="bg-slate-900/80 border border-blue-500/20 backdrop-blur-sm">
              <CardContent className="text-center py-12">
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Join FOUNTAIN-IX?</h3>
                <p className="text-slate-300 mb-8">Connect your network to the future of internet infrastructure</p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() =>
                    (window.location.href =
                      "mailto:peering@fountainix.net?subject=Membership Application - FOUNTAIN-IX")
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
      <footer className="relative z-10 border-t border-blue-500/20 bg-black/90 backdrop-blur-sm mt-16">
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
