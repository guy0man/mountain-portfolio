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
            items:["GitHub","Docker","Figma","Microsoft 365","Canva","Adobe Premier","Adobe Acrobat"]
        }
    ]
    return(
        <div className="max-w-[50vw] flex justify-between gap-5 p-2 text-foreground">
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