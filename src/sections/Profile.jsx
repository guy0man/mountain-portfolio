
export default function Profile() {
    return(
        <div className="max-w-150">
            <img
            src="/images/profile-pic.jpg"
            alt="Person"
            className="max-h-200 w-full"
            />

            <div className="py-3 pl-2">
                <p className='text-xl text-white font-light pb-1'>MARTIN BERNARD BONDOC</p>
                <p className='text-sm drop-shadow-sm text-white/90 font-light'>Computer Science Undergraduate in Mapúa Malayan Colleges Mindanao</p>
                <p className='text-sm drop-shadow-sm text-white/90 font-light'>Exploring the world of Cyber Security and Software Engineering</p>
            </div>
        </div>
    )
}