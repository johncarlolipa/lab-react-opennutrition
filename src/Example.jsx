import React from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

export default function Example() {
  return (
    <div>
      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={""} onChange={() => {}} />
        </Col>
        <Col>
          <Card title={"Fancy Card"}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
