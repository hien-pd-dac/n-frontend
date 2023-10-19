import { MyNavbar } from "../components/Navbar";
import { VideoScreen } from "../components/VideoScreen";
import { CourseContent } from "../components/CourseContent";
import { CourseInfo } from "../components/CourseInfo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Learn = () => {
  return (
    <div id="test-page">
      <Container fluid className="p-0">
        <Row>
          <Col>
            <MyNavbar />
          </Col>
        </Row>
        <Row>
          <Col xl={9} className="p-0">
            <Container fluid className="p-0">
              <Row>
                <Col>
                  <VideoScreen />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CourseInfo />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xl={3} className="p-0">
            <CourseContent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Learn;
