import { EXPERIENCES } from "@/configs/experiences"
import ExperienceCard from "@/components/about/experience"

export default function About(){
    return <main className="flex flex-col items-center min-h-screen max-w-5xl py-32 px-8 gap-12">
        <div className="flex align-items-start min-w-full">
            <p>I am Naufal. To me, software engineering is not merely about writing code, but about solving real-world problems. 
                Developing solutions for various ERP systems has reinforced my belief that while algorithms and frameworks are essential, the ultimate goal is building reliable systems that create meaningful impact.
            </p>
        </div>
        {EXPERIENCES.map((exp) => 
            <ExperienceCard key={exp.id} experience={exp} />
        )}
    </main>
}