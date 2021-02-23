import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    Company:{
        marginTop:"50px",
        marginRight:"50px",
        fontWeight:"bolder",
        fontSize:"15px",
        color:"rgba(39, 39, 38, 0.452)",
        cursor:"pointer",

        "&:hover":{
               drop:{
                display:"block !important",
                position:"absolute",
                marginTop:"120px",
                height:"100px",
                width:"100%",
                backgroundColor:"yellow",
               }
            },
       
        // "&":hover.drop{
        //     display:block;
        //     position:absolute;
        //     margin-top:120px;
        //     height:100px;
        //     width:100%;
        //     background-color: yellow;
          
        // }

      },

    drop:{
        display:"none !important"
    }





})

export  {useStyles};