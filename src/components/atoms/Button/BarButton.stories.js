import React from 'react';
import BarButton from './BarButton';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


export default {
    title: 'atom/button/barButton',
    component: BarButton,
    args:{
        value: "Bar Button"
    }
}
const Template = args => <BarButton {...args} />

export const ButtonStory = Template.bind({})

ButtonStory.args = {
    endIcon: <ExpandMoreIcon />
}