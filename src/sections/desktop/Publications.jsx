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

export default function Publications() {

    const images = import.meta.glob('@/assets/images/publications/**/*.{png,jpg,jpeg}', { eager: true })
    const getImage = (path) => {
        return images[`/src/assets/images/${path}`]?.default
    }
    
    const [activeIndex, setActiveIndex] = useState(0)
    const publications = [
        {
            title:"Detecting the Threat: A CNN and TSA Hybrid Approach for DDoS Detection in Software-Defined Networks",
            year:"2026",
            link:"",
            conference:"10th International Conference on Machine Learning and Soft Computing",
            role:"AI Engineer, Lead Author",
            description:`
                Designed and implemented a hybrid CNN and Temporal Self-Attention model for DDoS detection in Software-Defined Networking (SDN) 
                environments. Leveraged spatial and temporal feature learning to enhance attack detection performance and conducted evaluation 
                against traditional machine learning approaches. Presented at the 10th International Conference on Machine Learning and Smart 
                Computing (ICMLSC 2026), Osaka, Japan, with the paper accepted for publication in the official proceedings.
            `,
            medias:[
                {title:"Publication Paper",type:"image",src:getImage("publications/CNN-TSA/Paper.jpg"),thumbnail:""},
                {title:"Publication Email",type:"image",src:getImage("publications/CNN-TSA/publication-email.png"),thumbnail:""},
                {title:"Acceptance Letter",type:"image",src:getImage("publications/CNN-TSA/Acceptance-Letter.jpg"),thumbnail:""},
                {title:"Official School Facebook Publication Material",type:"image",src:getImage("publications/CNN-TSA/School-Facebook-Post.jpg"),thumbnail:""},
                {title:"Attending the 10th ICMLSC in Osaka, Japan",type:"image",src:getImage("publications/CNN-TSA/Conference.png"),thumbnail:""},
                {title:"International Research Presentation in Osaka, Japan",type:"image",src:getImage("publications/CNN-TSA/Presentation-Photo-1.png"),thumbnail:""},
                {title:"International Research Presentation in Osaka, Japan",type:"image",src:getImage("publications/CNN-TSA/Presentation-Photo-2.png"),thumbnail:""},
                {title:"Delegates of MMCM in ICMLSC Osaka, Japan",type:"image",src:getImage("publications/CNN-TSA/School-Photo.png"),thumbnail:""},
            ]
        }
    ]
    return(
        <div className="max-h-[70vh] max-w-[40vw]">
            <div className="w-[40vw] h-[70vh]">
                <ScrollArea className="text-foreground h-full rounded-none snap-y snap-proximity overscroll-contain">
                    {publications.map((paper,i) => (
                        <div key={i} className="py-2 snap-start min-h-125">
                            <p className="text-lg font-bold px-2">{paper.title} ({paper.year})</p>
                            <Carousel opts={{draggable:true,dragFree:false,loop:true}} className="py-2" plugins={
                                [
                                    Autoplay({
                                        delay:10000,
                                        stopOnInteraction:true,
                                    })
                                ]}>
                                <CarouselContent className="items-center h-fit">
                                    {paper.medias.map((media,n) => (
                                        <CarouselItem key={n} >
                                            <div className="flex w-full h-auto justify-center" onClick={() => {
                                                setActiveIndex(n)
                                            }}>
                                                <Dialog>
                                                    <DialogTrigger>
                                                        {media.type === "image" && (
                                                            <img
                                                                src={media.src}
                                                                className="max-h-[40vh] w-auto object-contain"
                                                            />
                                                        )}
                                                        {media.type === "video" && (
                                                            <div>
                                                                <img
                                                                    src={media.thumbnail}
                                                                    className="max-w-fit max-h object-cover"
                                                                />
                                                                <div className="absolute inset-0 flex items-center justify-center">
                                                                    <Play className="w-12 h-12 text-white bg-black/50 backdrop-blur-sm rounded-full p-2" />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-[100vh]! max-h-screen! p-2 bg-transparent ring-0 items-center">
                                                        <DialogTitle className="sr-only"></DialogTitle>
                                                        <Carousel opts={{ startIndex: activeIndex, loop:true }}>
                                                            <CarouselContent className="items-center">
                                                                {paper.medias.map((media,x) => (
                                                                    <CarouselItem key={x}>
                                                                        <div className="flex w-full h-auto justify-center">
                                                                            {media.type === "image" && (
                                                                                <div className="flex flex-col items-center">
                                                                                    <img
                                                                                        src={media.src}
                                                                                        className="max-h-[90vh] object-cover"
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
                                                                        </div>
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
                                <div className="flex gap-1">
                                    <p className="text-foreground/75">Conference: </p>
                                    <p className="font-medium">{paper.conference}</p>
                                </div>
                                <div className="flex gap-1">
                                    <p className="text-foreground/75">Role: </p>
                                    <p className="font-medium">{paper.role}</p>
                                </div>
                                <p className="pt-2 text-justify">{paper.description}</p>
                            </div>
                        </div>
                    ))}
                </ScrollArea> 
            </div>
        </div>
    )
}