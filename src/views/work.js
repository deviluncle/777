import React, { useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import '../styles/work.scss'
import api from '../utils/api'

class Work extends React.Component {
  state = {
    loading: true,
    cards: []
  };

  componentDidMount() {
    api.get('/getCsdnArticles').then((res) => {
      this.setState({cards: res.data.data})
    })
  }

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  handleClick = (link) => {
    window.open(link)
  }

  render() {
    const { loading } = this.state;

    return (
        <div className="card-box">
            <Row gutter={16}>
                {this.state.cards.map(val => 
                  (
                    <Col span={6}>
                        <Card bodyStyle={{height: '100px',}} onClick={this.handleClick.bind(this, val.link)} title={val.title} hoverable bordered={true}>
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