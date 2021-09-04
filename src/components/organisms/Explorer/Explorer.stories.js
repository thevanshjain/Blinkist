import React from 'react';
import Explorer from './Explorer';

export default {
    title: 'organism/explorer',
    component: Explorer
}

const Template = (args) => <Explorer {...args} />

export const explorer = Template.bind({});

explorer.args = {
    exploredValue: ()=>{console.log("Hello")},
    addBook: null, 
    explorerStatus: null
}