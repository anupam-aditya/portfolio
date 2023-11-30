"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				I graduated with a B.Tech. Degree in{" "}
				<span className="font-medium">Information Technology</span>, and my
				journey into{" "}
				<span className="font-medium">full-stack web development</span> began
				through self-learning via{" "}
				<span className="font-medium">
					YouTube videos, online blogs, and hands-on project building.
				</span>{" "}
				<span className="font-medium">full-stack web development</span>.{" "}
				<span className="italic">The thrill of problem-solving</span> has always
				been my favorite aspect of programming. I love the feeling of finally
				figuring out a solution to a problem. As a competitive coder, I've
				achieved a{" "}
				<span className="font-medium">specialist rating on Codeforces</span> and
				secured a <span className="font-medium">global rank of 502</span> in the
				Online ICPC India 2021, as well as{" "}
				<span className="font-medium">2494 globally</span> in the Meta Hacker
				Cup, qualifying for Round 2.
			</p>
			<p>
				My core stack revolves around{" "}
				<span className="font-medium">React and Next.js</span> complemented by
				MongoDB, Flask, Node.js, SpringBoot, and TypeScript. I'm enthusiastic
				about exploring new technologies and staying up-to-date with the latest
				trends in the software development landscape. I am currently looking for
				a <span className="font-medium">full-time position</span> as a software
				developer, I bring a strong foundation in problem-solving and a diverse
				skill set.
			</p>
			<p>
				<span className="italic">Outside the realm of coding</span>, I find joy
				in playing video games, watching movies, and spending quality time with
				my dog. I'm an avid learner, and my current pursuits include delving
				deeper into the I also enjoy{" "}
				<span className="font-medium">
					Spring Framework and honing my chess-playing skills.
				</span>
				. I am currently learning about{" "}
				<span className="font-medium">history and philosophy</span>. Always
				fueled by curiosity, I am eager to contribute my passion and skills to
				innovative software development projects.
			</p>
		</motion.section>
	);
}
