export default function About(){
    return <main className="flex flex-col items-center min-h-screen max-w-9xl py-32 gap-12">
        <div className="flex text-zinc-500 gap-12">
            <h1 className="text-zinc-600 text-xl font-bold">SEP 2022 - PRESENT</h1>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h2 className="text-zinc-50 text-xl font-bold">Developer</h2>
                    <span className="flex gap-2">
                        <a href="www.acunomic.com" className="underline">Acunomic</a> - <p>Singapore, Remote</p>
                    </span>
                </div>
                <div className="pl-8">
                    <ul className="flex flex-col gap-6 text-sm max-w-2xl list-disc font-medium">
                        <li>Designed and implemented an automated approval workflow for financial transactions. Leveraged NetSuite email library to reduce client licensing costs and improve process efficiency. Implemented in SuiteScript based on functional requirements defined by the lead consultant and client stakeholders. Participated in client meetings during issue resolution to clarify requirements and ensure alignment between technical implementation and accounting policies. Successfully deployed the solution to a live client environment, improving approval traceability and reducing manual handling.</li>
                        <li>Contributed to the development of a NetSuite–Yokoy expense management integration. Refactored integration modules from JavaScript to TypeScript, introducing interface contracts for improved type safety. Restructured project folders to enforce separation of concerns and improve maintainability. Implemented API communication, data transformation, and financial data reconciliation logic.</li>
                        <li>Lead development of an EBICS banking integration module in Odoo using Python. Implemented secure bank communication library with symmetric and asymmetric encryption, electronic signatures, and financial validation logic using domain-driven design. Coordinated technical tasks with a junior developer and assigned work packages.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex text-zinc-500 gap-12">
            <h1 className="text-zinc-600 text-xl font-bold">OCT 2023 - OCT 2024</h1>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h2 className="text-zinc-50 text-xl font-bold">UI/UX Designer</h2>
                    <span className="flex gap-2">
                        <a href="www.acunomic.com" className="underline">RisetCAPD</a> - <p>Surabaya, On-Site</p>
                    </span>
                </div>
                <div className="pl-8">
                    <ul className="flex flex-col gap-6 text-sm max-w-2xl list-disc font-medium">
                        <li>Contributed to the refactoring and redesign of a healthcare application supporting Continuous Ambulatory Peritoneal Dialysis (CAPD) patients.</li>
                        <li>Established a structured design system and developed comprehensive wireframes to guide the engineering team during application refactoring.</li>
                        <li>Improved interface consistency and usability through standardized component design and layout restructuring.</li>
                        <li>Participated in application introduction and training sessions at Universitas Airlangga Hospital (Surabaya) and Sardjito Hospital (Yogyakarta), engaging with approximately 100 CAPD patients.</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
}