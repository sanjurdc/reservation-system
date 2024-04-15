import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({

container:{
    display:'flex',
    flexDirection:'row',
    height:780,
},
column:{
    width:600,
},
heading:{
    fontFamily:'Roboto',
    fontSize:26,
    fontWeight:600,
    marginLeft:60,
    marginTop:50
},
fuel:{
    width:20,
    height:20
},
fuels:{
    marginTop:15,
    margin:5,
    marginLeft:60
},
fueltype:{
    fontFamily:'Roboto',
    fontSize:18,
    color:'rgba(89,89,105,.8)',
    paddingLeft:7
},
seater:{
    width:20,
    height:20,
    marginLeft:20
},
city:{
    fontFamily:'Roboto',
    fontSize:22,
    fontWeight:600,
    color:'rgba(89,89,105,.8)',
    paddingLeft:7,
    position:'relative',
    top:-4
},
cityicon:{
    marginTop:35,
    marginLeft:55,
    width:150,
    height:120
},
img:{
    marginLeft:50,
    marginTop:-40
},
box:{
    width:620,
     height:300,
    background:'#d1ccc0',
    margin:30,
    marginTop:15,
    borderRadius:8,
    boxShadow:'0 2px 6px 0 rgba(0,0,0,.1607843137254902)',
    marginLeft:70    
},
head:{
    fontFamily:'Poppin',
    fontSize:20,
    fontWeight:500,
    color:'#fff',
    background:'rgb(5, 186, 181)',
    textAlign:'center',
    marginTop:25,
    padding:15,
    borderRadius:10,
    width:590,
    marginLeft:70
},
radio:{
    padding:15,
    paddingLeft:30,
},
booking:{
    border:'1px solid #222f3e',
    padding:10,
    marginLeft:65,
    width:430,
    background:'#f1f1f1',
    borderRadius:5
},
bookamt:{
    fontSize:22,
    fontFamily:'Roboto',
    fontWeight:800
},
pay:{
    fontSize:20,
    fontFamily:'Roboto',
    fontWeight:500
},
dot:{
    width:6,
    background:'#adadad',
    height:6,
    borderRadius:'50%',
    position:'relative',
    top:-12,
    left:70
},
refundable:{
    marginLeft:85 ,
    fontFamily:'Poppin',
    fontSize:18,
    height:0,
},
delivery:{
    width:410,
    marginLeft:105,
    marginTop:28,
    height:20 
},
location:{
    position:'relative',
    left:67,
},
location1:{
    position:'relative',
    left:67,
    top:17
},
arrow:{
    position:'relative',
    top:-10,
    left:455,
},
calendar:{
    width:410,
    marginLeft:105,
    height:0                
},
calendaricon:{
    position:'relative',
    left:67,
    top:18
}, 
arrowicon:{
    position:'relative',
    top:8,
    left:455,                
 },
note:{
    fontFamily:'Poppin',
    fontSize:15,
    color:'#999',
    marginTop:20,
    marginLeft:105
},
box1:{
    width:620,
    height:228,
    background:'#d1ccc0',
     borderRadius:8,
    boxShadow:'0 2px 6px 0 rgba(0,0,0,.1607843137254902)',
    marginLeft:70   
},
proceed:{
    width:620,
    marginLeft:65,
    marginTop:25,
    paddingLeft:5,
    marginBottom:10
},
button:{
    padding:3,
    fontSize:20,
},
payment:{
    width:20,
    height:20,
    cursor:'pointer',
    position:'relative',
    top:5
},
fast:{
    fontSize:18,
    fontFamily:'Roboto',
    fontWeight:800,
    padding:5
}

})