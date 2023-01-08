import React from 'react';

function Pagination({page,onChange}) {

    let z=Math.floor(Math.random()*(8-1)+2);
    let arr=[];
    for(let i=0;i<5;i++)
    arr.push(i+1);

    return (
        <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
            {
                arr.map((e,i)=>{
                    return <button key={i} onClick={()=>onChange(e)} style={{backgroundColor:+page===+e?"green":"white",borderRadius:"16px",width:"56px",height:"32px"}}>{e}</button>
                })
            }
            
        </div>
    );
}

export default Pagination;