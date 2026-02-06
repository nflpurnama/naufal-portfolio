import { EXPERIENCES } from "@/configs/experiences"

function formatDate(date: Date){
    return date.toLocaleDateString("en-US", {year: "numeric", month: "short",}).toUpperCase()
}

export default function About(){
    return <main className="flex flex-col items-center min-h-screen max-w-9xl py-32 gap-12">
        {EXPERIENCES.map((exp) => 
            <div key={exp.id} className="flex text-zinc-500 gap-12">
            <h1 className="text-zinc-600 text-xl font-bold">{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'PRESENT'}</h1>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h2 className="text-zinc-50 text-xl font-bold">{exp.title}</h2>
                    <span className="flex gap-2">
                        <a href="www.acunomic.com" className="underline">{exp.companyName}</a> - <p>{exp.city}, {exp.locationType}</p>
                    </span>
                </div>
                <div className="pl-8">
                    <ul className="flex flex-col gap-6 text-sm max-w-2xl list-disc font-medium">
                        {exp.descriptions.map((desc, index) => <li key={`${exp.id}_${index}`}>{desc}</li>)}
                    </ul>
                </div>
            </div>
        </div>
        )}
    </main>
}