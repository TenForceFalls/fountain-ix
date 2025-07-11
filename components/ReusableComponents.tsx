import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 text-blue-400 bg-blue-500/10 rounded-lg">
            {icon}
          </div>
          <CardTitle className="text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-blue-300">{value}</p>
      </CardContent>
    </Card>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-3 text-blue-400 bg-blue-500/10 rounded-lg">
            {icon}
          </div>
          <CardTitle className="text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300">{description}</p>
      </CardContent>
    </Card>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-slate-300">{subtitle}</p>
    </div>
  )
}

interface ContactCardProps {
  title: string
  email?: string
  link?: string
  description?: string
  icon: React.ReactNode
}

export function ContactCard({
  title,
  email,
  link,
  description,
  icon,
}: ContactCardProps) {
  return (
    <Card className="bg-transparent border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">{icon}</div>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {email && <p className="text-blue-300 font-mono">{email}</p>}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 font-mono hover:text-blue-200 transition-colors"
          >
            {link}
          </a>
        )}
        {description && <p className="text-slate-400 text-sm">{description}</p>}
      </CardContent>
    </Card>
  )
}