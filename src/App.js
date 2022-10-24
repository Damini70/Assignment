// import "./styles.css";
import {useState,useEffect} from "react";

export default function App() {
  const [data,setData]=useState("");
  const [color,setColor]=useState("")
  
  useEffect(()=>{
    fetch("https://demo2965432.mockable.io/highon/colors").then((res)=>res.json()).then((result)=>setData(result.data));
   },[]);
  
  function toggle(){
     document.querySelector(".content").style.display="block";
  }
  function display(e){
    const a=e.target.innerText;
    // console.log(a);
     setColor(a);
    //  console.log(color)
  }
  function save(){
    document.querySelector(".content").style.display="none";
    document.querySelector(".details").style.display="block";
  }
  return (
    <div className="App">
     <input type="text" maxLength="300"/> <br/>
     <button onClick={toggle}>+ click here to show</button>
    {data? <div className="content" style={{display:"none"}} >
       <button style={{backgroundColor:data[0].code}} onClick={display}>{data[0].name}</button>
       <button style={{backgroundColor:data[1].code}} onClick={display}>{data[1].name}</button>
       <button style={{backgroundColor:data[2].code}} onClick={display}>{data[2].name}</button>
       <button style={{backgroundColor:data[3].code}} onClick={display}>{data[3].name}</button>
       <button style={{backgroundColor:data[4].code}} onClick={display}>{data[4].name}</button>
      <p>Give a title</p>
      <div style={{backgroundColor:"grey"}}>The Blue Car Bundle</div><br/>
      <p>Description</p>
      <div style={{backgroundColor:"grey",padding: "1rem"}}>
        <p>The list of colors found below is one that is specifically geared toward writers rather than those in the visual medium. What I mean by that statement is that I have not put color swatches along with the names, as the alternative names for the colors will often be more important to writers.
       </p>
       <p style={{textAlign:"end"}}>0/300</p>
      </div>

      <div>
        <button onClick={save}>Save</button>
        <button>Cancel</button>
      </div>


     </div>
      :""}
     {data? <div className="details" style={{display:"none",display:"flex"}}>
<div style={{backgroundColor:"red",padding:"2rem"}}></div>
<p>The list of colors found below is one that is specifically geared toward writers rather than those in the visual medium. What I mean by that statement is that I have not put color swatches along with the names,</p>
<table>
  {data.map((item)=>{
    <thead>
      <tr>item.data.quality</tr>
    </thead>
  })}
</table>
       </div>:""}
      
   
    </div>
  );
}