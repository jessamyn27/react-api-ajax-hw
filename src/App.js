import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged: false,
      username: '',
      news: []
    }
  }

getNews = async () => {

  try{
    const news = await
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=282fe65eb9de4023bc6dbf646e6467b0");
    const newsJson = await news.json();
    return newsJson
    console.log(newsJson, ' this is news');

  } catch (err) {
    return err
    console.log(err, ' error in News catch');
  }
}
 componentDidMount() {
   this.getNews().then((data) =>
   {
     console.log(data, ' this is data'); this.setState({news: data})
   })
 }

login = (username) => {
  console.log('login function app is working', username);

this.setState({
  logged: true,
  username: username
})

}

  render() {
    console.log(this.state, ' inside of app component');

    return (
      <div className="App">
         {this.state.logged ?
        <MainContainer news={this.state.news}/> :
        <Login login={this.login}/>}

      </div>
    );
  }
}

export default App;
