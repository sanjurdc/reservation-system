import { makeStyles } from "@mui/styles";

export const useStyles= makeStyles({

mainContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%', 
    background:'#f2f2f2'
},
box:{  
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
   // padding:10
},
firstBox:{
    display:'flex',
    justifyContent:'space-around',
    background:'#d1ccc0',
    width:'100%',
    paddingBottom:10,
    marginTop:'10px',
   },
heading:{
    fontSize:24,
    padding:10,
    fontFamily:'Roboto',
    fontWeight:'bold',
    marginTop:10,
},
img:{
    display:'inline',
    justifyContent:'center',
},
icon:{
    justifyContent:'center',
    flexDirection:'row',
    marginTop:12
},
fuelIcon:{
    fontSize:13,
    marginLeft:5,
    fontFamily:'poppins',
    fontWeight:'bold'
},
transmissionIcon:{
    width:15,
    height:15,
    marginLeft:10,
},
transmission:{
    fontSize:13,
    marginLeft:5,
    fontFamily:'poppins',
    fontWeight:'bold'
},
seatIcon:{
    width:15,
    height:15,
    marginLeft:10,
},
capacity:{
    fontSize:13,
    paddingLeft:5,
    fontFamily:'poppins',
    fontWeight:'bold'
},
textHeading:{
    padding:18,
    fontSize:20,
    fontWeight:'bold',
    color:'#aaa69d',
    textAlign:'center',
    width:450
},
divider:{
    marginTop:35,
    fontSize:20,
    fontWeight:'bold', 
},
date:{
    display:'flex',
    justifyContent:'center',
    marginTop:20,
    marginLeft:10
},
to:{
    display:'inline',
    justifyContent:'center',
    marginLeft:20,
    background:'#474787',
    width:30,
    height:25,
    textAlign:'center',
    borderRadius:'50%',
    color:'#fff',
    fontWeight:'bold',
    marginRight:15
},
duration:{
    display:'flex',
    justifyContent:'center',
    marginLeft:30,
    marginTop:12
},
clockImage:{
    display:'inline',
    width:15,
    height:15,
    paddingTop:4,
    marginRight:5
},
city:{
    display:'flex',
    justifyContent:'center',
    marginTop:15
},
cityText:{
    fontWeight:600,
    marginLeft:10
},
pricePlan:{
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    marginTop:10
},
secondBox:{
    paddingTop:18, 
    background:'#d1ccc0'
},
header:{
    justifyContent:'center',
    padding:18,
    fontSize:20,
    fontWeight:'bold',
   // color:'#aaa69d',
},
fare:{
    display:'flex',
    justifyContent:'space-between',
    fontSize:17,
    paddingLeft:25,
    paddingRight:44,
    padding:5,
    fontFamily:'Roboto',
    fontWeight:500 
},
currency:{
    display:'inline', 
    fontSize:17,
    fontFamily:'Roboto'
},
amount:{
    display:'inline', 
    fontFamily:'Poppin',
    fontSize:18
},
pickup:{
    display:'flex',
    justifyContent:'space-between',
    fontSize:17,
    paddingLeft:25,
    paddingRight:35,
    padding:5,
    fontFamily:'Roboto',
    fontWeight:500
},
promo:{
    display:'flex',
    paddingLeft:25,
    paddingTop:20
},
buttonText:{
    backgroundImage:'linear-gradient(270deg,#1caba2 20%,#1c7fab)',
    paddingLeft:20,
    borderRadius:5
},
total:{
    display:'flex',
    justifyContent:'space-between',
    fontSize:20,
    paddingLeft:25,
    paddingRight:30,
    paddingTop:20,
    fontFamily:'Roboto',
    fontWeight:700,
   // paddingTop:20
},
location:{
    display:'flex',
    paddingLeft:25,
},
button:{
    display:'flex',
    justifyContent:'center',
    paddingTop:40,
    padding:20
},
thirdBox:{
    background:'#d1ccc0',
    marginTop:'10px',
},
textFont:{
    fontSize:18,
    fontWeight:600,
    fontFamily:'Roboto'
},
table:{
    display:'table',
    backgroundColor:'initial',
    borderCollapse:'separate',
    boxSizing:'border-box',
    textIndent:'initial',
    borderSpacing:'15px',
    borderColor:'gray',
},
pointHeading:{
    justifyContent:'center',
    paddingTop:28,
    paddingLeft:15,
    paddingRight:15,
    fontSize:20,
    fontWeight:'bold', 
},
fareHeading:{
    justifyContent:'center',
    paddingTop:35,
    padding:15,
  //  paddingRight:15,
    fontSize:20,
    fontWeight:'bold',
}

})