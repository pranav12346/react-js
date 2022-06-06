
import './App.css';
//import Greet from "./Component/Greet"
//import Welcome from "./Component/Welcome"
//import Hello from "./Component/Hello"
import React from 'react';
import EventBind from "./Component/eventBind"
/*import Hai from "./Component/Hai"
import Message from "./Component/Message"
import Counter from "./Component/Counter"
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/classClick';

import { ParentComponent } from './Component/parentComponent';
import UserGreeting from './Component/userGreeting';
import NameList from './Component/NameList';
import Styles from './Component/Styles';
import Inline from './Component/inline';
import styles from './Component/appStyle.module.css';*/
import Form from "./Component/Form"
import LifeCycleA from './Component/lifeCycleA';
import Fragment from './Component/Fragment';
import Table from './Component/table';
import Maps from './Component/Map';
import Parent from "./Component/Parent"
//import MapWrapper from './Component/Map2';
function App() {
     return (
       <div className="App">
          <EventBind></EventBind>
        {/* <Greet name="ricky" nickname="punter"><p>this is children props</p></Greet>
         <Greet name="gilchrist" nickname="church" />
         <Greet name="hayden" nickname="haydos"><button>actions</button></Greet>
         <Welcome name="symonds" nickname="roy"></Welcome>
          <br></br>
         <Hello></Hello>
          <br></br>
         <Hai></Hai>
          <br></br>
         <Message />
         <br></br>
         <Counter />
         <br></br>
         <FunctionClick></FunctionClick>
         <br></br>
         <ClassClick></ClassClick>
         <br></br>
        
         <br></br>
         <ParentComponent></ParentComponent>
         <br></br>
         <UserGreeting></UserGreeting>
         <br></br>
         <NameList></NameList>
         <br></br>
         <Styles primary={true}></Styles>
         <br></br>
         <Inline></Inline>
         <br></br>
     <h2 className={ styles.success}>success</h2> */}
         <Form></Form>
         <br></br>
         <LifeCycleA></LifeCycleA>
         <br></br>
         <Fragment></Fragment>
         <br></br>
         <Table></Table>
         <br></br>
         <br></br>
          <Maps></Maps> 
         <br></br>
         <br></br>
        <Parent></Parent>
       </div>
     );
}

export default App;
