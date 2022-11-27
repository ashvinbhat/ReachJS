import axios from "axios";

export default function Category(props)
{
    const requestbody = {
        pagename:props.name
    }
    console.log("prop name", props.name);
    const options = {
        headers : {"Content-Type":"text/plain"}
    }
    axios.get(props.name, requestbody, options)
        .then((res)=>{console.log("get sent", res.data)})
        .catch((err)=>console.log("get error", err))
    ;
    return(
        <h1>Needs to display all {props.name} vendors from database</h1>
    )
}