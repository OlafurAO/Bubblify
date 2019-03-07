import React from 'react';

const BubbleProductContext = React.createContext({});

export const BubbleProductProvider = BubbleProductContext.Provider;
export const BubbleProductConsumer = BubbleProductContext.Consumer;
