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
                {title:"Paper",type:"image",src:"/images/publications/CNN-TSA/Paper.jpg",thumbnail:""},
                {title:"Publication Email",type:"image",src:"/images/publications/CNN-TSA/publication-email.png",thumbnail:""},
                {title:"Acceptance Letter",type:"image",src:"/images/publications/CNN-TSA/Acceptance-Letter.jpg",thumbnail:""},
                {title:"School Facebook Post",type:"image",src:"/images/publications/CNN-TSA/School-Facebook-Post.jpg",thumbnail:""},
                {title:"Conference",type:"image",src:"/images/publications/CNN-TSA/Conference.png",thumbnail:""},
                {title:"Presentation 1",type:"image",src:"/images/publications/CNN-TSA/Presentation-Photo-1.png",thumbnail:""},
                {title:"Presentation 2",type:"image",src:"/images/publications/CNN-TSA/Presentation-Photo-2.png",thumbnail:""},
                {title:"School-Photo",type:"image",src:"/images/publications/CNN-TSA/School-Photo.png",thumbnail:""},
            ]
        }
    ]
    return(
        <div className="h-190 w-200 p-2">
            <ScrollArea className="text-white text-sm h-full rounded-none pr-3 snap-y snap-proximity overscroll-contain">
                {publications.map((paper,i) => (
                    <div key={i} className="py-2 snap-start min-h-125">
                        <p className="text-lg px-2">- {paper.title} ({paper.year})</p>
                        <Carousel opts={{draggable:true,dragFree:false,loop:true}} className="py-2" plugins={
                            [
                                Autoplay({
                                    delay:10000,
                                    stopOnInteraction:true,
                                })
                            ]}>
                            <CarouselContent className="items-center">
                                {paper.medias.map((media,n) => (
                                    <CarouselItem key={n} >
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
                                                                className="max-w-fit max-h object-cover"
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <Play className="w-12 h-12 text-white bg-black/50 backdrop-blur-sm rounded-full p-2" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </DialogTrigger>
                                                <DialogContent className="max-w-3/5! max-h-4/5! top-5/12! p-2 bg-transparent ring-0 items-center">
                                                    <DialogTitle className="sr-only"></DialogTitle>
                                                    <Carousel opts={{ startIndex: activeIndex, loop:true }}>
                                                        <CarouselContent className="items-center">
                                                            {paper.medias.map((media,x) => (
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
                            <p className="pt-2 text-justify">Conference: {paper.conference}</p>
                            <p className="pt-2 text-justify">Role: {paper.role}</p>
                            <p className="pt-2 text-justify">{paper.description}</p>
                        </div>
                    </div>
                ))}
            </ScrollArea> 
        </div>
    )
}