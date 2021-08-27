import React from 'react';
import BookCard from './BookCard';

export default {
    title: 'molecule/card',
    component: BookCard
}

const Template = (args) => <BookCard {...args} />

export const Card = Template.bind({});

