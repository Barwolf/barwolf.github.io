import React from 'react';
import {motion} from "motion/react";
import profile_image from "../images/NASA.jpeg";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import CTAButton from "../components/CTAButton";
import Icon from "../components/Icon";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import resgit from '../images/resgit.svg';

function Projects() {
    return (

        <div className="bg-gray-500 p-10 flex flex-col justify-center items-center gap-10">
            <motion.div
                initial={{ opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.8 }
                }}

                whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.1 },
                }}
                className="w-[1000px] p-10 rounded-2xl flex justify-center items-center gap-10 bg-white drop-shadow-xl">

                <div className="p-10 rounded-2xl gap-2 flex flex-col justify-center items-left">
                    <Link to="/">
                        <CTAButton content={"Back to Portfolio"}/>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.8 }
                }}

                whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.1 },
                }}
                className="w-[1000px] p-10 rounded-2xl flex justify-center items-center gap-10 bg-white drop-shadow-xl">

                <div className="p-10 rounded-2xl gap-2 flex flex-col justify-center items-left">
                    <img src={resgit} alt="profile picture"
                         className={"w-[300px] rounded-2xl object-cover object-center mb-4"}/>
                    <h1 className="text-3xl">
                        ResGit – Hackathon Project Reflection
                    </h1>
                    <p className={"text-lg"}>
                        At the start of the 24-hour <strong>hackathon</strong>, I had no prior experience with
                        <strong> React</strong> or <strong>Next.js</strong>.
                        Over the course of the event, I rapidly picked up new skills, including <strong>team communication</strong>,
                        <strong> GitHub</strong> repository management, and a foundational understanding of <strong>API calls</strong>—thanks to guidance
                        from my amazing teammates (Ashley, Kierann, and Logan). One of the most valuable takeaways
                        for me was the significant improvement
                        in my front-end development skills. By combining <strong>Tailwind CSS</strong> with my prior experience using
                        <strong> Adobe XD</strong>, I was able to meaningfully contribute to the design and implementation
                        of our interface.
                        <br/><br/>
                        Our project, ResGit, is a resume streamlining tool designed to simplify the job application
                        process. It reads an existing resume, extracts all relevant experiences into a master list,
                        and allows users to selectively compile a customized, neatly formatted resume using LaTeX.
                        This tool aims to save time and effort when tailoring resumes for different job applications.
                        <br/><br/>
                        While 24 hours was not nearly enough time to learn even basic React for me, the experience sparked a genuine
                        interest in the framework. Since then, I’ve continued learning React and Tailwind CSS, which
                        directly led to the development of this personal portfolio.
                        <br/><br/>
                        In addition, another teammate and I have continued developing ResGit beyond the hackathon.
                        We've been working on a standalone local version using Python and Tkinter, expanding on the
                        original concept in a more familiar environment.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default Projects;