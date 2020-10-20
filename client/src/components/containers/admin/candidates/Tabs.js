import React, { Fragment, useEffect, useState } from 'react'
import { Tabs,  Row,Pagination  } from 'antd';
import Candidate from './Candidate';
const { TabPane } = Tabs;


function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width
}

const Positions = [
  'All', 
  'President', 
  'Vice', 
  'Treasurer', 
  'Peace Officer', 
  'Muse',
  'Escort'
];

const paginateGood = (array, page_size, page_number) => {
  return array.slice(page_number * page_size, page_number * page_size + page_size);
};

const CandidateTab = ({candidates}) => {

  const [page, setPage] = useState(1)
    function callback(key) { console.log(key) }
    const [mode, setMode] = useState('horizontal')
    const [windowDimension, setWindowDimension] = useState(getWindowDimensions());
  
   const paginated = paginateGood(candidates, 5, page);

    const getByPosition = (position) => {

      if(position === 'all') {
        return paginated.map(candidate => (<Candidate key={candidate._id} data={candidate}/>))
      } else {
        return paginated.filter(candidate => 
          candidate.position.toLowerCase() === position)
          .map(position => ( <Candidate key={position._id}  data={position} /> ))
      }
    }
    useEffect(() => {
        const handleResize = () => setWindowDimension(getWindowDimensions());
        window.addEventListener('resize', handleResize);
        if(windowDimension > 600) { 
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
            defaultActiveKey="0" 
            onChange={callback}>
                {Positions.map((position, index) => (
                  <TabPane tab={position} key={index}>
                    <div className='candidate-row' >
                        {getByPosition(position.toLowerCase())} 
                    </div>
                  </TabPane>
                ))}

            </Tabs>

            <Pagination simple responsive defaultCurrent={page} total={candidates.length} style={{textAlign:'center', margin:'1rem'}} onChange={setPage}/>
        </Fragment>
    )
}

export default CandidateTab
