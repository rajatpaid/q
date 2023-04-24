import { Card, Col, Row } from "antd";
interface ComponentProps {}

const style: React.CSSProperties = {
  padding: "0px",
  boxShadow: "1px 4px 10px 0px rgba(208, 216, 243, 0.6)",
};
const ContractorStats: React.FC<ComponentProps> = () => {
  return (
    <>
      <div style={{ paddingTop: "10px" }}>
        The team designed for total domination of internal sales-enablement
        products. Our goal is to help sales focus...<a>more</a>
      </div>
      <Row style={{ marginTop: "30px" }} gutter={[16, 24]}>
        <Col span={6}>
          <Card style={style}>
            <div>Total Monthly rate</div>
            <h1 style={{ fontSize: "30px", margin: "0px" }}>$345k</h1>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={style}>
            <div>Position</div>
            <h1 style={{ fontSize: "30px", margin: "0px" }}>
              8
              <span
                style={{
                  fontSize: "14px",
                  paddingLeft: "10px",
                  fontWeight: "normal",
                }}
              >
                still open
              </span>
            </h1>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={style}>
            <div>Avg. Experiance (yrs.)</div>
            <h1 style={{ fontSize: "30px", margin: "0px" }}>2.5</h1>
          </Card>
        </Col>
        <Col span={6}>
          <Card style={style}>
            <div>Shared Members</div>
            <h1 style={{ fontSize: "30px", margin: "0px" }}>
              2
              <span
                style={{
                  fontSize: "14px",
                  paddingLeft: "10px",
                  fontWeight: "normal",
                }}
              >
                Avg. 50%
              </span>
            </h1>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ContractorStats;
