import ProfilePic from "@/assets/profile-pic.png"

export default function Profile() {
    return(
        <div className="max-w-150">
            <img
            src={ProfilePic}
            alt="Person"
            className="max-h-200 w-full"
            />
            
            <div className="py-3 pl-2">
                <p className='text-xl text-foreground pb-1 font-medium'>MARTIN BERNARD BONDOC</p>
                <p className='text-sm drop-shadow-sm text-foreground/90'>Computer Science Undergraduate in Mapúa Malayan Colleges Mindanao</p>
                <p className='text-sm drop-shadow-sm text-foreground/90'>Exploring the world of Cyber Security and Software Engineering</p>
            </div>
        </div>
    )
}