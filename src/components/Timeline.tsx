interface TimelineItem{
	title: string;
	company: string;
	date: string;
	description: string;
}

const Timeline = () => {

	const timelineData: TimelineItem[] = [
		{
			title: "Front-End Developer",
			company: "Company A",
			date: "Jan 2020 - Dec 2023",
			description:
				"Developed responsive web applications using React, enhancing user experience and performance."
		},
		{
			title: "UI/UX Engineer",
			company: "Company B",
			date: "Mar 2018 - Dec 2019",
			description:
				"Crafted intuitive user interfaces and collaborated with cross-functional teams."
		}
	];

	return (
		<div className="col-12">
			<section className="timeline">
				<div className="timeline__container">
					{timelineData.map((item, index) => (
						<div className="timeline__item" key={index}>
							<h3>{item.title}</h3>
							<p>{item.company}</p>
							<span className="timeline-date">{item.date}</span>
							<p className="timeline-description">{item.description}</p>
						</div>
					))}

				</div>
			</section>
		</div>
	)
};

export default Timeline;