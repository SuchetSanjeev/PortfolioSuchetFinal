import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suchet Sanjeev Patil </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I’m currently pursuing a B.Tech in Information Technology at VIT Vellore 
            and interning at ZeroZeta, where I work on real-world applications involving machine learning and data pipelines.
            <br />
            <br />
            When I’m not coding, you’ll find me doing other things i love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> gymming
            </li>
            <li className="about-activity">
              <ImPointRight /> playing badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing  
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Practice makes a man perfect!"{" "}
          </p>
          <footer className="blockquote-footer">Suchet Sanjeev Patil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
