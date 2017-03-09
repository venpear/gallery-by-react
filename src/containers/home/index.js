import React from 'react';
import Header from '../../components/header';
// import fetchApi from '../../tool/middleware'


export default class About extends React.Component {
  componentWillMount() {
  $$.get('/api/users',).then(res => {
    console.log(res);
  });
    // fetchApi('/api/users',{
    //     method: 'GET',
    // });
    // .then(function(myBlob) {
    //   var objectURL = URL.createObjectURL(myBlob);
    //   myImage.src = objectURL;
    // });
  }
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    )
  }
}
