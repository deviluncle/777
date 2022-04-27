import React from 'react';
import { Card, Col, Row } from 'antd';
import '../styles/work.scss'

class Work extends React.Component {
  state = {
    loading: true,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
        <div className="card-box">
            <Row gutter={16}>
                <Col span={6}>
                    <Card title="Card title" hoverable bordered={true}>
                        Card contentCard contentCard 
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title" bordered={true}>
                        Card contentCard content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title" bordered={true}>
                        Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title" bordered={true}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Work;