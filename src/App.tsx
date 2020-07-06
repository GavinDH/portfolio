import React, {useRef} from 'react';
import { Section, Button, Grid, Avatar, Row, Col, Timeline, Pictogram, Wave} from "./components/components"
//import Section from "./components/section/index";
import "./app.scss"


const scroll = (ref:any) => window.scrollTo(0, ref.current.offsetTop)

const test = ["1", "2","3", "4"];
const pictoIcons: string[] = [
  "https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png",
"https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
"https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png",
"https://cdn.iconscout.com/icon/free/png-256/sass-226054.png",
"https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/13691885491579517854-256.png",
"https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png",
"https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png",
"https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-python-icon.png",
"https://cdn.iconscout.com/icon/free/png-256/php-2038871-1720084.png",
"https://lh3.googleusercontent.com/proxy/N1wt76Wj8xuUP3lBYRSTFkJ6cHlltAHBigcyHINE_XjxpR6AX_lR7c6mALHy10DnDehpoE12bzQ1WCP-_QF1doj7NEOjTKD4VtKkh9d6Whb7XxF1sAtZp13NhbLsxrsQU2k",
"https://cdn.iconscout.com/icon/free/png-256/c-sharp-3-599433.png",
];

const pictoIcons2: string[] = [
  "https://camo.githubusercontent.com/a25ae4eec22b44056ec7471a62893673fcd0dc99/68747470733a2f2f66696c6573746f72652e6861737572612e696f2f76312f66696c652f37373233633233342d343236332d343539392d393536382d396436373838313338633562",
  "https://images.opencollective.com/ant-design/6f1eb50/logo/256.png",
  "https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/10218066661551941702-256.png",
  "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-256.png",
  "https://miro.medium.com/max/512/1*k73wp-nDid53eeQ0RDGvdw.png",
  "https://lh3.googleusercontent.com/proxy/K4uDyP-PM9B-aPbNfIILJK_T7-EYFflrzZAVn8W8lAdi7QMmyygARMtG3qLEioN7gJvEfwc_gkyEsf3I-RQS9g",
  "https://tools.jboss.org/features/images/hibernate_icon_256px.png",

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
            Mijn naam is Gavin den Hollander, 23 jaar, en ik woon in
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
            nu bezig met de opleiding informatica aan de Hogeschool Rotterdam.{" "}
          </Col>
          <Col size={3} style={{ maxHeight: 200 }} addClass="hide-1290">
            <Timeline />
          </Col>
        </Row>
      </Section>
      <Wave color="454545" />
      <Section
        type="dark"
        style={{ minHeight: 200, paddingTop: 60, paddingBottom: 60 }}
        refProp={refExperience}
      >
        <Row center>
          <Col size={5} scale="xl" addClass="align-items">
            <div>
              {pictoIcons.map((i) => (
                <Pictogram url={i} />
              ))}
            </div>
            <div>
              {pictoIcons2.map((i) => (
                <Pictogram url={i} />
              ))}
            </div>
          </Col>
          <Col size={3} style={{ maxHeight: 200 }} addClass="hide-1290">
            {" "}
          </Col>
        </Row>
      </Section>
      <Section type="purple" style={{ minHeight: 200 }} refProp={refCV}>
        CV
      </Section>
      <Section type="off-white" refProp={refProjects}>
        Projecten
      </Section>
      <Section type="dark" style={{ minHeight: 200 }} refProp={refContanct}>
        <p>
          Telefoon : <a href="tel:+31651969839">+31651969839</a>
        </p>
        <p>
          WhatsApp :{" "}
          <a href="https://wa.me/0031651969839">
            +31651969839
          </a>
        </p>
        <p>
          E-mail :{" "}
          <a href="mail:Gavindhollander@gmail.com">Gavindhollander@gmail.com</a>
        </p>
      </Section>
    </div>
  );
}

export default App;
