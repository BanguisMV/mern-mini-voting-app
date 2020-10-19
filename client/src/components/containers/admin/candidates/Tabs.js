import React, { Fragment, useEffect, useState } from 'react'
import { Tabs,  Row  } from 'antd';
import Candidate from './Candidate';
const { TabPane } = Tabs;


function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width
}

const CandidateTab = (props) => {

    function callback(key) { console.log(key) }
    const [mode, setMode] = useState('horizontal')
    const [windowDimension, setWindowDimension] = useState(getWindowDimensions());
  

    const getByPosition = (position) => {
      props.candidates.filter(candidate => 
          candidate.position.toLowerCase() === position)
          .map(position => ( <Candidate key={position._id} data={position}/> ))
    }
    useEffect(() => {
        const handleResize = () => setWindowDimension(getWindowDimensions());
        window.addEventListener('resize', handleResize);
        if(windowDimension > 500) { 
          setMode('right')
        } else {
          setMode('top') 
        }
        return () => window.removeEventListener('resize', handleResize);
  }, [windowDimension]);

    return (
        <Fragment>
            <Tabs 
            className='candidates candidates-tabs'
            tabPosition={mode}
            defaultActiveKey="1" 
            onChange={callback}>

              <TabPane tab="All" key="1">
                <Row gutter={[16, 16]}>
                  {props.candidates.map(candidate => (<Candidate key={candidate._id} data={candidate}/> ))}
                </Row>
              </TabPane>


              <TabPane tab="Presidents" key="2">
              <Row gutter={[16, 16]}> 
                {getByPosition('president')} 
              </Row>
              </TabPane>
              <TabPane tab=" Vice" key="3">
              <Row gutter={[16, 16]}> {getByPosition('vice')} </Row>
              </TabPane>
              <TabPane tab="Treasurers" key="4">
                <Row gutter={[16, 16]}> {getByPosition('treasurer')} </Row>
              </TabPane>
              <TabPane tab="Peace Officers" key="5">
              </TabPane>
              <TabPane tab="Muse" key="6">
                  <Row gutter={[16, 16]}> {getByPosition('muse')} </Row>
              </TabPane>
              <TabPane tab="Escort" key="7">
                  <Row gutter={[16, 16]}> {getByPosition('escort')} </Row>
              </TabPane>
            </Tabs>
        </Fragment>
    )
}

export default CandidateTab
