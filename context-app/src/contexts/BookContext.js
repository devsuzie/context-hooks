import React, { createContext, useState } from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: '여행의 이유', id: 1},
        {title: '태도에 관하여', id: 2},
        {title: '데미안', id: 3},
        {title: '수래바퀴 아래서', id: 4}
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;