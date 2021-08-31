import React from 'react';
import BookCard from './BookCard';

export default {
    title: 'molecule/card',
    component: BookCard
}

const Template = (args) => <BookCard {...args} />

export const Card = Template.bind({});

Card.args = {
    url: "https://images.unsplash.com/photo-1577627444534-b38e16c9d796?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: "A book full of home",
    author: "Herbert",
    readingTime: '200',
    totalReads: '10K'
}