"use client"

import { Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Layout from "@/components/Layout"
import { SectionHeader } from "@/components/ReusableComponents"

export default function MembersPage() {
  const members: any[] = []

  return (
    <Layout>
      <div className="space-y-6">
        <SectionHeader
          title="Exchange Members"
          subtitle="Networks connected to FOUNTAIN-IX"
        />
        {members.length === 0 ? (
          <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm">
            <CardContent className="text-center py-16">
              <Users className="h-16 w-16 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No Members Yet
              </h3>
              <p className="text-slate-400 mb-8">
                Be among the first to join FOUNTAIN-IX
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
        ) : (
          <div>Members will be listed here.</div>
        )}
      </div>
    </Layout>
  )
}