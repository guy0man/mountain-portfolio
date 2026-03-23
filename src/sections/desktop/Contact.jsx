import {Link2} from "lucide-react"

export default function Publications() {
    return(
        <div className="flex flex-col min-w-100 text-foreground gap-2 p-2">
            <p>email: martinbernardbondoc@gmail.com</p>
            <p>phone: (+63)977-854-2002</p>
            <div className=' flex gap-1'>
                <p>github:</p>
                <div className="flex text-foreground/80 hover:text-foreground transition-all duration-100 items-center gap-1">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/guy0man">guy0man</a>
                    <Link2 className="h-4 w-4 mt-0.5"/>
                </div>
            </div>
            <div className=' flex gap-1'>
                <p>linkedIn:</p>
                <div className="flex text-foreground/80 hover:text-foreground transition-all duration-100 items-center gap-1">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/martin-bernard-bondoc-264336276">Martin Bernard Bondoc</a>
                    <Link2 className="h-4 w-4 mt-0.5"/>
                </div>
            </div>
            
        </div>

    )
}