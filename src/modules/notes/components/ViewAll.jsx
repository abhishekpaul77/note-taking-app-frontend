import React from 'react'
import { useParams } from 'react-router-dom'

const ViewAll = () => {
    const params =useParams();
    console.log(params);
  return (
    <div>
        View All{params?.screentype}
    </div>
  )
}

export default ViewAll
