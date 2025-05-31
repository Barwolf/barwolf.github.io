import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

import profile_image from '../images/NASA.jpeg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import award from '../images/award.svg';
import grad_cap from '../images/grad_cap.svg';
import cartoon from '../images/cartoon.svg';
import resgit from '../images/resgit.svg';
import piano from '../images/piano.svg';
import earth from '../images/earth.svg';
import background from '../images/background.svg';
import mars from '../images/mars.svg';

import CTAButton from './CTAButton';
import Button from './Button';
import Icon from './Icon';
import LinkedList from './LinkedList';

function BentoBox() {
    return (
        <div className="relative overflow-hidden bg-deepnavy p-10 flex flex-col justify-center items-center gap-10">
            <img src={background} className={"absolute top-[-300px] right-[-300px] w-5/6"}/>
            <motion.img
                    src={earth}
                    alt="logo"
                    className="absolute top-40 right-[-280px] max-w-none pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: "linear"
                    }}
                />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.8 }
                }}
                whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.1 },
                }}
                className="w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] p-4 sm:p-6 md:p-10 rounded-2xl flex flex-col md:flex-row sm:flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 bg-white drop-shadow-xl z-10"
            >
                <img
                    src={profile_image}
                    alt="profile picture"
                    className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] rounded-2xl object-cover object-center"
                />

                <div className="p-4 sm:p-6 md:p-10 rounded-2xl gap-2 flex flex-col justify-center items-start text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl">Hello, I'm</h1>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Jeremiah Lillion</h1>
                    <h1 className="text-xl sm:text-2xl md:text-3xl">Computer Science student at UCI</h1>

                    <div className="pt-3 sm:pt-4 gap-2 sm:gap-4 flex flex-col sm:flex-row justify-start items-center sm:items-start">
                        <Link to="/resume">
                            <Button content={"View Resume"} />
                        </Link>
                        <CTAButton content={"Contact Me"} link={""} />
                    </div>

                    <div className="pt-3 sm:pt-4 gap-2 sm:gap-4 flex justify-center sm:justify-start items-center">
                        <Icon content={github} link={"https://github.com/Barwolf"} />
                        <Icon content={linkedin} link={"https://www.linkedin.com/in/jeremiah-lillion/"} />
                    </div>
                </div>
            </motion.div>


            <div className="max-w-[1000px] rounded-2xl gap-6 flex sm:flex-row flex-col justify-center items-stretch z-10">

            <motion.div
                    initial={{ opacity: 0, scale: 0.6}}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.35 }
                    }}

                    whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-full sm:w-1/2  py-10 rounded-2xl flex justify-center items-start gap-10 bg-white drop-shadow-xl z-10">
                    <div className="p-10 rounded-2xl gap-2 flex flex-col justify-center items-left">
                        <img src={award} alt="logo" className={"w-10"}/>
                        <h1 className="text-3xl align-top">
                            Achievements
                        </h1>
                        <p className={"text-xl"}>
                            NASA L'SPACE WINNER
                            <br/>
                            <br/>
                            Regents Scholarship (UCI)
                            <br/>
                            UCIAA Book Scholarship (UCI)
                            <br/>
                            <br/>
                            President’s & Ann Ruff Memorial Scholarship (CCCC)
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.6}}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.35 }
                    }}

                    whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-full sm:w-1/2 py-10 rounded-2xl flex justify-center items-start bg-white drop-shadow-xl">
                    <div className="p-10 rounded-2xl gap-2 flex flex-col justify-center items-left">
                        <img src={grad_cap} alt="logo" className={"w-16 pb-4"}/>
                        <h1 className="text-3xl">
                            Education
                        </h1>
                        <p className={"text-xl"}>
                            B.S. Computer Science - UCI 2026
                            <br/>
                            <br/>
                            A.S. Mathematics with honors - Cerro Coso
                            <br/>
                            (3) Liberal Arts: (Math/Science, Social/Behavioral Science, Arts/Humanities) (A.A.) -
                            Cerro Coso

                        </p>
                    </div>
                </motion.div>
            </div>

            <img src={background} className={"absolute top-[500px] left-[-300px] w-5/6 pointer-events-none z-0"}/>
            <motion.img
                src={mars}
                alt="logo"
                className="absolute top-200 left-[-280px] max-w-none pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear"
                }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.6}}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .35 }}

                whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.1 },
                }}

                className="w-full sm:w-[1000px] sm:p-10 rounded-2xl flex justify-center items-center gap-10 bg-white drop-shadow-xl">

                <div className="p-10 rounded-2xl gap-2 flex flex-col justify-center items-left">
                    <h1 className={"text-3xl"}>About Me</h1>
                    <p className={"text-xl"}>I am a third-year <strong>Computer Science</strong> student at <strong>UC Irvine</strong> with an Associate of
                        Science in <strong>Mathematics</strong> and three (3) other A.A degrees from
                        <strong> Cerro Coso Community College.</strong> My journey includes participating in the
                        <strong> NASA</strong> Community College Aerospace Scholars (NCAS) program and being a member of the winning team in the
                        Spring 2024 <strong>NASA</strong> L'SPACE NPWEE national competition. Currently, I am focused
                        on pursuing research opportunities at <strong>UCI</strong> to deepen my understanding of Computer Science
                        and contribute to impactful, real-world projects that advance technology and benefit society.
                    </p>
                </div>
            </motion.div>

            <div className="w-full sm:w-[1000px] sm:flex-row flex-col rounded-2xl flex justify-center items-center gap-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.6}}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .35 }}

                    whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-full sm:w-1/2 h-full py-10 rounded-2xl flex justify-center items-start gap-10 bg-white drop-shadow-xl">
                    <div className="p-5 rounded-2xl gap-2 flex flex-col justify-center items-center">
                        <h1 className="text-3xl align-top pb-4">
                            My Projects
                        </h1>
                        <img src={cartoon} alt="logo" className={""}/>
                    </div>
                </motion.div>

                <div className="w-full sm:w-1/2 h-full flex flex-col justify-between gap-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6}}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .35 }}
                        whileHover={{
                            scale: 1.04,
                            transition: { duration: 0.1 },
                        }}
                        className="w-full flex-1 py-10 rounded-2xl flex self-start justify-center items-start bg-white drop-shadow-xl">
                        <div className="px-5 py-2 rounded-2xl gap-4 flex flex-col justify-center items-center">
                            <img src={resgit} alt="logo" className={"w-4/5"}/>
                            <h1 className="text-3xl align-top">
                                ResGit
                            </h1>
                            <CTAButton content={"GitHub Link"} link={"https://github.com/LogMif/ResGit-SacHacksVI"}/>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.6}}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .35 }}
                        whileHover={{
                            scale: 1.04,
                            transition: { duration: 0.1 },
                        }}
                        className="w-full flex-1 py-10 rounded-2xl flex self-start justify-center items-start bg-white drop-shadow-xl">
                        <div className="px-5 py-2 rounded-2xl gap-4 flex flex-col justify-center items-center">
                            <img src={piano} alt="logo" className={"w-3/5"}/>
                            <h1 className="text-3xl align-top">
                                Ostinato
                            </h1>
                            <CTAButton content={"GitHub Link"} link={""}/>
                        </div>
                    </motion.div>
                </div>

            </div>


            <motion.div
                initial={{ opacity: 0, scale: 0.6}}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .35 }}

                whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.1 },
                }}

                className="w-full sm:w-[1000px] p-10 rounded-2xl flex justify-center items-center gap-10 bg-white drop-shadow-xl">

                <div className="p-10 rounded-2xl gap-2 flex flex-col justify-center items-center">
                    <h1 className={"text-xl mb-6"}>Want to learn more about my <strong>projects</strong> and what I
                        <strong> learned?</strong></h1>
                    <Link to="/projects">
                        <CTAButton content={"Learn More"}/>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}

export default BentoBox;
