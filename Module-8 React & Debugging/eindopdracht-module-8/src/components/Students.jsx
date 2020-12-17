import React, { useState } from 'react'
import Button from './Button'
import Chart from './Chart'
import data from './Data'
import { Link } from "react-router-dom"
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLegend,
} from "victory";


export default function Students({setStudentName, filteredStudent, studentName  }) {
    
  

    const studentData = data.map((item) => ({
    student: item.name,
    assignment: item.assignment.split(' ')[0],
    difficult: item.difficult,
    fun: item.fun,
    }));

    const getStudentsUnique = [...new Map(studentData.map(item => [item['student'], item])).values()]

   
    return (
        <div>
           <h1>{studentName}</h1>
            <div className={'buttons'}>
                {getStudentsUnique.map(item => (
                    <Link to={`/students/${item.student}`}>
                <Button key={Math.random() * 1000} setStudentName={setStudentName} buttonName={item.student}/>
                    </Link>
            ))}
                
                    
            </div>
            <Chart data={filteredStudent} />
            </div>
    )
}
