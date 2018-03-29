<template>
<div id="matchwrap">
<main>
<section class="grid-1">
  <div class="item-1"> 
  	<h1 id="matches" align="center">Matches played: 3</h1>
	<p id="match1" class="matches">Match 1: Won</p>
	<p id="match2" class="matches">Match 2: Lost</p>
	<p id="match3" class="matches">Match 3: Won</p>
  </div>

  <div class="item-2">
  	<h1 id="drive" align="center">Drive</h1>

  	<table id="drivetable">
      <tr>
        <th>Drive</th>
        <th></th> 
      </tr>
      <tr>
        <td>Speed</td>
        <td>Slow</td>
      </tr>
      <tr>
        <td>Drive Type</td>
        <td>Tank</td> 
      </tr>
    </table>
  </div>

  <div class="item-3">
  	<h1 id="climbing">Climbing</h1>
  	<table id="climbingtable">
      <tr>
        <th id="actiones">Action</th>
        <th id="si">Yes</th> 
        <th id="no">No</th>
      </tr>
      <tr>
        <td id="canclimb">Can Climb?</td>
        <td id="canclimb_y">✔</td>
        <td id="canclimb_n">X</td>
      </tr>
      <tr>
        <td id="climbside">Climb Side?</td>
        <td id="climbside_y">✔</td> 
        <td id="climbside_n">X</td>
      </tr>
       <tr>
        <td id="climbmid">Climb Middle?</td>
        <td id="climbmid_y">✔</td> 
        <td id="climbmid_n">X</td>
      </tr>
      <tr>
        <td id="climbboth">Climb Both?</td>
        <td id="climbboth_y">✔</td> 
        <td id="climbboth_n">X</td>
      </tr>
      <tr>
        <td id="ramp">Do They Have Ramp?</td>
        <td id="ramp_y">✔</td> 
        <td id="ramp_n">X</td>
      </tr>
    </table>
  </div>
  
  <div class="item-4">
    <h1 id="auto">Auto</h1>
    <h2 id="autoopr" class="auto">OPR: 130, 80%</h2>
    <p id="autoinfo" class="auto">Left, Cube in Switch, Line Crossed </p>
    <p id="autoinfotwo" class="auto">Middle, Cube in Scale, Line Crossed </p>
    <p id="autoinfothree" class="auto">Right, Cube in Switch, Line Not Crossed </p>
  </div>

  <div class="item-5">
  	<h1 id="Cubes" align="center">Cubes</h1>
    <canvas id="myChart" style="position: relative; height:6vh; width:16vw"></canvas>    
    <canvas id="myChart2" style="position: relative; height:6vh; width:16vw"></canvas>
  </div>

  <div class="item-6">
  	<h2 id="intake">Intake</h2>
  	<p id="switchyn" class="intakethings">Switch: Yes</p>
  	<p id="scaleyn" class="intakethings">Scale: Yes</p>
  	<p id="groundyn" class="intakethings">Ground Pick Up: Yes</p>
  	<p id="portalyn" class="intakethings">Portal Pick Up: Yes</p>
    <p id="intakespeed" class="intakethings">Intake: Fast</p>
  </div>
  
    <div class="item-8">
  	 <h1 style="padding: 2%;">Comments</h1>
  	 <textarea class="matchComments" placeholder="Match 1" style= "width: 250px; height: 100px;"></textarea>
  	 <textarea class="matchComments" placeholder="Match 2" style= "width: 250px; height: 100px;"></textarea>
  	 <textarea class="matchComments" placeholder="Match 3" style= "width: 250px; height: 100px;"></textarea>
  </div>
  
  <div class="item-10">
  	<h2 id="pu" align="center">Power Ups</h2>
  	<p id="pu1name" class="puname"></p>
  	<p id="pu1" class="pu">✓</p>
  	<p id="pu1name" class="puname"></p>
  	<p id="pu2" class="pu">✓ ✓</p>
  	<p id="pu1name" class="puname"></p>
  	<p id="pu3" class="pu">✓ ✓ ✓</p>
  </div>
</section>
</main>
</div>
</template>

<script>
import Chart from 'chart.js'
import MatchWidget from './MatchWidget';

//var ctx = document.getElementById("myChart").getContext('2d');
//var myChart = new Chart(ctx, {
//    type: 'horizontalBar',
//    data: {
//        labels: ["Match 1", "Match 2", "Match 3"],
//        datasets: [{
//            label: 'Ground',
//            data: [5,2,3],
//            backgroundColor: [
//                'rgba(55, 200, 100, 0.5)',
//                'rgba(55, 200, 100, 0.5)',
//                'rgba(55, 200, 100, 0.5)'
//            ]
//        }, 
//        {
//            label: 'Portal',
//            data: [1,6,3],
//            backgroundColor: [
//                'rgba(54, 162, 235, 0.5)',
//                'rgba(54, 162, 235, 0.5)',
//                'rgba(54, 162, 235, 0.5)'
//            ]
//        }]
//    },
//    options: {
//        scales: {
//        	xAxes: [{
//        		stacked: true
//        	}],
//            yAxes: [{
//            	stacked: true
//            }]
//        }
//    }
//});
//
//var ctx = document.getElementById("myChart2").getContext('2d');
//var myChart2 = new Chart(ctx, {
//    type: 'horizontalBar',
//    data: {
//        labels: ["Match 1", "Match 2", "Match 3"],
//        datasets: [{
//            label: 'Scale',
//            data: [3,5,4],
//            backgroundColor: [
//                'rgba(200, 100, 100, 0.5)',
//                'rgba(200, 100, 100, 0.5)',
//                'rgba(200, 100, 100, 0.5)'               
//
//            ]
//        },
//        {
//            label: 'Switch',
//            data: [2,2,1],
//            backgroundColor: [
//                'rgba(55, 200, 100, 0.5)',
//                'rgba(55, 200, 100, 0.5)',
//                'rgba(55, 200, 100, 0.5)'
//            ]
//        }, 
//        {
//            label: 'Dropped',
//            data: [1,1,1],
//            backgroundColor: [
//                'rgba(54, 162, 235, 0.5)',
//                'rgba(54, 162, 235, 0.5)',
//                'rgba(54, 162, 235, 0.5)'
//            ]
//        }]
//    },
//    options: {
//        scales: {
//            xAxes: [{
//                stacked: true
//            }],
//            yAxes: [{
//                stacked: true
//            }]
//        }
//    }
//});

  export default {
    name: 'match-list',
    components: { MatchWidget },
  }
</script>

<style>
#auto{
  position: absolute; left: 45%; top: 2%;
  font-size: 1.5vw;
}

#autoopr{
  position: absolute; left: 2%; top: 20%; 
}

#autoinfo{
  position: absolute; left: 2%; top: 35%;
}

#autoinfotwo{
  position: absolute; left: 2%; top: 47%;
}

#autoinfothree{
  position: absolute; left: 2%; top: 59%;
}

#matches{
  position: absolute; left: 6%; top: 2%;
  font-size: 1.5vw;
}

#match1{
  position: absolute; left: 2%; top: 15%;
}

#match2{
  position: absolute; left: 2%; top: 25%;
}

#match3{
  position: absolute; left: 2%; top: 35%;
}

#climbing{
  font-size: 1.5vw;
}

#climbingtable{
  border: 1px solid black;
  position: relative; left: 6%; top: 0%;
  width: 75%;
  margin: 5%;
}

#drivetable {
  border: 1px solid black;
  position: relative; left: 6%; top: 0%;
  width:75%;
  margin: 5%;
}

#canclimb{
  position: relative;
}

#canclimb_y{
  position: relative;
}

#canclimb_n{
  position: relative;
}

#climbside{
  position: relative;
}

#climbside_y{
  position: relative;
}

#climbside_n{
  position: relative;
}

#climbside{
  background: #c9c9c9;
}

#climbside_y{
  background: #c9c9c9;
}

#climbside_n{
  background: #c9c9c9;
}

#goodorbad{
  position: absolute; left: 2%; top: 80%;
}

#cubes{
  position: absolute;	
 }
 
#intake{
  position: absolute; left: 35%; top: 2%;
  font-size: 1.5vw;
}

#switchyn{
  position: absolute; left: 30%; top: 15%;
}

#scaleyn{
  position: absolute; left: 32%; top: 30%;
}

#groundyn{
  position: absolute; left: 14%; top: 45%;
}

#portalyn{
  position: absolute; left: 17%; top: 60%;
}

#intakespeed{
  position: absolute; left: 30%; top: 75%;
}

#pu1{
  position: absolute; left: 23%; top: 15%;
}

#pu2{
  position: absolute; left: 23%; top: 30%;
}

#pu3{
  position: absolute; left: 23%; top: 45%;
}

.intakethings{
  font-size: 1.25vw;
}

.matches{
  font-size: 1.25vw;
}

.auto{
  font-size: 1.25vw;
}

.pu{
  font-size: 1.5vw;
}

.grid-1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 1%;
  grid-template-rows: 45% 45% 45%;
}

.item-1 {
  	grid-column: 1 / 2;
  	grid-row:1;
  	border: 2px solid black;
    position: relative;
}

.item-2 {
  	grid-column: 1 / 2;
  	grid-row: 2;
  	border: 2px solid black;
    position: relative;
    padding-left: 2%;
}

.item-3 {
  	grid-column: 2 / 3;
  	grid-row: 1;
  	border: 2px solid black;
    position: relative;
    padding-left: 2%;
    text-align: center;
}

.item-4 {
  	grid-column: 3 / 5;
  	grid-row: 1;
  	border: 2px solid black;
    position: relative;
}

.item-5{
    grid-column: 5 / 7;
    grid-row: 1;
    border: 2px solid black;
    position: relative;
    padding: 2%;
}

.item-6{
    grid-column: 1 / 2;
    grid-row: 3;
    border: 2px solid black;
    position: relative;
}

.item-8 {
    grid-column: 2 / 6;
    grid-row: 3;
    border: 2px solid black;
    position: relative;
}

.item-10 {
	grid-column: 5;
	grid-row: 2;
	border: 2px solid black;
	position: relative;
    padding-left: 2%;
}

.matchComments {
    width: 20.5%;
    position: relative;
    margin: 2%;
}


#scale_epr {
  position: inherit;
}

#switch_epr {
  position: inherit;
}

#opp_epr {
  position: inherit;
}

#portal_opr {
  position: inherit;
}
</style>
