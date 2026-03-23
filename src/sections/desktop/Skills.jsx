export default function Skills() {
    const skills = [
        {
            category:"Programming",
            items:["Python","C#","C++","JavaScript","TypeScript","HTML","CSS"]
        },
        {
            category:"FrameWorks & Libraries",
            items:["React","Django","Laravel","Three.js"]
        },
        {
            category:"Databases",
            items:["MySql","PostgrSQL"]
        },
        {
            category:"Tools",
            items:["GitHub","Docker","Microsoft 365","Canva","Adobe Premier","Adobe Acrobat"]
        }
    ]
    return(
        <div className="flex justify-between gap-5 drop-shadow-sm p-3 text-foreground">
            {skills.map((skill,i) => (
                <div key={i}>
                    <p className='font-medium'>{skill.category}</p>
                    <ul>
                        {skill.items.map((item,n) => (
                            <li key={n}>- {item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}