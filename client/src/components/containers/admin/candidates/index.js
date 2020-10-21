import React,{  useEffect } from 'react'
import CandidateTab from './Tabs';
import Helmet from 'react-helmet'
import { Skeleton } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getCandidates }from '../../../../redux/actions/candidateActions'


const DashboardCandidates = (props) => {

  const dispatch = useDispatch()
  const {data, loading} = useSelector(state => state.candidates)

    useEffect(() => {
            dispatch(getCandidates())
    },[])
    return (
        <div className='candidates'>
            <Helmet>
                <head>Candidates</head>
            </Helmet>
            {loading ? <Skeleton round /> :  <CandidateTab  candidates={data}/>}  
        </div>
    )
}

export default DashboardCandidates
