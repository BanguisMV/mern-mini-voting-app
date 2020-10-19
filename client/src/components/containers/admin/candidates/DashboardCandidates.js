import React,{ useState,useEffect } from 'react'
import CandidateTab from './Tabs';
import Helmet from 'react-helmet'

const DashboardCandidates = (props) => {
    const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
    useEffect(() => {
        fetch('/candidates', {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
          .then(res => res.json())
          .then(json => setData(json))
          .catch(err => console.log(err))

      },[])

console.log(data);
const position = data.filter(d => d.position == 'Escort')
console.log(position);

    return (
        <div className='candidates'>
            <Helmet>
                <head>Candidates</head>
            </Helmet>
            <CandidateTab candidates={data} />
        </div>
    )
}

export default DashboardCandidates
