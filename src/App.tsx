import React, {useRef} from 'react';
import { Section, Button, Grid, Avatar, Row, Col, Timeline, Pictogram, Wave, ImageHover, ImageModel} from "./components/components"
//import Section from "./components/section/index";
import "./app.scss"

const scroll = (ref:any) => window.scrollTo(0, ref.current.offsetTop)

const lang: string[] = [
  "js", "csharp", "css", "html", "html5", "java", "php", "python", "sass", "sql", "typescript"
];
const frameworks: string[] = [
  "antd", "hibernate", "materialui", "processing", "react", "react_native", "spring",
];

const programs: string[] = [
  "autocad", "git", "intelij", "office", "photoshop", "rhinoceros", "vscode"
];

function App() {

  const refAbout = useRef(1);
  const refExperience = useRef(2);
  const refCV = useRef(3);
  const refProjects = useRef(4);
  const refContanct = useRef(5);

  return (
    <div>
      <Section>
        <Row center middle style={{ minHeight: "93vh" }}>
          <div style={{ width: 200, padding: 15, paddingTop: 40 }}>
            <Avatar
              url={require("./images/avatar_2.jpg")}
              style={{ width: "100%" }}
            />
          </div>
          <div
            className="banner-ItemsHolder"
            style={{ width: 320, padding: 15 }}
          >
            <h1 className="titleName">Gavin den Hollander</h1>
            <Button onClick={() => scroll(refAbout)} color="off-white">
              Over Mij
            </Button>
            <Button
              onClick={() =>
                window.open("https://github.com/GavinDH", "_blank")
              }
              color="dark"
            >
              GitHub
            </Button>
            <Button onClick={() => scroll(refCV)}>Curriculum vitae</Button>
            <Button color="off-white" onClick={() => scroll(refExperience)}>
              Ervaring
            </Button>
            <Button color="dark" onClick={() => scroll(refProjects)}>
              Projecten
            </Button>
            <Button onClick={() => scroll(refContanct)}>Contact</Button>
          </div>
        </Row>
      </Section>
      <Section
        type="off-white"
        style={{ minHeight: 200, paddingTop: 50, paddingBottom: 100 }}
        refProp={refAbout}
      >
        <Row center>
          <Col size={5} scale="xl">
            <h1>Over Mij</h1>
            <div>
              Mijn naam is Gavin den Hollander, 24 jaar, en ik woon in
              Zwijndrecht. Vanaf kinds af aan ben ik altijd nieuwsgierig en
              leergierig geweest. Hierdoor wilde ik altijd weten hoe iets werkt en
              hoe dingen gemaakt worden. Dit geldt ook voor websites en met veel
              zoeken en proberen heb ik op mijn 14de mijn eerste website gemaakt.
              Hij was niet mooi of goed geschreven maar wat was ik trots. Vanaf
              dat moment ben ik altijd bezig geweest met programmeren. Omdat ik
              programmeren voornamelijk als een hobby zag ben ik op mijn 17de de
              opleiding Scheeps- & Jachtbouw gaan volgen op het STC in Rotterdam.
              Eenmaal in mijn tweede jaar ben ik erachter gekomen dat dit toch
              niet mijn ding was. Alsnog heb ik de opleiding afgemaakt en ben ik
              nu bezig met de opleiding informatica aan de Hogeschool Rotterdam.
            </div>

          </Col>
          <Col size={3} style={{ maxHeight: 200 }} addClass="hide-1290">
            <Timeline />
          </Col>
        </Row>
      </Section>
      <Wave color="454545" />
      <Section
        type="dark"
        style={{ minHeight: 200, paddingTop: 20, paddingBottom: 60 }}
        refProp={refExperience}
      >
        <Row center>
          <Col size={5} scale="xl" addClass="align-items">
            <h1 className="left no-padding">Ervaring</h1>
            <div>
              {lang.map((i) => (
                <Pictogram url={require(`./images/lang/${i}.png`)} />
              ))}
            </div>
            <div>
              {frameworks.map((i) => (
                <Pictogram url={require(`./images/frameworksOrLibs/${i}.png`)} />
              ))}
            </div>
            <div>
              {programs.map((i) => (
                <Pictogram url={require(`./images/programs/${i}.png`)} />
              ))}
            </div>
          </Col>
          <Col size={3} style={{ maxHeight: 200 }} addClass="hide-1290">
            {" "}
          </Col>
        </Row>
      </Section>
      <Section type="purple" style={{ minHeight: 200, paddingTop:50 }} refProp={refCV}>
        <Row center>
          <Col size={5} scale="xl" addClass="align-items hide-1290">
            <h1 className="left">Curriculum vitae</h1>
            <ImageHover image={require("./images/quintor.jpeg")}>Minor Cyber Security</ImageHover>
            <ImageHover image={require("./images/quintor.jpeg")}>Minor Fullstack Java</ImageHover>
            <ImageHover image={require("./images/cofano.jpg")}>3de jaars Stage Cofano software solutions</ImageHover>
            <ImageHover image={require("./images/printing.jpg")}>Eigenaar CT Innovations</ImageHover>
            <ImageHover image={require("./images/hr.jpeg")}>Start HBO Informatica</ImageHover>
          </Col>
          <Col size={3} scale="xl">
            <ImageModel
            src={require("./images/cv.png")} imageStyle={{ width: '100%' }} alt="CV" />
          </Col>
        </Row>
       
      </Section>
      <Wave color="f7f7f7" bgColor="840bc0"/>
      <Section type="off-white" refProp={refProjects}>
        <Row center>
          <Col size={8} scale="xl" addClass="align-items">
            <h1 className="left no-padding">Projecten</h1>
            <Row style={{padding:0,margin:0}}>
              <Col size={6} scale="xl" addClass="align-items">
                <ImageHover image={require("./images/project-d.png")}>
                  <p>Project d had als doel kijken of het mogelijk is de impuls aankopen in een winkel te vergroten,</p>
                  <p>Hiervoor hebben we een systeem gemaakt wat mensen in een winkel trackt en omvormt in een heatmap.</p>
                  <p>Dit maakt het mogelijk de beste plekken voor producten in een winkel te zien.</p>
                  <p>uiteindelijke hebben we ook eye tracking toegevoegd zodat we de meest bekeken producten in een schap kunnen zien.</p>
                  <p>Gebruikte technieken:</p>
                  <p>Python voor human detectie an eye tracking</p>
                  <p> - OpenCV</p>
                  <p> - Yolo v3 (CPU)</p>
                  <p> - Dlib</p>
                  <p>PHP voor de verbinding met de database</p>
                  <p>ReactJS</p>
                  <p> - Ant design</p>


                  </ImageHover>

              </Col>
              <Col size={6} scale="xl">
                <ImageHover image={require("./images/cloudsourced.jpeg")}>
                  <p>Minor Quintor</p>
                  <p>Eind jaar 3 heb ik de minor fullstack java developer gevold.</p>
                  <p>In dit project hebben we een component outsource app gemaakt.</p>
                  <p>De frontend is gemaakt in React en de backend in Java</p>
                  <p>Tijdens dit project is er ook een hoop aandacht geweest voor testen</p>
                  <p>Gebruikte technieken:</p>
                  <p>React</p>
                  <p> - Typescript</p>
                  <p> - Ant Design</p>
                  <p>Java</p>
                  <p> - Spring Boot</p>
                  <p> - PostGres</p>
                  <p> - Hibernate</p>
                  <p> - Lombok</p>
                </ImageHover>
              </Col>
              <Col size={12} scale="xl">
                <ImageHover image={require("./images/quintor.jpeg")}>
                  <p>Portfolio</p>
                  <p>Dit portfolio is ook een van mijn laatste projecten.</p>
                  <p>Voor dit project heb ik alleen gebruik gemaakt van typescript, React en Sass</p>
                  <p>Ik heb expres geen externe libareries gebruikt voor componenten en styling omdat ik het een leuke uitdaging vond alles zelf te maken.</p>
                  <p>Gebruikte technieken:</p>
                  <p>React</p>
                  <p> - Typescript</p>
                  <p> - scss</p>
                </ImageHover>
              </Col>

            </Row>

          </Col>
        </Row>
        
      </Section>
      <Section type="dark" refProp={refContanct}>
        <Row center>
          <a href="tel:+31651969839" ><Pictogram url={require(`./images/icon/phone.png`)} width={30} /></a>
          <a href="https://wa.me/0031651969839"><Pictogram url={require(`./images/icon/whatsapp.png`)} width={30} /></a>
          <a href="mailto:gavindhollander@gmail.com" ><Pictogram url={require(`./images/icon/email.png`)} width={30} /></a>
          <a href="#" onClick={() => window.open("https://www.linkedin.com/in/gavin-den-hollander-06a96214a", "_blank")}><Pictogram url={require(`./images/icon/linkedin.png`)} width={30} /></a>

        </Row>
</Section>
    </div>
  );
}

export default App;
