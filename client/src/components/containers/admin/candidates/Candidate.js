import React from 'react'
import { Card, Col} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const Candidate = ({data}) => {
    return (
        <Col xs={12} sm={6} lg={6}>

        <Card
                style={{ width: 200 }}
                cover={
                <img
                    alt={data.firstName}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
            >
            <Meta  title={`${data.lastName}, ${data.firstName}`} description={data.position} />

        </Card>
        </Col>

    )
}

export default Candidate
