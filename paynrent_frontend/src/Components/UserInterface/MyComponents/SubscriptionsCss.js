import { Margin } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";

export const useStyles=makeStyles({

container:{
    display:'flex',
    background:'#fffa65',
    width:'100%',
    height:625,
},
leftSlide:{
    display:'flex',
    justifyContent:'right',
    alignItems:'center',
    width:'40%',
},
paper:{
    direction:'ltr',
    width:450,
    height:370,
},
rightSlide:{
    display:'inline-block'
},
img:{
    width:550,
    height:350,
    marginLeft:200,
    padding:20,
    marginTop:50
},
paperContainer:{
    display:'flex',
    alignItems:'center',
    width:370,
    height:40,
    background:'#fbc531',
    padding:15,
    margin:20,
    borderRadius:20
},
leftPaper:{
    cursor:'pointer',
    alignItems:'center',
    width:180,
    height:55,
    },
heading:{
    textAlign:'center',
    paddingTop:2,
    fontSize:28,
    fontWeight:'bolder' ,
    color:'#fff',
    lineHeight:0.8,
      
},
img2:{
    width:200,
    objectFit:'contain',
    marginLeft:120,
    padding:'auto'
},
subheading:{
    color:'#fff',
    textAlign:'center',
    fontSize:18,
    fontWeight:600,
    lineHeight:1.8
},
rightPaper:{
    cursor:'pointer',
    width:190,
    height:55,
    background:"#fff",
    borderRadius:10,
    marginLeft:10
 },
head:{
    textAlign:'center',
    fontSize:20,
    fontWeight:800
},
subhead:{
    textAlign:'center',
    fontSize:16,
    fontWeight:600
},
sub:{
    fontFamily:'Poppins',
    fontSize:20,
    fontWeight:600,
    textAlign:'center',
    marginTop:10
},
box:{
    display:'flex',
    alignItems:'center',
    border:'1px solid #1e272e',
    borderRadius:20,
    width:350,
    height:10,
    padding:22,
    marginLeft:25,
    marginTop:20,
    cursor:'pointer'
},
button:{
    margin:15,
    paddingRight:35,
    marginTop:30
},
rightHead:{
    
   textAlign:'center',
   marginTop:100,
   fontFamily:'Alkatra',
   fontSize:36,
   fontFamily:'bolder',
},
rightsubHead:{
   textAlign:'center',
   marginTop:10,
   fontFamily:'Poppins',
   fontSize:28,
   fontFamily:'bold',
   lineHeight:0.7
 },
 subContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'#ffeaa7',
},
alert:{
    fontFamily:'Roboto',
   fontSize:16,
   fontFamily:'bold',
   color:'red',
   marginTop:8,
   marginLeft:35
}
 
})