import React from 'react'
import { Card, Col, Row } from 'antd';

const DashboardStatistics = () => {
    return (
        <>
            <div>
                  <Row gutter={[16, 16]}>
                    <Col  xs={24} sm={12} lg={8} >
                      <Card className='admin-card' title="Total Partylist" bordered={false}>
                        Total Partylist
                      </Card>
                    </Col>
                    <Col  xs={24} sm={12}  lg={8} >
                      <Card className='admin-card' title="Total Candidates" bordered={false}>
                        Total Candidates
                      </Card>
                    </Col>
                    <Col  xs={24} sm={24}  lg={8} >
                      <Card className='admin-card' title="Total Voters" bordered={false}>
                        Total Voters
                      </Card>
                    </Col>
                </Row>
                </div>
            
            <div className='statistics'>
                    asd
            </div>
        </>
    )
}

export default DashboardStatistics
