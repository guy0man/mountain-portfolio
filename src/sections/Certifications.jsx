import { ChevronsUpDown } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function Certifications() {
    const certifications = [
        {
            title:"Cisco Certified Network Associate (CCNA)",
            image:"/images/certifications/CCNA-Cert.jpg"
        },
        {
            title:"Microsoft Office Specialist: Excel Associate",
            image:""
        }
    ]


    return(
        <div className="w-200 p-2">
            <ScrollArea className="text-foreground h-auto h-max-200 rounded-none">
                {certifications.map((cert,i) => (
                    <Collapsible>
                        <div className='flex gap-2 items-center'>
                            <p className="text-lg">{cert.title}</p>
                            {cert.image && (
                                <CollapsibleTrigger asChild>
                                    <Button className="size-8 bg-transparent font-semibold border-none p-0">
                                        <ChevronsUpDown className="text-foreground" />
                                    </Button>
                                </CollapsibleTrigger>
                            )}
                        </div>
                        <CollapsibleContent>
                        <img
                            src={cert.image}
                            alt="Person"
                            className="w-full mb-3"
                        />
                        </CollapsibleContent>
                    </Collapsible>

                ))}
            </ScrollArea>
        </div>
    )
}