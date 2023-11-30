"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
	const { ref } = useSectionInView("Experience");
	const { theme } = useTheme();

	const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

	const handleToggleExpand = (index: number) => {
		setExpandedIndices((prevIndices) =>
			prevIndices.includes(index)
				? prevIndices.filter((i) => i !== index)
				: [...prevIndices, index]
		);
	};

	const isExpanded = (index: number) => expandedIndices.includes(index);

	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>My experience</SectionHeading>
			<VerticalTimeline lineColor="">
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background:
									theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight:
									theme === "light"
										? "0.4rem solid #9ca3af"
										: "0.4rem solid rgba(255, 255, 255, 0.5)",
							}}
							date={item.date}
							icon={item.icon}
							iconStyle={{
								background:
									theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
								fontSize: "1.5rem",
							}}
						>
							<h3 className="font-semibold capitalize">{item.title}</h3>
							<p className="font-normal !mt-0">{item.location}</p>
							{isExpanded(index) ? (
								<React.Fragment>
									<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
										{item.description}
									</p>
									<span
										className="!mt-1 !font-normal text-gray-700 dark:text-white/75 cursor-pointer underline"
										onClick={() => handleToggleExpand(index)}
									>
										Read less
									</span>
								</React.Fragment>
							) : (
								<React.Fragment>
									<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
										{item.description.length > 120
											? `${item.description.slice(0, 120)}...`
											: item.description}
									</p>
									{item.description.length > 120 && (
										<span
											className="!mt-1 !font-normal text-gray-700 dark:text-white/75 cursor-pointer underline"
											onClick={() => handleToggleExpand(index)}
										>
											Read more
										</span>
									)}
								</React.Fragment>
							)}
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
