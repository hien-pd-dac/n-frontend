import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CourseContent.css";
import {
  faPlayCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const CourseContent = () => {
  return (
    <div id="course-content">
      <Container fluid className="p-0">
        <Row>
          <Col className="m-3" style={{ fontWeight: 700 }}>
            Course content
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion className="section">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="section-header">
                    <div className="section-title">Section 1: Reading</div>
                    <div className="section-info">0/2 | 16min</div>
                  </div>
                </Accordion.Header>
                <div className="section-body-div">
                  <Accordion.Body className="section-body">
                    <Accordion>
                      <Accordion.Item eventKey="0" className="lesson">
                        <Accordion.Header>
                          <div className="lesson-header">
                            <div className="lesson-title">
                              Lesson 1: Lesson title
                            </div>
                            <div className="lesson-info">8min</div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="lesson-body">
                          <div className="lesson-unit flex-container">
                            <div className="unit-checkbox">
                              <input type="checkbox" checked="checked" />
                            </div>
                            <div className="unit-main">
                              <div className="resource-title">Video title</div>
                              <div className="resource-info">
                                <FontAwesomeIcon icon={faPlayCircle} /> 5min
                              </div>
                            </div>
                          </div>
                          <div className="lesson-unit flex-container">
                            <div className="unit-checkbox">
                              <input type="checkbox" checked="checked" />
                            </div>
                            <div className="unit-main">
                              <div className="resource-title">Quiz</div>
                              <div className="resource-info">
                                <FontAwesomeIcon icon={faQuestionCircle} /> 3min
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    {/* End lesson sample */}
                    <Accordion className="lesson">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="lesson-header">
                            <div className="lesson-title">
                              Lesson 2: Lesson title
                            </div>
                            <div className="lesson-info">8min</div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="lesson-body">
                          <div className="lesson-unit flex-container">
                            <div className="unit-checkbox">
                              <input type="checkbox" />
                            </div>
                            <div className="unit-main">
                              <div className="resource-title">Video title</div>
                              <div className="resource-info">
                                <FontAwesomeIcon icon={faPlayCircle} /> 5min
                              </div>
                            </div>
                          </div>
                          <div className="lesson-unit flex-container">
                            <div className="unit-checkbox">
                              <input type="checkbox" />
                            </div>
                            <div className="unit-main">
                              <div className="resource-title">Quiz</div>
                              <div className="resource-info">
                                <FontAwesomeIcon icon={faQuestionCircle} /> 3min
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </div>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        {/* end section sample */}
      </Container>
    </div>
  );
};

export default CourseContent;
