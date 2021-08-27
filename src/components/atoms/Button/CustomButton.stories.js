import React from 'react';
import CustomButton from './CustomButton';


export default {
    title: 'atom/button',
    component: CustomButton,
    args:{
        value: "Stories"
    }
}
const Template = args => <CustomButton {...args} />

export const ButtonStory = Template.bind({})

ButtonStory.args = {
    color: "secondary"
}