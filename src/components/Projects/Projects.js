import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import VercelApp1 from "../../Assets/Projects/Vercel_PersonalPortfolioWebsite.png";
import StreamlitApp1 from "../../Assets/Projects/StreamlitApp_DFSCM.png";
import suicide from "../../Assets/Projects/suicide.png";
import StreamlitApp2 from "../../Assets/Projects/StreamlitApp_EncryptedTrafficAnalysisUsingLLMs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StreamlitApp1}
              isBlog={false}
              title="Supply chain Quantity Shortfall prediction Model"
              description="Supply chain risk assessment ie a demand forecasting use case
              for quantity shortfall prediction model for inventory management."
              ghLink="https://github.com/SuchetSanjeev/supply-chain-risk-assessment-Demand-forecasting-shortfall-"
              demoLink="https://suchetshortfallpredictionmodel.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StreamlitApp2}
              isBlog={false}
              title="Encrypted Traffic cyber attacks prediction Model"
              description="Trying to predict across 9 different cyber attack categories processing traffic metadata using LLMs(Tiny-BERT)"
              ghLink="https://github.com/SuchetSanjeev/EncryptedTrafficAttackClassifierLLMs"
              demoLink="https://encryptedtrafficattackclassifier.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VercelApp1}
              isBlog={false}
              title="Personal Portfolio Website"
              description="Suchet's Personal Portfolio Website which is responsive and has animations and is built
               using the major techstack that is react.js and tailwind.css"
              ghLink="https://github.com/SuchetSanjeev/Suchets-portfolio"
              demoLink="https://suchets-portfolio.vercel.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
