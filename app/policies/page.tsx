import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Layout from "@/components/Layout"
import { SectionHeader } from "@/components/ReusableComponents"

export default function PoliciesPage() {
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

  return (
    <Layout>
      <div className="space-y-6">
        <SectionHeader
          title="Connection Policies"
          subtitle="Requirements for peering at FOUNTAIN-IX"
        />
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
                    <CardTitle className="text-white text-lg mb-2">
                      {policy.title}
                    </CardTitle>
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
    </Layout>
  )
}