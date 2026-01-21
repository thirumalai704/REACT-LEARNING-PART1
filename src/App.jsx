import FunctionCom from "./FunctionCom";
import Child from "./Child";
import ClassComp from "./ClassCom";
import AnotherClass from "./AnotherClass";
import Fragment from "./Fragment";
import ConditionalRendering from "./conditional-rendering/ConditionalRendering";
import ParentProp from "./props/ParentProp";
import Student from "./props/Student";
import Greetting from "./props/Greetting";
import MapCom from "./props/MapCom";
import CompA from "./prop-drill/CompA";
import Inline from "./react-css/Inline";
import StudentDetails from "./props/StudentDetails";
import FaceBook from "./react-css/FaceBook";

// ! global css 

import './global.css' 

import Instagram from "./react-css/Instagram";
import SnapChat from "./react-css/SnapChat";
import Navbar from "./task/Navbar";
import DisplayUser from "./task/DisplayUser";
import NewState from "./state/NewState";
import CounterApp from "./state/CounterApp";
import Parent from "./childtoparent/Parent";
import NewContext from "./context-api/NewContext";
import Company from "./context-api/Company";
import Employee from "./context-api/Employee";
import Context2 from "./context-api/Context2";
import DisplayMessage from "./task2/DisplayMessage"
import Team1 from "./hof/Team1";
import Team2 from "./hof/Team2";
import Refcom from "./reference/Refcom";
import Uncontrolled from "./form/Uncontrolled";
import Controlled from "./form/Controlled";
import Details from "./form/Details";
import Counter1 from "./hof/Counter1";
import Counter2 from "./hof/Counter2";


const App = ()=>{

    let day = "friday" ;

    let frutis = ["Orange", "banana", "Grapes", "Mango","apple"]

    let students = ["Kavin", "Kavitha", "Vikram", "Kamal"]
   
     return (
        <section>
            
            {/* //! fuctional componet */}

            {/* <h1>I am functional basd component</h1>
            <h2>App is parent componenet</h2>
            <p>It is uded to wrap all the all other component</p>
            <br />
            <label htmlFor=""></label>
            <h3>Today is {day}.</h3>
            <FunctionCom/>
            <Child/>

            // ! class component
            <ClassComp></ClassComp>
            <AnotherClass/>
            <Fragment/> */}

            {/* //! contional rendering */}

            {/* <ConditionalRendering/> */}

            {/* //! props  */}

            {/* <ParentProp/> */}

            {/* 
            <Student name="Dhoni" id={122} house="Green"/>
            <Student name="Messi" id={143} />
            <Student name="Ronaldo" house="Green"/> 
            */}
        
            {/* //! props children */}

            {/* <Greetting>Welcome To You</Greetting>
            <Greetting>Happy New Year</Greetting> */}

            {/* //! map tha array data */}

            {/* <MapCom frutis = {frutis}/> */}
            {/* <CompA/> */}
            {/* <Inline/> */}

            {/* <StudentDetails students={students} />  */}

            {/* 
             <FaceBook/>
             <Instagram/>
             <SnapChat/> */}

            {/* // ! for task */}

            {/* 
             <Navbar/>
             <DisplayUser/> */}

            {/* // ! useState */}

            {/* <NewState/> */}

            {/* //! counter app */}

            {/* <CounterApp/> */}

            {/* <Parent/> */}

            {/* //! context api */}

            {/* <NewContext/> */}

            {/* <Context2>
               <Company/>
               <Employee/>
            </Context2> */}

           {/* //! task2 */}
           {/* <DisplayMessage /> */}

           {/* //! high order function */}

            {/* <Team1/>

            <Team2/> */}
           {/* 
            <Counter1/>
            <Counter2/> */}

           {/* //! reference object */}
           
           {/* <Refcom/> */}

           {/*//! uncontrolled from */}

           {/* <Uncontrolled/> */}

           {/*//! controlled from */}

           {/* <Controlled/> */}

           <Details/>


          




        </section>
     )
}

export default App;
