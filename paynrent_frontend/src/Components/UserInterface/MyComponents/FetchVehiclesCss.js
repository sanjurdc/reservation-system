import { makeStyles } from "@mui/styles";

export const useStyles= makeStyles({

mainContainer:{
    display:'inline-block',
    width:277,
    height:230,
    background:'#fff',
    borderRadius:15,
    marginLeft:40
},
carIcon:{
    display:'block',
    width:200,
    marginLeft:45,
    padding:10
},
header:{
    display:'inline-block',
    margin:'auto',
    paddingLeft:25
},
heading:{
    fontSize:16,
    fontFamily:'Roboto',
    fontWeight:'bolder'
},
icon:{
    display:'flex',
    flexDirection:'row',
    marginTop:10
},
iconText:{
    fontSize:15,
    paddingLeft:5,
    fontFamily:'Roboto',
},
iconPic:{
    width:15,
    height:15,
    paddingLeft:15
},
rupeeIcon:{
    width:18,
    height:18,
    paddingLeft:5,
    paddingTop:12
},
rupee:{
    display:'flex',
    justifyContent:'space-evenly',
    flexDirection:'row',
    marginTop:15
},
fare:{
    fontSize:28,
    fontWeight:'bold',
    paddingLeft:5,
    fontFamily:'poppins', 
},
button:{
    fontSize:18,
    fontFamily:'Roboto',
    fontWeight:'bold',
    marginLeft:10,
    backgroundImage:' linear-gradient(270deg,#1caba2 20%,#1c7fab)',
    borderRadius:8
}
})