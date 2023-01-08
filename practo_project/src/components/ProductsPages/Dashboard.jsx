import { useContext, useEffect, useState } from "react";
import Gender from "../Components/Gender";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import Price from "../Components/Price";
import SinglePage from "./SingleProductPage";

function Dashboard() {

  const [data,setData]=useState([]);
  const [loader,setLoader]=useState(true);
  const [search,setSearch]=useState(1);
  const [user,setUser]=useState("")
  const [image,setImage]=useState([]);
  const [error,setError]=useState(false);
  const [gender,setGender]=useState();
  const [price,setPrice]=useState();
  const [page,setPage]=useState(1);


  useEffect(()=>{
    
if(price&&gender)
fetching(`http://localhost:8080/doctor?_page=${page}&_limit=5&deparment=${search}&gender=${gender}&_sort=${price}`)
else if(price)
fetching(`http://localhost:8080/doctor?_page=${page}&_limit=5&deparment=${search}&_sort=${price}`)
else if(gender)
fetching(`http://localhost:8080/doctor?_page=${page}&_limit=5&deparment=${search}&gender=${gender}`)
else
fetching(`http://localhost:8080/doctor?_page=${page}&_limit=5&deparment=${search}`);
    return ;
  },[gender,price,page])




  const fetching=async(value)=>{
    setLoader(true);
    if(+search>10)
    setError(true);
    let a=await fetch(value);
    let b=await a.json();
    setData(b);
    console.log(b);
    let arr=[];
   for(let a1 of b){
    let gender=(a1.gender=="Male"?"male":"female");
    console.log(gender)
    let req=await fetch(`https://randomuser.me/api/?gender=${gender}`);
    let res=await req.json();
    // setImage([]);
    arr.push(res.results[0].picture.large);
   }
   if(image.length===0);
   setImage(arr);
   console.log(arr);
   setLoader(false);
   }

  //  const call=async(value)=>{
  //   if(value)
  //   fetching(`http://localhost:8080/doctor?_page=1&_limit=5&deparment=${search}${value}`)
  //  }
  const changeGender=(d)=>{
    setGender(d);
  }
   
  const changePrice=(d1)=>{
    setPrice(d1);
  }

  const onChange=(v)=>{
    setPage(v);
  }

   if(error)
   return <h1 style={{color:"red"}}>404 Error</h1>
  return (
    <div>
      <h3>Search Doctor</h3>
      <div style={{display:"flex",justifyContent:"center",margin:"0px 0px 16px 0px"}}>
        <div style={{border:"2px solid grey"}}>
      <span class="material-symbols-outlined" style={{padding:"0px",marginTop:"6px",marginRight:"0px"}}>search</span>
</div>
     <input type="text" placeholder="Search Doctor" onChange={(e)=>setSearch(e.target.value)} style={{height:"32px",width:"1000px",margin:"0",borderRadius:"none",marginLeft:"-1px"}}/>
        <button onClick={()=>fetching(`http://localhost:8080/doctor?_page=1&_limit=5&deparment=${search}`)} style={{backgroundColor:"#28328c",color:"white",height:"38px",width:"80px"}}>Search</button>
      </div>
      <div style={{backgroundColor:"#28328c",display:"flex",height:"40px",justifyContent:"space-around",marginTop:"32px",position:"fixed",width:"100%",marginBottom:"20px",margin:"auto",position: "-webkit-sticky",
  position: "sticky",
  top: "0"
}}>
      <Gender changeGender={changeGender} />
      <Price changePrice={changePrice} />
      </div>
      <div style={{ display: "grid", justifyContent: "center" ,marginTop:"100px",}}>
        {
          loader?<Loader />:data.map((e,i)=>{       
            return <SinglePage key={e.id} name={e.name} deparment={e.deparment} gender={e.gender} price={e.price} image={image[i]} />
          })
        }
      
      </div>
      <Pagination page={page} onChange={onChange} />
    </div>
  );
}

export default Dashboard;
