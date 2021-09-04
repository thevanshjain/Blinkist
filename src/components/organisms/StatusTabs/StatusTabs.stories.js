import React from 'react';
import StatusTabs from './StatusTabs';


export default {
    title: 'organism/status',
    component: StatusTabs,
    
}
const Template = args => <StatusTabs {...args} />

export const Status = Template.bind({})

Status.args = {
    search:"",
    explorerStatus:null
}