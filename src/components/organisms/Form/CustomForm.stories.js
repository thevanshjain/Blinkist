import React from 'react';
import CustomForm from './CustomForm';

export default {
    title: 'organism/form',
    component: CustomForm
}

const Template = (args) => <CustomForm {...args} />

export const Form = Template.bind({});

