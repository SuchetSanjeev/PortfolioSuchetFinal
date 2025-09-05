import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CollabCode from "../../Assets/Projects/CollabCodeAI_landingpage.png";
import SCRO from "../../Assets/Projects/Supply_chain_risk_optimization.png";
import VercelApp1 from "../../Assets/Projects/Vercel_PersonalPortfolioWebsite.png";
import StreamlitApp1 from "../../Assets/Projects/StreamlitApp_DFSCM.png";
import VITCMS from "../../Assets/Projects/VIT_complaint_management_system.png";
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
              imgPath={CollabCode}
              isBlog={false}
              title="AI driven collaborative coding platform"
              description="A full-stack collaborative coding platform with real-time editing via WebSockets and AI-powered features like code explanation and bug fixing, powered by the Google Gemini API. Built with React, TypeScript, Node.js, and Firebase."
              ghLink="https://github.com/SuchetSanjeev/Ai-driven-Collaboration-Code-Platform"
              demoLink="https://ai-driven-collaboration-code-platfo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VITCMS}
              isBlog={false}
              title="VIT college Complain Management System"
              description="A full-stack web application for VIT Men's Hostel to register, track, and manage daily complaints related to hostel facilities such as Wi-fi, Carpenter, AC, Plumber, Electrician, and Mess."
              ghLink="https://github.com/isthatejas/ComplaintSystem_VIT"
              demoLink="https://vit-hostel-complaint-new.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SCRO}
              isBlog={false}
              title="Supply Chain Optimization"
              description="This project is a Streamlit-based AI dashboard designed to help supply chain managers predict potential order shortfalls and understand the risks associated to it using ML. It also integrates a Retrieval-Augmented Generation (RAG) system powered by LLaMA 3 via Ollama, allowing users to ask questions about the dataset."
              ghLink="https://github.com/SuchetSanjeev/Supply_chain_Risk_Assessment-quantity-shortfall-Prediction-With-Smart-Query-Interface-"
              demoLink="https://shortfallpredictionsupplychainsuchet.streamlit.app/" 
            />
          </Col>
          
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

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
