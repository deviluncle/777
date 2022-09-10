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

  handleClick = (link) => {
    window.open(link)
  }

  render() {
    const { loading } = this.state;

    const cards = [
      {title: 'title1', content: '1', link: 'https://blog.csdn.net/rabbit71/article/details/107940639'},
      {title: 'title2', content: '2', link: 'https://blog.csdn.net/rabbit71/article/details/107940639'},
      {title: 'title3', content: '3', link: 'https://blog.csdn.net/rabbit71/article/details/107940639'},
    
    ]

    return (
        <div className="card-box">
            <Row gutter={16}>
                {cards.map(val => 
                    (
                        <Col span={6}>
                            <Card onClick={this.handleClick.bind(this, val.link)} title={val.title} hoverable bordered={true}>
                                { val.content }
                            </Card>
                        </Col>
                    )
                )}
            </Row>
        </div>
    );
  }
}

export default Work;