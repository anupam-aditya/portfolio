import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated from BIT Mesra",
		location: "Mesra, Ranchi",
		description:
			"I graduated after 4 years of B.Tech in Information Technology. I immediately found a job as a front-end developer.",
		icon: React.createElement(LuGraduationCap),
		date: "2019-2023",
	},
	{
		title: "Pave Money",
		location: "Bengaluru, Karnataka(Remote)",
		description:
			"Embarking on my journey with Pave Money as a Software Development Engineer (SDE) intern, I had the unique opportunity to work closely with the founders and a talented designer, taking on the role of the sole frontend developer. I played a pivotal role in converting user needs and features into tangible requirements, shaping the actual product. A testament to my dedication and proficiency, I successfully developed the company website within an impressive two-week timeframe, accomplishing this feat at 50% of the initially planned four weeks. This accelerated pace did not compromise on quality, showcasing my ability to thrive under tight deadlines. Throughout this experience, I meticulously crafted UI components and seamlessly integrated them with over 10 backend APIs, employing technologies such as React, HTML, CSS, and Javascript. Joining Pave Money as an SDE intern was not just a learning experience; it was an opportunity to contribute meaningfully to the company's success and strengthen my passion for creating impactful solutions in the dynamic startup landscape.",
		icon: React.createElement(CgWorkAlt),
		date: "May 2022 - July 2022",
	},
	{
		title: "Samsung R&D Institute India, Noida",
		location: "Noida, Uttar Pradesh",
		description:
			"During my tenure as a Winter Intern at Samsung R&D Institute India, Noida, I made impactful contributions to key projects, enhancing internal communication and streamlining operational processes. One notable achievement was my role in developing a communication platform, where I designed and implemented a highly responsive search bar using React. This innovation significantly improved user searches with faster autocomplete functionality, enhancing overall communication and collaboration within the company. \nAdditionally, I played a crucial part in the creation of a comprehensive dashboard in React aimed at efficiently managing various intern activities. Among my accomplishments, I designed and implemented a secure login portal, providing interns with real-time access to pending leave approvals, completed and assigned tasks, and other project management activities. My collaborative efforts with the web development team ensured seamless integration of the dashboard with existing systems and databases, promoting a cohesive and efficient workflow. \nTechnologies such as React, HTML, CSS, and Javascript were the building blocks of these projects, showcasing my proficiency in utilizing cutting-edge technologies to drive innovation. Joining Samsung R&D Institute India as a Winter Intern was an enriching experience that not only allowed me to contribute meaningfully to the organization's goals but also strengthened my commitment to leveraging technology for streamlined and impactful solutions in the ever-evolving tech landscape.",
		icon: React.createElement(FaReact),
		date: "Jan 2023 - July 2023",
	},
	{
		title: "Grad Commerce AI Services",
		location: "Hyderabad, Telangana",
		description:
			"As a Full Stack Developer at GradCommerce AI Services, I played a pivotal role in developing core modules for the mark-tech platform, seamlessly integrating backend and frontend functionalities. From crafting login, authentication, and registration processes to implementing drag-and-drop filter selection and dashboarding with Role-Based Access Control (RBAC), I ensured a user-friendly and feature-rich experience.\nMy contributions extended to creating the backend schema and APIs, establishing a seamless connection with Google Cloud Platform's BigQuery Tables and Storage Buckets. Leveraging GCP, I engineered a robust publish-subscribe (pub-sub) architecture that refined the data retrieval process and heightened the precision of ad analysis conducted by our machine learning model.\nEnsuring a smooth deployment process, I successfully deployed both the front-end and back-end using Vercel, demonstrating proficiency in optimizing the platform's performance. Throughout this journey, technologies such as ReactJS, Python, Flask, and GCP were the cornerstones of my development toolkit, showcasing my versatility and commitment to utilizing cutting-edge technologies in crafting innovative solutions. Joining GradCommerce AI Services as a Full Stack Developer, I contributed to the evolution of an advanced mark-tech platform, and I am excited to continue driving impactful solutions in dynamic startup environments.",
		icon: React.createElement(FaReact),
		date: "August 2023 - Present",
	},
] as const;

export const projectsData = [
	{
		title: "CorpComment",
		description:
			"I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "rmtDev",
		description:
			"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Word Analytics",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"MongoDB",
	"Redux",
	"GraphQL",
	"Express",
	"MySQL",
	"GCP",
	"Python",
	"Flask",
	"Framer Motion",
] as const;
