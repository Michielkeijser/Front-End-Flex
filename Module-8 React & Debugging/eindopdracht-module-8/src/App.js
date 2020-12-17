import React, { useState } from 'react'
import './App.css';
import studentlist from './components/Data'
import NavBar from './components/NavBar'
import Students from './components/Students'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  const [studentName, setStudentName] = useState('Evelyn');

       // nieuwe const met beter leesbare data
  const studentData = studentlist.map((item) => ({
    student: item.name,
    assignment: item.assignment.split(' ')[0],
    difficult: item.difficult,
    fun: item.fun,
  }));

  console.log(studentData);
  
  // functie om het gemiddelde te berekenen van alle fun
  const avarageFun = (assignment) => {
     let average = 0;
    let items = 0;
    studentData.forEach((item) => {
      if (item.assignment === assignment) {
        average += item.fun;
        items++;
      }
    });
    return average / items;
  }
  // functie om het gemiddelde te berekenen van alle difficult
  const avarageDifficult = (assignment) => {
     let average = 0;
    let items = 0;
    studentData.forEach((item) => {
      if (item.assignment === assignment) {
        average += item.difficult;
        items++;
      }
    });
    return average / items;
  }
   // Data filteren op naam van student
  const filteredStudent = studentData.filter(item => item.student === studentName);

  console.log(filteredStudent);
  
// nieuwe const waarin het gemiddelde wordt samengevoegd per opdracht
  const avarage = studentData.map((item) => ({
    student: item.student,
    assignment: item.assignment,
    difficult: avarageDifficult(item.assignment),
    fun: avarageFun(item.assignment),
  }));

   console.log(avarage);

// nieuw array met alleen de unique items welke straks de chart in kunnen
  const getAvarageUnique = [...new Map(avarage.map(item => [item['assignment'], item])).values()]

  console.log(getAvarageUnique);
  
  return (
    
    <div className="App">
      <Router>
        <NavBar studentName={studentName}/>
          <Switch>
            <Route path="/" exact>
            <Home data={getAvarageUnique}/>
            </Route>
        
          <Route Route path="/students" >
            <Students filteredStudent={filteredStudent} setStudentName={setStudentName} studentName={studentName} />
          </Route>
          </Switch>
        </Router>
      </div>
      
  );
}

export default App;
