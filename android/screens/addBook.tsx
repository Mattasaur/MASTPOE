/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import { SelectList }from 'react-native-dropdown-select-list';

export const bookContext = createContext();

export default function AddBook( { navigation, route }): React.JSX.Element {
  const [id, setID]=useState(0);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [selected, setSelected] = React.useState("");
  const [pageNo, setPageNo] = useState(0)
  const [book, setBook]=useState({id: id,
                                  title: bookName,
                                  author: bookAuthor,
                                  genre: selected,
                                  pageNo: pageNo,});
  const data = [
    {key:'Action and adventure', value:'Action and adventure'},
    {key:'Alternate history', value:'Alternate history'},
    {key:'Anthology', value:'Anthology'},
    {key:'Children', value:'Children'},
    {key:'Classic', value:'Classic'},
    {key:'Comic book', value:'Comic book'},
    {key:'Coming-of-age', value:'Coming-of-age'},
    {key:'Crime', value:'Crime'},
    {key:'Drama', value:'Drama'},
    {key:'Fantasy', value:'Fantasy'},
    {key:'Graphic novel', value:'Graphic novel'},
    {key:'Historical fiction', value:'Historical fiction'},
    {key:'Romance', value:'Romance'},
    {key:'Horror', value:'Horror'},
    {key:'Science fiction', value:'Science fiction'},
    {key:'Nonfiction', value:'Nonfiction'},
    {key:'Young adult', value:'Young adult'},
    {key:'Poetry', value:'Poetry'},
    {key:'Short story', value:'Short story'},
  ]

   // This const will check errors in submission
  //const validateForm = ()=>{
    //let errors = {};
    //if (!bookName) errors.bookName="Book Name must be entered!";
    //setErrors(errors);
    //return Object.keys(errors).length===0;
  //};

  //this const will handle submition of fields
  const handleSubmit=(e)=> {
  
   // if (validateForm()){
       if(id<3) {
        setID(i=>i+1);
        console.log("Book "+id+" Submitted",bookName,bookAuthor,selected,pageNo);
        const newBook = {id: id, title: bookName, author: bookAuthor, genre: selected, pageNo: pageNo,}
        
      } else
        console.log("Max Count Reached!")
        //setErrors({});
    //}
  };


  const backgroundStyle = {
    backgroundColor:'#ECE1C1'
    };
  

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <Text style={styles.sectionHeader}>Please enter the details of last book read</Text>
        <View style={styles.sectionText}>
          <Text>Title:</Text>
          <TextInput style={styles.textInput} value={bookName} onChangeText={setBookName}/>
          <Text>Author:</Text><TextInput style={styles.textInput} value={bookAuthor} onChangeText={setBookAuthor}/>
          <Text>Genre:</Text><SelectList boxStyles={styles.textInput} dropdownStyles={styles.textInput} setSelected={setSelected} data={data} />
          <Text>Number of Pages:</Text><TextInput style={styles.textInput} onChangeText={setPageNo} keyboardType='numeric'/>
        </View>
        <Button
        title='+'
        color='#784F00'
        onPress={(e)=>handleSubmit(e)}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  sectionTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    flex: 1,
    padding: 24,
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor:'#FFF7E1',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionText:{
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor:'#FFF7E1',
    padding:10,
  },
  buttonHeader: {
    fontWeight: '700',
  },
  textInput:{
    flex:1,
    backgroundColor:'#ECE1C1',
    padding:10
  },
  errorText:{
color: 'red',
marginBottom: 10,
  },
});
