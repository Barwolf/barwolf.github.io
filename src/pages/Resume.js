import React from 'react';

function Resume() {
    return (
        // <div className="flex justify-center items-center h-screen">
        //     <h1 className="text-4xl font-bold">Resume Page</h1>
        // </div>

        <div className={"w-full flex flex-col justify-center items-center p-20"}>
            <div>
                <h1 className={"text-2xl"}>Jeremiah Lillion</h1>
                <div className={"flex flex-col justify-center w-[1000px] gap-2"}>

                    <h1 className={"font-bold text-2xl"}>Education</h1>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
                    <h3 className={"underline text-xl"}>University of California, Irvine</h3>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"italic text-xl"}>Computer Science (B.S.)</h3>
                        <h3 className={"text-xl"}>Dec 2026</h3>
                    </div>
                    <li className={"text-xl"}>
                        Regents Scholarship, UCIAA Book Scholarship, Campuswide Honors Collegium Member,
                        Tau Sigma Member, TEDxUCIrvine Core Member
                    </li>

                    <div className="flex flex-row justify-between items-center w-full pt-4">
                        <h3 className={"underline text-xl"}>Cerro Coso Community College</h3>
                        <h3 className={"text-xl"}>Cumulative GPA: 4.0/4.0</h3>
                    </div>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"italic text-xl"}>Mathematics (A.S.-T)</h3>
                        <h3 className={"text-xl"}>Dec 2023</h3>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"italic text-xl"}>(3) Liberal Arts: (Math/Science,
                            Social/Behavioral Science, Arts/Humanities) (A.A.)</h3>
                        <h3 className={"text-xl"}>Dec 2022</h3>
                    </div>
                    <li className={"text-xl"}>
                        President’s & Ann Ruff Memorial Scholarship, Presidents Outstanding Academic Award
                    </li>
                    <li className={"text-xl"}>
                        Phi Theta Kappa Member, Dean’s List (6x), Honors Student, Commencement Speaker (2 of 172)
                    </li>

                    <h3 className={"text-xl pt-8"}><strong>Relevant Coursework: </strong>Linear Algebra, Discrete Mathematics, Differential Equations,
                        Data Structures & Algorithms (Online Udemy course--In Progress)
                    </h3>
                    <h3 className={"text-xl pt-2"}><strong>Technical Skills: </strong>Python, React, HTML/CSS, SQL (SQLite3), Git, Basic Java, Graphics Design
                    </h3>
                </div>
            </div>

            <div>
                <div className={"mt-8 flex flex-col justify-center w-[1000px] gap-2"}>
                    <h1 className={"font-bold text-2xl"}>PROFESSIONAL EDUCATIONAL EXPERIENCES</h1>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"underline text-xl"}>TEAM MEMBER (SPRING 2024 WINNER)</h3>
                        <h3 className={"italic text-xl"}>Virtual, CA</h3>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"italic text-xl"}>NASA L’SPACE - Proposal Writing & Evaluation Experience Academy</h3>
                        <h3 className={"text-xl"}>Jan 2024 – Apr 2024</h3>
                    </div>
                    <li className={"text-xl"}>
                        Secured $10,000 in seed funding by coordinating with a team of students to write a
                        winning proposal about space planning logistics software (NDA signed)
                    </li>
                    <li className={"text-xl"}>
                        Acted as the chair on a proposal writing committee
                    </li>


                    <div className="mt-4 flex flex-row justify-between items-center w-full">
                        <h3 className={"underline text-xl"}>TEAM MEMBER</h3>
                        <h3 className={"italic text-xl"}>Virtual / Armstrong Flight Research Center, CA</h3>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"italic text-xl"}>NASA Community College Aerospace Scholars (NCAS)</h3>
                        <h3 className={"text-xl"}>Jan 2023 – Jul 2023</h3>
                    </div>
                    <li className={"text-xl"}>
                        Worked with a team of students to develop and propose solutions to problems,
                        such as battery and range, revolving around emergency EVTOL vehicles within NASA’s ARMD and UAM.
                    </li>
                </div>
            </div>

            <div>
                <div className={"mt-8 flex flex-col justify-center w-[1000px] gap-2"}>
                    <h1 className={"font-bold text-2xl"}>PERSONAL PROJECTS</h1>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"underline text-xl"}>Weather Application – Python</h3>
                    </div>
                    <li className={"text-xl"}>
                        Integrated OpenWeatherMap API to retrieve real-time weather data for any location.
                    </li>
                    <li className={"text-xl"}>
                        Designed a user-friendly GUI with Tkinter & utilized JSON data parsing to display information.
                    </li>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"underline text-xl"}>(Not Finished) Text Adventure Game – Python, Kivy, TinyDB</h3>
                    </div>
                    <li className={"text-xl"}>
                        Developing an interactive text-based adventure game with a Kivy-based GUI.
                    </li>
                    <li className={"text-xl"}>
                        Using TinyDB to manage and store in-game player choices in a lightweight, NoSQL database.
                    </li>

                </div>
            </div>

            <div>
                <div className={"mt-8 flex flex-col justify-center w-[1000px] gap-2"}>
                    <h1 className={"font-bold text-2xl"}>WORK EXPERIENCE</h1>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"underline text-xl"}>CLAIMS MANAGER – ASSISTANT DIRECTOR’S AID</h3>
                        <h3 className={"italic text-xl"}>Ridgecrest, CA</h3>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"italic text-xl"}>Veterans Disability Help, LLC</h3>
                        <h3 className={"text-xl"}>Mar 2023 - Jul 2023</h3>
                    </div>
                    <li className={"text-xl"}>
                        Communicated daily with 35+ clients on policy claims.
                    </li>
                    <li className={"text-xl"}>
                        Processed hundreds of claims daily, increasing client’s disability income, often by a factor of 80%.
                    </li>


                    <div className="mt-4 flex flex-row justify-between items-center w-full">
                        <h3 className={"underline text-xl"}>TUTOR – TEACHER’S ASSISTANT (SPEECH AND ENGLISH)</h3>
                        <h3 className={"italic text-xl"}>Ridgecrest, CA</h3>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"italic text-xl"}>Cerro Coso Community College</h3>
                        <h3 className={"text-xl"}>Jan 2022 –Dec 2022 / Aug 2023 – May 2024</h3>
                    </div>
                    <li className={"text-xl"}>
                        Collaborated with students to complete homework assignments, identify lagging skills,
                        and correct weaknesses. Created Visual Aid Drawings and Work Instructions for Assemblies.
                    </li>
                    <li className={"text-xl"}>
                        Supported students with helpful study habits and exam strategies.
                    </li>
                </div>
            </div>

            <div>
                <div className={"mt-8 flex flex-col justify-center w-[1000px] gap-2"}>
                    <h1 className={"font-bold text-2xl"}>ADDITIONAL</h1>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className={"text-xl"}><strong>Awards:</strong> Veteran’s Disability Help LLC: Core Values
                            Award, Opportunities for Learning: Presidential Hall’s Award <br/>
                            <strong>Volunteer Work:</strong> Bethel Baptist Church (8 years)
                        </h3>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Resume;