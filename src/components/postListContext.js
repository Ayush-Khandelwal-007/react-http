import React from 'react';

const Postslist =React.createContext({});

const PostsProvider= Postslist.Provider
const PostsConsumer= Postslist.Consumer

export {PostsProvider,PostsConsumer}
export default Postslist