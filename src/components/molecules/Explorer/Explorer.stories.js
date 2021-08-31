import React from 'react';
import Explorer from './Explorer';

export default {
    title: 'molecule/explorer',
    component: Explorer
}

const Template = (args) => <Explorer {...args} />

export const explorer = Template.bind({});

