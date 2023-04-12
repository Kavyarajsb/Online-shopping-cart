import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer style={{ backgroundColor: "	#000000", color: "#ffffff" }}>
      <Row justify="center">
        <Col span={9}>
          <h2>About Us</h2>
          <br />
          <p>
            With the trendiest, freshest, and most unique styles from across
            India and the world, CLOTHINGSTORE invites you to express your
            personal style fearlessly, and with a confidence and optimism that
            cannot be easily shaken.
          </p>
          <br />
          <p>&copy; 2023 Clothing store. All rights reserved.</p>
        </Col>
        <Col span={6} style={{ marginLeft: "30px" }}>
          <h2>Contact Us</h2>
          <br />
          <p>
            123 Main Street
            <br />
            City, State ZIP
            <br />
            Phone: 555-555-5555
            <br />
            Email: info@clothingstore.com
          </p>
        </Col>
        <Col span={8}>
          <h2>Follow Us</h2>
          <br />
          <p>
            Stay up to date with our latest news and updates on social media.
          </p>
          <br />
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Footer>
  );
}

export default AppFooter;
