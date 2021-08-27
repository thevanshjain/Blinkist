import React from 'react';
import CustomInput from './CustomInput';

export default {
    title: 'atom/input',
    component: CustomInput,
    args:{
        placeholder: "Stories"
    }
}
const Template = args => <CustomInput {...args} />

export const InputStory= Template.bind({})

InputStory.args = {
    type: "password"
}