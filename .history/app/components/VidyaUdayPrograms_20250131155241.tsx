import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface ImpactGroup {
  title: string;
  items: string[];
}

interface Program {
  title: string;
  description: string;
  image: string;
  targetAudience: string;
  impact: ImpactGroup[];
}

export function ProgramsAndInitiatives({ programs }: { programs: Program[] }) {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50/50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Programs and Initiatives</h2>
        {programs.map((program, index) => (
          <Card key={index} className="mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-green-700 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600 mb-2">Target Audience:</h4>
                  <p className="text-gray-600">{program.targetAudience}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Impact:</h4>
                  {program.impact.map((impactGroup, i) => (
                    <div key={i} className="mb-4">
                      <h5 className="font-semibold text-green-600 mb-2">{impactGroup.title}</h5>
                      <ul className="space-y-2">
                        {impactGroup.items.map((item, j) => (
                          <li key={j} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

