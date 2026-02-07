import { Experience } from "@/types/resume/experience"

function formatDate(date: Date){
    return date.toLocaleDateString("en-US", {year: "numeric", month: "short",}).toUpperCase()
}

const ExperienceCard = ({experience}: {experience: Experience}) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-zinc-500 text-xl font-bold">{formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'PRESENT'}</h1>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h2 className="text-zinc-50 text-xl font-bold">{experience.title}</h2>
                    <span className="flex gap-2">
                        <a href={experience.companyUrl} className="underline">{experience.companyName}</a> - <p>{experience.city}, {experience.locationType}</p>
                    </span>
                </div>
                <div className="pl-8">
                    <ul className="flex flex-col gap-6 text-sm max-w-2xl list-disc font-medium">
                        {experience.descriptions.map((desc, index) => <li key={`${experience.id}_${index}`}>{desc}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;