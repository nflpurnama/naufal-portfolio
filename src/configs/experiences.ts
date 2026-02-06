import { Experience } from "@/types/resume/experience";

export const EXPERIENCES = [
    {
        id: 'EXP-001',
        city: 'Singapore',
        locationType: 'Remote',
        descriptions: [
            `Designed and implemented an automated approval workflow for financial transactions. 
            Leveraged NetSuite email library to reduce client licensing costs and improve process efficiency. 
            Implemented in SuiteScript based on functional requirements defined by the lead consultant and client stakeholders. 
            Participated in client meetings during issue resolution to clarify requirements and ensure alignment between technical implementation and accounting policies. 
            Successfully deployed the solution to a live client environment, improving approval traceability and reducing manual handling.`,

            `Contributed to the development of a NetSuite–Yokoy expense management integration. 
            Refactored integration modules from JavaScript to TypeScript, introducing interface contracts for improved type safety. 
            Restructured project folders to enforce separation of concerns and improve maintainability. 
            Implemented API communication, data transformation, and financial data reconciliation logic.`,

            `Lead development of an EBICS banking integration module in Odoo using Python. 
            Implemented secure bank communication library with symmetric and asymmetric encryption, electronic signatures, and financial validation logic using domain-driven design. 
            Coordinated technical tasks with a junior developer and assigned work packages.`
        ],
        title: 'Developer',
        startDate: new Date('09/09/2022'),
        companyName: 'Acunomic',
        companyUrl: 'www.acunomic.com'
    },
    {
        id: 'EXP-002',
        city: 'Surabaya',
        locationType: 'Onsite',
        descriptions: [
            `Contributed to the refactoring and redesign of a healthcare application supporting Continuous Ambulatory Peritoneal Dialysis (CAPD) patients.`,

            `Established a structured design system and developed comprehensive wireframes to guide the engineering team during application refactoring.`,

            `Improved interface consistency and usability through standardized component design and layout restructuring.`,

            `Participated in application introduction and training sessions at Universitas Airlangga Hospital (Surabaya) and Sardjito Hospital (Yogyakarta), engaging with approximately 100 CAPD patients.`
        ],
        title: 'UI/UX Designer',
        startDate: new Date('10/10/2023'),
        endDate: new Date('10/10/2024'),
        companyName: 'RisetCAPD'
    },
] satisfies Experience[]