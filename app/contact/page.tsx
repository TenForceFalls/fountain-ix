"use client"

import { Mail, Network, Shield, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Layout from "@/components/Layout"
import { SectionHeader, ContactCard } from "@/components/ReusableComponents"

export default function ContactPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch with the FOUNTAIN-IX team"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactCard
            icon={<Mail />}
            title="General Inquiries"
            email="info@fountain-ix.net"
            description="For general questions and information"
          />
          <ContactCard
            icon={<Network />}
            title="Peering Requests"
            email="peering@fountain-ix.net"
            description="For membership and peering applications"
          />
          <ContactCard
            icon={<Shield />}
            title="NOC / Technical"
            email="noc@fountain-ix.net"
            description="Network operations center"
          />
          <ContactCard
            icon={<Shield />}
            title="PeeringDB"
            link="https://www.peeringdb.com/ix/4772"
          />
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
            </CardContent>
          </Card>
          <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to Join FOUNTAIN-IX?
              </h3>
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
      </div>
    </Layout>
  )
}