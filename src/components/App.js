const React = require('react');

const App = React.createClass({

 getInitialState() {
  return {
    array1: "0321",
    array2: "0",
    array3: "0",
    float: "",
    clickCounter: 1
  }
},

getStarted () {
  let {array1} = this.state

  let threeTwoOne = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 105px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 85px;">'
  
  if (array1 == '0321') {
    document.getElementById('tower1').innerHTML=threeTwoOne
    document.getElementById('changingText').innerHTML='Click on the tower with the disks'
    }
    console.log(array1)
 },

towerOne () {
  let {array1, clickCounter, float} = this.state
  console.log('clickCounter and float', clickCounter, float)
  
  let threeTwoOne = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 105px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 85px;">'
  
  let threeOne = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 105px;">'
  
  let threeTwo = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 105px;">'
  
  let three = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;">'
  
  let twoOne ='<img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 125px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 105px;">'
  
  let two = '<img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 125px;">'
  
  let one = '<img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 125px;">'

  if (clickCounter % 2 !== 0) {
    document.getElementById('changingText').innerHTML='Now choose where to put it'
    let temp=array1.slice(0, -1);
    array1=array1.split("")
    let temp2=array1.slice(0, -1)
    let diff = $(array1).not(temp2).get();
    let diffString = diff.toString()
    console.log('Array1 ', temp, diffString)
    if (temp === '0321') {
    document.getElementById('tower1').innerHTML=threeTwoOne
  } else if (temp === '032'){
    document.getElementById('tower1').innerHTML=threeTwo
  } else if (temp === '031'){
    document.getElementById('tower1').innerHTML=threeOne
  } else if (temp === '03'){
    document.getElementById('tower1').innerHTML=three
  } else if(temp === '021'){
    document.getElementById('tower1').innerHTML=twoOne
  } else if(temp === '02'){
    document.getElementById('tower1').innerHTML=two
  } else if(temp === '01'){
    document.getElementById('tower1').innerHTML=one
  } else if (temp === '0'){
    document.getElementById('tower1').innerHTML=""
  }
    this.setState({
      array1: temp,
      float: diffString,
      clickCounter: clickCounter + 1
    })
 } else {
  document.getElementById('changingText').innerHTML='Choose which disk to move next'
  let {float, array1} = this.state
  let temp = array1 + float
  console.log ('array1 ', temp)
  if (temp === '0321') {
    document.getElementById('tower1').innerHTML=threeTwoOne
  } else if (temp === '032'){
    document.getElementById('tower1').innerHTML=threeTwo
  } else if (temp === '031'){
    document.getElementById('tower1').innerHTML=threeOne
  } else if (temp === '03'){
    document.getElementById('tower1').innerHTML=three
  } else if(temp === '021'){
    document.getElementById('tower1').innerHTML=twoOne
  } else if(temp === '02'){
    document.getElementById('tower1').innerHTML=two
  } else if(temp === '01'){
    document.getElementById('tower1').innerHTML=one
  }else if (temp === '0'){
    document.getElementById('tower1').innerHTML=""
  } else {
      document.getElementById('changingText').innerHTML="Uh Oh! That didn't work! Choose again!"
      console.log('float', float)
      clickCounter = clickCounter -1
      let temp=temp.slice(0, -1);
      console.log('Array1 ' ,temp, diffString)
  }
  console.log('about to set state with temp = ', temp)
  this.setState({
      clickCounter: clickCounter + 1,
      array1: temp
    })
 }
},

 towerTwo () {

  let {array2, clickCounter, float} = this.state
  console.log('clickCounter ', clickCounter)
  
  let threeTwoOne = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 105px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 85px;">'
  
  let threeOne = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 105px;">'
  
  let threeTwo = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 105px;">'
  
  let three = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;">'
  
  let twoOne ='<img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 125px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 105px;">'
  
  let two = '<img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 125px;">'
  
  let one = '<img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 125px;">'

  if (clickCounter % 2 !== 0) {
    document.getElementById('changingText').innerHTML='Now choose where to put it'
    let temp=array2.slice(0, -1);
    array2=array2.split("")
    let temp2=array2.slice(0, -1)
    let diff = $(array2).not(temp2).get();
    let diffString = diff.toString()
    console.log('Array2 ', temp, diffString)
    if (temp === '0321') {
    document.getElementById('tower2').innerHTML=threeTwoOne
  } else if (temp === '032'){
    document.getElementById('tower2').innerHTML=threeTwo
  } else if (temp === '031'){
    document.getElementById('tower2').innerHTML=threeOne
  } else if (temp === '03'){
    document.getElementById('tower2').innerHTML=three
  } else if(temp === '021'){
    document.getElementById('tower2').innerHTML=twoOne
  } else if(temp === '02'){
    document.getElementById('tower2').innerHTML=two
  } else if(temp === '01'){
    document.getElementById('tower2').innerHTML=one
  } else if (temp === '0'){
    document.getElementById('tower2').innerHTML=""
    }
    console.log ('about to set state')
    this.setState({
      array2: temp,
      float: diffString,
      clickCounter: clickCounter + 1
    })
 } else {
  document.getElementById('changingText').innerHTML='Choose which disk to move next'
  let {float, array2} = this.state
  let temp = array2 + float
  console.log ('array 2 ', temp)
  if (temp === '0321') {
    document.getElementById('tower2').innerHTML=threeTwoOne
  } else if (temp === '032'){
    document.getElementById('tower2').innerHTML=threeTwo
  } else if (temp === '031'){
    document.getElementById('tower2').innerHTML=threeOne
  } else if (temp === '03'){
    document.getElementById('tower2').innerHTML=three
  } else if(temp === '021'){
    document.getElementById('tower2').innerHTML=twoOne
  } else if(temp === '02'){
    document.getElementById('tower2').innerHTML=two
  } else if(temp === '01'){
    document.getElementById('tower2').innerHTML=one
  } else if (temp === '0'){
    document.getElementById('tower2').innerHTML=""
  }else {
      document.getElementById('changingText').innerHTML="Uh Oh! That didn't work! Choose again!"
      console.log('float', float)
      clickCounter = clickCounter -1
      let temp=temp.slice(0, -1);
      console.log('Array2 ' ,temp)
  }
  console.log('float added about to set state')
  this.setState({
      clickCounter: clickCounter + 1,
      array2: temp
    })
 }
},

 towerThree () {

  let {array3, clickCounter} = this.state
  console.log('clickCounter ', clickCounter)
  
  let threeTwoOne = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 105px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 85px;">'
  
  let threeOne = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 105px;">'
  
  let threeTwo = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;"><img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 105px;">'
  
  let three = '<img id="disk3" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 90px; left: 55px; top: 125px;">'
  
  let twoOne ='<img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 125px;"><img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 105px;">'
  
  let two = '<img id="disk2" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 80px; left: 60px; top: 125px;">'
  
  let one = '<img id="disk1" src="http://i.imgur.com/ATTNMy5.png" alt="" style="pointer-events: none; position: absolute; height: 15px; width: 70px; left: 65px; top: 125px;">'

  if (clickCounter % 2 !== 0) {
    document.getElementById('changingText').innerHTML='Now choose where to put it'
    let temp=array3.slice(0, -1);
    array3=array3.split("")
    let temp2=array3.slice(0, -1)
    let diff = $(array3).not(temp2).get();
    let diffString = diff.toString()
    console.log('Array3 ' ,temp, diffString)
    if (temp === '0321') {
    document.getElementById('tower3').innerHTML=threeTwoOne
  } else if (temp === '032'){
    document.getElementById('tower3').innerHTML=threeTwo
  } else if (temp === '031'){
    document.getElementById('tower3').innerHTML=threeOne
  } else if (temp === '03'){
    document.getElementById('tower3').innerHTML=three
  } else if(temp === '021'){
    document.getElementById('tower3').innerHTML=twoOne
  } else if(temp === '02'){
    document.getElementById('tower3').innerHTML=two
  } else if(temp === '01'){
    document.getElementById('tower3').innerHTML=one
  } else if (temp === '0'){
    document.getElementById('tower3').innerHTML=""
    }
    this.setState({
      array3: temp,
      float: diffString,
      clickCounter: clickCounter + 1
    })
 } else {
  document.getElementById('changingText').innerHTML='Choose which disk to move next'
  let {float, array3} = this.state
  let temp = array3 + float
  console.log ('array3 ', temp)
  if (temp === '0321') {
    document.getElementById('tower3').innerHTML=threeTwoOne
    document.getElementById('changingText').innerHTML="You've won! You're a SUPERGENIUS!"
  } else if (temp === '032'){
    document.getElementById('tower3').innerHTML=threeTwo
  } else if (temp === '031'){
    document.getElementById('tower3').innerHTML=threeOne
  } else if (temp === '03'){
    document.getElementById('tower3').innerHTML=three
  } else if(temp === '021'){
    document.getElementById('tower3').innerHTML=twoOne
  } else if(temp === '02'){
    document.getElementById('tower3').innerHTML=two
  } else if(temp === '01'){
    document.getElementById('tower3').innerHTML=one
  } else if (temp === '0'){
    document.getElementById('tower3').innerHTML=""
  }else {
      document.getElementById('changingText').innerHTML="Uh Oh! That didn't work! Choose again!"
      console.log('float', float)
      clickCounter = clickCounter -1
      let temp=temp.slice(0, -1);
      console.log('Array3 ' ,temp, diffString)
  }
  this.setState({
      clickCounter: clickCounter + 1,
      array3: temp
    })
}
},


render() {

  var disk3Style = {
    pointerEvents: 'none',
    position: 'absolute',
    height: '15px',
    width: '90px',
    left: '55px',
    top: '125px'  
  }

  var disk2Style = {
    pointerEvents: 'none',
    position: 'absolute',
    height: '15px',
    width: '80px',
    left: '60px',
    top: '105px'  
  }

  var disk1Style = {
    pointerEvents: 'none',
    position: 'absolute',
    height: '15px',
    width: '70px',
    left: '65px',
    top: '85px'  
  }

  var towerStyle = {
    position: 'absolute',
    zIndex: '-1',
    height: '200px',
    width: '200px',
    left: '0px',
    top: '0px'
  }

  console.log('rendering')

  return(
    <div className="container">
    <h1>Hanoi Towers</h1>
    <h2 id="changingText" onClick={this.getStarted}>Are you ready? Click here!</h2>
    <h3 onClick={this.getStarted}>Total moves: </h3>
    <h3 id="moves" onClick={this.getStarted}>{Math.floor((this.state.clickCounter-1)/2) }</h3>
    <div className="col-sm-4" >
    <span id="tower1"></span>
    <img style={towerStyle} src="http://i.imgur.com/vcKeECo.png" title="source: imgur.com" onClick ={this.towerOne}/>
    </div>
    <div className="col-sm-4" >
    <span id="tower2"></span>
    <img style={towerStyle} src="http://i.imgur.com/vcKeECo.png" title="source: imgur.com" onClick ={this.towerTwo}/>
    </div>
    <div className="col-sm-4" >
    <span id="tower3"></span>
    <img style={towerStyle} src="http://i.imgur.com/vcKeECo.png" title="source: imgur.com" onClick ={this.towerThree}/></div>
    </div>
    )
}
})


module.exports = App;