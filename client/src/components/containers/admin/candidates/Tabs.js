import React, { useState, Fragment } from 'react'
import { Tabs, Button } from 'antd';
import Candidate from './Candidate';
import AddCandidate from './AddCandidate'
import PostRequest from '../../../utils/PostRequest';
import { useDispatch } from 'react-redux';
import { getCandidates }from '../../../../redux/actions/candidateActions'

const { TabPane } = Tabs;

const Positions = [
  'All', 
  'President', 
  'Vice', 
  'Treasurer', 
  'Peace Officer', 
  'Muse',
  'Escort'
];


const CandidateTab = ({candidates}) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    
    const getByPosition = (position) => {
    if(position === 'all') {
        return candidates.map(candidate => (<Candidate key={candidate._id} data={candidate} />))
      } else {
        return candidates.filter(candidate => 
          candidate.position.toLowerCase() === position)
          .map(position => ( <Candidate key={position._id}  data={position} /> ))
      }
    }
    
    const onCreate = (values) => {
      PostRequest(values, 'candidates')
      dispatch(getCandidates())

      setVisible(false)
    };

    const showModal = () => setVisible(true);

    return (
      <Fragment>
            <Tabs 
            size='large'
            className='candidates candidates-tabs'
            defaultActiveKey="0" 
            tabBarExtraContent={<Button onClick={showModal}>Add Candidate</Button> }>
                {Positions.map((position, index) => (
                  <TabPane tab={position} key={index}>
                    <div className='candidate-row' >
                        {getByPosition(position.toLowerCase())} 
                    </div>
                  </TabPane>
                ))}
            </Tabs>

          <AddCandidate 
          visible={visible} 
          onCreate={onCreate} 
          onCancel={() => { setVisible(false) }}/>
        </Fragment>
    )
}

export default CandidateTab
