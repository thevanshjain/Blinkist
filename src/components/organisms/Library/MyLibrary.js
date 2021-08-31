import React from 'react'
import StatusTabs from '../StatusTabs/StatusTabs';
import Tab from '../TabBar/Tab'

function MyLibrary() {

 

    return (
        <>
           <Tab />
           <h2 style={{marginTop: "50px"}}> My Library </h2>
           <div style={{marginTop: "40px"}}>
           <StatusTabs />
           </div>
        </>
    )
}

export default MyLibrary;
