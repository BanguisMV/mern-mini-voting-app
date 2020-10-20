import React from 'react'
import { Card,Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';



const { confirm } = Modal;
const { Meta } = Card;
const Candidate = ({data}) => {


  const deleteCandidate = e => {
console.log(e.target);
  }
    const showConfirm = (id) => {
        confirm({
          title: 'Are you sure?',
          icon: <ExclamationCircleOutlined />,
          centered:true,
          onOk() { 
            // fetch(`/candidates/${id}`, {
            //     method: 'DELETE', 
            //     headers: { 
            //         Authorization: localStorage.getItem('token'),
            //         'Content-Type': 'application/json'
            //     },
            // }).then(res => res.json())
            //   .then(res => console.log(res))
            //   .catch(err => console.log(error))
            console.log(id);
        },
    
        });
      }
    return (
            <Card
                    className='candidates-cards'
                    cover={
                    <img
                        alt={data.firstName}
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    /> }
                    actions={[
                        <EditOutlined key="edit" style={{ color: 'blue'}}/>,
                        <DeleteOutlined  key="delete" style={{ color: 'orangered'}} onClick={(e) => deleteCandidate(e)}/>,
                      ]}
                    >
          
                <Meta  title={`${data.lastName}, ${data.firstName}`} description={data.position} />
            </Card> 
    )
}

export default Candidate
