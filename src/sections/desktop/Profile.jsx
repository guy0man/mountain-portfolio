import ProfilePic from "@/assets/images/profile-pic.jpg"

export default function Profile() {
    return(
        <div className="max-w-[30vw]">
            <img
            src={ProfilePic}
            alt="Person"
            className=""
            />

            <div className="py-3 px-2">
                <p className='text-xl text-foreground pb-1 font-medium'>MARTIN BERNARD BONDOC</p>
                <p className='text-sm drop-shadow-sm text-foreground/90'>Computer Science Undergraduate in Mapúa Malayan Colleges Mindanao</p>
            </div>
        </div>
    )
}