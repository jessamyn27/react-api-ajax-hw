import React, { Component } from 'react';
// import NewsList from './News';

class MainContainer extends Component {
  render(){
    const news = this.props.news;
    console.log(news, ' this is news')
const newsList = news.map((news, index) =>
  console.log(news, 'map item')
);
  return (
    <div key={index}>
      <h1>{news.name}</h1>
    </div>

);

    return (
      <div>
        <h1>Hello {this.props.username}</h1>
          {newsList}
      </div>
    )
  }
}

export default MainContainer;
