import Autoplay from "embla-carousel-autoplay"
import {useState } from "react"
import {Play} from "lucide-react"
import { ScrollArea} from "@/components/ui/scroll-area"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0)

    const projects = [
        {
            title:"MMCM Accounting Module",
            role:"Backend Developer",
            tech:"MySQL,Django,React,Tailwind,Shadcn",
            description:`
                Developed a private web-based payment request management 
                system for the accounting office of Mapúa Malayan Colleges 
                Mindanao as part of a student development team, serving as 
                the backend developer. The system supports reimbursement, 
                trade payables, cash advances, and liquidation, with multi-level 
                approval workflows and secure Azure AD authentication.
            `,
            repo:"",
            medias:[
                {type:"image",title:"Login Page", src:"/images/projects/MMCM-AM/Login.png", thumbnail:""},
                {type:"image",title:"Request Page", src:"/images/projects/MMCM-AM/Requests.png", thumbnail:""},
                {type:"image",title:"Create Requests Page", src:"/images/projects/MMCM-AM/Create-Request.png", thumbnail:""},
                {type:"image",title:"Approvals Page", src:"/images/projects/MMCM-AM/Approval.png", thumbnail:""},      
            ]
        },
        {
            title:"ReVisit: Smart Entryway Camera System for Visitor Recognition and Behavioral Insights",
            role:"Full-stack Developer",
            tech:"SQLite,Python,Raspberry pi,OpenCV,Facenet,Deepface",
            description:`
                The Smart Camera System is an AI-powered visitor monitoring solution 
                that uses computer vision and IoT to detect, recognize, and analyze 
                individuals in real time. It identifies repeat visitors, estimates 
                demographic data, and stores insights in a local database.

                A real-time web dashboard displays live logs and analytics using 
                WebSocket updates, demonstrating the integration of machine learning, 
                embedded systems, and full-stack development.           
            `,
            repo:"",
            medias:[
                {type:"video",title:"System Demo",src:"https://www.youtube.com/embed/glI1UlIeY1Q", thumbnail:"https://img.youtube.com/vi/glI1UlIeY1Q/maxresdefault.jpg"},
                {type:"image",title:"Tech Stack",src:"/images/projects/ReVisit/tech.png", thumbnail:""},
                {type:"image",title:"Processes",src:"/images/projects/ReVisit/Server-Side-Processing.png", thumbnail:""},
            ]
        },
        {
            title:"MMCM Scholarship Management System",
            role:"Full-stack Developer",
            tech:"MySQL,Laravel,React,Tailwind,Shadcn",
            description:`
                A web-based Scholarship Management System developed for Mapúa Malayan 
                Colleges Mindanao (MMCM) that streamlines the administration of scholarship 
                programs. The system manages scholarship students, scholarship offerings, 
                and administrative users, enabling efficient application processing, 
                evaluation, approval, and monitoring of scholars. It improves data 
                organization, reduces manual workload, and enhances transparency in 
                scholarship management.
            `,
            repo:"",
            medias:[
                {type:"image",title:"Login Page",src:"/images/projects/MMCM-SMS/Login.png", thumbnail:""},
                {type:"image",title:"Statistics Page",src:"/images/projects/MMCM-SMS/Statistics.png", thumbnail:""},
                {type:"image",title:"Scolarships Page",src:"/images/projects/MMCM-SMS/Scholarships.png", thumbnail:""},
                {type:"image",title:"Employees Page",src:"/images/projects/MMCM-SMS/Employees.png", thumbnail:""},
                {type:"video",title:"Website Demo",src:"https://www.youtube.com/embed/IbwquRLG4Ak", thumbnail:"https://img.youtube.com/vi/IbwquRLG4Ak/maxresdefault.jpg"}
            ],
        },
    ]
    return(
        <div className="h-190 w-200">
            <ScrollArea className="text-white text-sm h-full rounded-none pr-3 snap-y snap-mandatory overscroll-contain space-y-10">
                {projects.map((project,i) => (
                    <div key={i} className="py-5 snap-start">
                        <p className="text-lg px-2">- {project.title}</p>
                        <Carousel opts={{draggable:true,dragFree:false,loop:true}} className="py-2" plugins={
                            [
                                Autoplay({
                                    delay:10000,
                                    stopOnInteraction:true,
                                })
                            ]}>
                            <CarouselContent className="items-center">
                                {project.medias.map((media,n) => (
                                    <CarouselItem key={n} className='basis-full'>
                                        <div className="w-full aspect-video overflow-hidden relative" onClick={() => {
                                            setActiveIndex(n)
                                        }}>
                                            <Dialog>
                                                <DialogTrigger className="flex items-center justify-center">
                                                    {media.type === "image" && (
                                                        <div className="flex flex-col items-center">
                                                            <img
                                                                src={media.src}
                                                                className="object-contain"
                                                            />
                                                        </div>
                                                    )}
                                                    {media.type === "video" && (
                                                        <div className="flex flex-col items-center">
                                                            <img
                                                                src={media.thumbnail}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <Play className="w-12 h-12 text-white bg-black/50 backdrop-blur-sm rounded-full p-2" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </DialogTrigger>
                                                <DialogContent className="max-w-3/5! max-h-4/5! top-5/12! p-2 bg-transparent ring-0 items-center">
                                                    <DialogTitle className="sr-only"></DialogTitle>
                                                    <Carousel opts={{ startIndex: activeIndex, loop:true}}>
                                                        <CarouselContent className="items-center">
                                                            {project.medias.map((media,x) => (
                                                                <CarouselItem key={x}>
                                                                    {media.type === "image" && (
                                                                            <div className="flex flex-col items-center">
                                                                                <img
                                                                                    src={media.src}
                                                                                    className="w-3/5 object-cover"
                                                                                />
                                                                                <p>{media.title}</p>
                                                                            </div>
                                                                        )}
                                                                    {media.type === "video" && (
                                                                            <div>
                                                                                <iframe
                                                                                    src={media.src}
                                                                                    className="w-full aspect-video"
                                                                                    allow="accelerometer; gyroscope; web-share"
                                                                                    allowFullScreen
                                                                                />
                                                                                <p>{media.title}</p>
                                                                            </div>
                                                                        )}
                                                                </CarouselItem>
                                                            ))}
                                                        </CarouselContent>
                                                        <CarouselPrevious/>                                          
                                                        <CarouselNext/>
                                                    </Carousel>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                        <div className="px-2">
                            <p>Role: {project.role}</p>
                            <p>Tech: {project.tech}</p>
                            <p className="pt-2 text-justify">{project.description}</p>
                        </div>
                    </div>
                ))}
            </ScrollArea>
        </div>
    )
}