import React from 'react'
import Chart from './Chart'
import Line from './Line'


export default function Home({data, filteredStudent}) {
  
 

    return (
        <div>
            <Chart data={data}  />
            <Line data={data}  />
        </div>
    )
}
