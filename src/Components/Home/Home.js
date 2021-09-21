import React from 'react';
import './Home.css';
import { Row, Col, Card } from 'react-bootstrap';


const Home = () => {

	const scrollToElement = (id) => {
		document.getElementById(id).scrollIntoView({ behavior: "smooth" });
	};
    
	return (
		<div className="contentContainer">
			<h4 id="About" className="pt-4" style={{ fontWeight: "bolder" }}>About Me <i className="fas fa-address-card ms-2"></i></h4>
			<hr />
			<Row>
				<Col sm="12" lg="5" xl="4" className="text-center">
					<img
						src="/Images/profile.jpg"
						alt="profile"
						width="300px"
						height="300px"
						className="profilePicture"
					/>
				</Col>
				<Col sm="12" lg="7" xl="8" style={{ padding: "30px" }}>
					<div className="mb-4">
						I am a software engineer specializing in end-to-end, full stack development of web-based enterprise applications.
						I am currently employed by Med-Legal, LLC in San Dimas California.
					</div>
					<div>
						When I'm not coding I love spending my time outdoors and am an avid surfer, snowboarder and fisherman. 
						My hobbies and passion for food are always taking me to new places, including Colorado, Hawaii, Costa Rica, Mexico, and Japan.
					</div>
				</Col>
			</Row>

			<h4 id="Experience" className="pt-4" style={{ fontWeight: "bolder" }}>Experience <i className="fas fa-laptop-code ms-2"></i></h4>

			<hr className="b-4" />

			{/* Med-Legal */}
			<Row className="ms-4 mt-4 pt-4">
				<Col className="ms-4">
					<img
						src="/Images/ML-logo.png"
						alt="ML-logo"
						width="52px"
						height="42px"
						className="companyLogo me-4"
						style={{ marginLeft: "148px"}}
					/>
					<div className="d-inline-block ms-3">
						<h6>Jr. Software Engineer - <a href="https://med-legal.com/" target="_blank" rel="noreferrer" className="companyLink" style={{ textDecoration: "none" }}>Med Legal, LLC</a></h6>
						<h6 className="experienceDates">Oct 2020 - Present</h6>
					</div>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col sm="4" md="3" className="text-end" style={{ borderRight: "2px solid slategray" }}>
					<h6>Responsibilities</h6>
				</Col>
				<Col>
					<ul>
						<li>Scrum team member responsible for end-to-end rebuild of Evedent, the company's flagship case management system</li>
						<li>Full stack development of Med-Legal's Internal Application Portal, used by employees to file and view Helpdesk tickets, monitor the progress of tasks, and add client profiles</li>
						<li>Creation of .NET API to automate the process of creating a client's Microsoft D365 profile upon submission of a DocuSign PDF customer preference sheet</li>
						<li>Routinely address production bugs and improvements in existing Angular, React and .NET web applications</li>
					</ul>
				</Col>
			</Row>
			<Row className="mb-4">
				<Col sm="4" md="3" className="text-end" style={{ borderRight: "2px solid slategray" }}>
					<h6>Skills</h6>
				</Col>
				<Col>
					<ul>
						<li>React, .NET Web APIs, SQL, Scrum/Agile</li>
					</ul>
				</Col>
			</Row>
			
			{/* UCI Research */}
			<Row className="ms-4 mt-4 pt-4">
				<Col className="ms-4">
					<img
						src="/Images/uci-logo.png"
						alt="ML-logo"
						width="200px"
						height="50px"
						className="companyLogo me-4"
					/>
					<div className="d-inline-block ms-3">
						<h6>Research Team Member - <a href="https://www.informatics.uci.edu/" target="_blank" rel="noreferrer" className="companyLink" style={{ textDecoration: "none" }}>UCI Dept of Informatics</a></h6>
						<h6 className="experienceDates">Dec 2019 - Jun 2020</h6>
					</div>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col xs="4" sm="3" className="text-end" style={{ borderRight: "2px solid slategray" }}>
					<h6>Responsibilities</h6>
				</Col>
				<Col>
					<ul>
						<li>Ionic mobile application development for Android and iOS devices</li>
						<li>Incorporated personal informatics data into dynamically rendered, animated stickers used in Snapchat to provide more context for stories</li>
						<li><a href="https://github.com/depstein/sticker-server" target="_blank" rel="noreferrer" className="companyLink" style={{ textDecoration: "none" }}>GitHub</a></li>
					</ul>
				</Col>
			</Row>
			<Row className="mb-4 pb-4">
				<Col xs="4" sm="3" className="text-end" style={{ borderRight: "2px solid slategray" }}>
					<h6>Skills</h6>
				</Col>
				<Col>
					<ul>
						<li>Angular/Ionic, Heroku, Snapchat API</li>
					</ul>
				</Col>
			</Row>

			<h4 id="Skills" className="mt-4 pt-4" style={{ fontWeight: "bolder" }}>Skills <i className="fas fa-layer-group ms-2"></i></h4>
			<hr />
			<Row className="my-4 py-4">
				<Col xs="4" sm="4" md="3">
					<Card className="mb-3 skillsCard" onClick={() => window.open("https://reactjs.org/", "_blank")}>
						<div className="text-center">
							<img className="skillsIcon" src="/Images/react.png" alt="react"></img>
							<h6 className="text-center p-2">React</h6>
						</div>
					</Card>
				</Col>
				<Col xs="4" sm="4" md="3">
					<Card className="mb-3 skillsCard" onClick={() => window.open("https://angular.io/", "_blank")}>
						<div className="text-center">
							<img className="skillsIcon" src="/Images/angular.svg" alt="angular"></img>
							<h6 className="text-center p-2">Angular / Ionic</h6>
						</div>
					</Card>
				</Col>
				<Col xs="4" sm="4" md="3">
					<Card className="mb-3 skillsCard" onClick={() => window.open("https://dotnet.microsoft.com/apps/aspnet/apis", "_blank")}>
						<div className="text-center">
							<img className="skillsIcon" src="/Images/dotnet.png" alt="dotnet web api"></img>
							<h6 className="text-center p-2">.NET Web API</h6>
						</div>
					</Card>
				</Col>
				<Col xs="4" sm="4" md="3">
					<Card className="mb-3 skillsCard" onClick={() => window.open("https://react-bootstrap.github.io/", "_blank")}>
						<div className="text-center">
							<img className="skillsIcon" src="/Images/bootstrap.png" alt="bootstrap"></img>
							<h6 className="text-center p-2">Bootstrap</h6>
						</div>
					</Card>
				</Col>
				<Col xs="4" sm="4" md="3">
					<Card className="mb-3 skillsCard" onClick={() => window.open("https://git-scm.com/", "_blank")}>
						<div className="text-center">
							<img className="skillsIcon" src="/Images/git.png" alt="git"></img>
							<h6 className="text-center p-2">Git</h6>
						</div>
					</Card>
				</Col>
				<Col xs="4" sm="4" md="3">
					<Card className="mb-3 skillsCard" onClick={() => window.open("https://azure.microsoft.com/en-us/services/devops/", "_blank")}>
						<div className="text-center">
							<img className="skillsIcon" src="/Images/azuredevops.png" alt="azure devops"></img>
							<h6 className="text-center p-2">Azure DevOps</h6>
						</div>
					</Card>
				</Col>
				<Col xs="4" sm="4" md="3">
					<Card className="mb-3 skillsCard" onClick={() => window.open("https://www.scrum.org/", "_blank")}>
						<div className="text-center">
							<img className="skillsIcon" src="/Images/scrum.png" alt="scrum"></img>
							<h6 className="text-center p-2">Scrum</h6>
						</div>
					</Card>
				</Col>
				<Col xs="4" sm="4" md="3">
					<Card className="mb-3 skillsCard" onClick={() => window.open("https://www.scouting.org/about/research/eagle-scouts/", "_blank")}>
						<div className="text-center">
							<img className="skillsIcon" src="/Images/bsa.png" alt="boy scouts"></img>
							<h6 className="text-center p-2">Eagle Scout</h6>
						</div>
					</Card>
				</Col>
			</Row>

			<h4 id="Hobbies" className="pt-4" style={{ fontWeight: "bolder" }}>Hobbies <i className="fas fa-compass ms-2"></i></h4>
			<hr />
			<Row className="my-4 py-4">
				<Col className="hobbyImageContainer" sm="12" md="6">
					<div style={{ backgroundColor: "black", position: "relative" }}>
						<img src="/Images/surfing.jpg" alt="surfingPic" className="hobbyImage"></img>
						<div className="hobbyImageOverlay p-4">
							<h4 className="m-auto text-center mt-4">
								{/*<i className="fas fa-water me-2"></i>*/}
								Surfing
							</h4>
							<hr />
							<div className="text-center px-4">
								<p>
									One of the main passions in my life, I started surfing over 10 years ago and haven't stopped since. 
									What I love about surfing is that it combines fun, exercise, connecting to the outdoors and traveling.
								</p>
								
								<p>
									I was a part of my high school's competitive
									surf team and UC Irvine's surf team, which competed in the NSSA Collegiate Series. 
								</p>
							</div>
						</div>
					</div>
				</Col>
				<Col className="hobbyImageContainer" sm="12" md="6">
					<div style={{ backgroundColor: "black", position: "relative" }}>
						<img src="/Images/snowboarding.png" alt="snowboardingPic" className="hobbyImage"></img>
						<div className="hobbyImageOverlay p-4">
							<h4 className="m-auto text-center mt-4">
								{/*<i className="fas fa-mountain me-2"></i>*/}
								Snowboarding
							</h4>
							<hr />
							<div className="text-center px-4">
								<p>
									Much like surfing, snowboarding is a sport I started young and never gave up. I have been snowboarding since I was 8 years old and 
									is always what I look forward to the most each winter. 
								</p>
								
								<p>
									I was a part of the UC Irvine ski and snowboard club, where I made a bunch of my closest friends as well as my S.O. 
								</p>
							</div>
						</div>
					</div>
				</Col>
				<Col className="hobbyImageContainer" sm="12" md="6">
					<div style={{ backgroundColor: "black", position: "relative" }}>
						<img src="/Images/fishing.jpg" alt="fishingPic" className="hobbyImage"></img>
						<div className="hobbyImageOverlay p-4">
							<h4 className="m-auto text-center mt-4">
								{/*<i className="fas fa-fish me-2"></i>*/}
								Fishing
							</h4>
							<hr />
							<div className="text-center px-4">
								 <p>
									Fishing combines my appreciation of the outdoors with my passion for food. I enjoy both freshwater and saltwater fishing, especially when I can 
									cook and eat what I catch. 
								</p>

								<p>
									One of my favorite activities is camping out in the Eastern Sierra mountains, catching and cooking wild trout from nearby streams.
								</p>
							</div>
						</div>
					</div>
				</Col>
				<Col className="hobbyImageContainer" sm="12" md="6">
					<div style={{ backgroundColor: "black", position: "relative" }}>
						<img src="/Images/guitar.jpg" alt="guitarPic" className="hobbyImage"></img>
						<div className="hobbyImageOverlay p-4">
							<h4 className="m-auto text-center mt-4">
								{/*<i className="fas fa-music me-2"></i>*/}
								Music
							</h4>
							<hr />
							<div className="text-center px-4">
									<p>
									I love playing guitar. Pictured here is my Epiphone Custom Pro Les Paul and Vox Valvetronix VT20X.
									</p>

									<p>
									I enjoy many types of music but especially Classic/Alternative Rock, Reggae, and Hip Hop. 
									</p>

									<p>
										Some of my favorite artists are the Red Hot Chili Peppers, Dominic Fike, CCR, Death Cab For Cutie, Bon Iver, Surfaces, and Mac Miller.
									</p>
							</div>
						</div>
					</div>
				</Col>
			</Row>

			<div className="sidebar">
				<div className="verticalLineTop mb-3"></div>
				<div style={{ textAlign: "right" }}><h6 className="sidebarLink" onClick={() => scrollToElement("About")}>About</h6></div>
				<div style={{ textAlign: "right" }}><h6 className="sidebarLink" onClick={() => scrollToElement("Experience")}>Exp.</h6></div>
				<div style={{ textAlign: "right" }}><h6 className="sidebarLink" onClick={() => scrollToElement("Skills")}>Skills</h6></div>
				<div style={{ textAlign: "right" }}><h6 className="sidebarLink" onClick={() => scrollToElement("Hobbies")}>Hobbies</h6></div>
				<div className="verticalLineBottom mt-3"></div>
			</div>

		</div>
	);
};

export default Home;