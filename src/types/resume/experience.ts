export interface Experience{
    startDate: Date
    endDate?: Date
    title: string
    city: string
    locationType: "Remote" | "Onsite"
    descriptions: string[],
    companyName: string,
    companyUrl?: string,
    id: string
}