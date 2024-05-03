import React, { useState, createContext } from 'react';
import type { PropsWithChildren } from 'react';
import AddBook from './android/screens/addBook';

import {
StyleSheet,
  Text,
  View,
} from 'react-native';

//Storage function to keep books stored as objects
function BookArray (){

    const book = [  {id: 1, bookName: "Name of wind", pageNo: 400},
    {id: 2, bookName: "Narnia", pageNo: 241},
    {id: 3, bookName: "The Bibble", pageNo: 123}, ];

//map function to put objects into a list
    const bookList = book.map(book =>   <Text key={book.id} style={styles.sectionText}> 
                                        Title: {book.bookName}
                                        {'\n'}
                                        Total Pages: {book.pageNo}
                                        {'\n'}
                                        </Text>
                                        );
    
//This should return book list to homescreen to view      
    return(bookList );
}
const styles = StyleSheet.create({
  
    sectionText:{
      fontStyle: 'italic',
      textAlign: 'center',
      backgroundColor:'#FFF7E1',
      marginLeft: 2,
    },
  });
export default BookArray