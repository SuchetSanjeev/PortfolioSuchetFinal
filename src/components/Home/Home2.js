import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Java, Python, SQL, Bash</b>
              </i>
              <br />
              <br />
              <p>
              My field of Interest's lie in building&nbsp;
                <b className="purple"><i>Projects</i></b> that tackling real world buisness problems
                also automating manual labour applying concepts of{" "}
                <b className="purple">
                  <i>AI/ML, data science, Full-Stack</i>
                </b>
                <b className="purple"><i> DevOps, Cloud.</i></b>
              {/* </p>
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">AI/ML</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p> */}
              </p>
              And also apart from the above old school intro these are some humourous punch lines i like:<b className="purple"><i></i></b>
              <i>
                <b className="purple">
                  {" "}
                <p>
                Treating my bad habits like bugs: identify, isolate, and patch.<br></br>
                Trying to build a well-documented API for my emotions.<br></br>
                My life's plan has thrown a few NullPointerExceptions.<br></br>
                Optimizing my daily routine for lower latency and higher throughput.<br></br>
                Some days feel like an infinite loop I can't Ctrl+C my way out of.<br></br>
              </p>
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SuchetSanjeev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/suchet24/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/Suchet.24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
