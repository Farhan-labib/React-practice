export const Parent=()=>{
    let a=[1,2,3,4,5,6];
    return (
<div>
{a.map((i,index)=><h1 key={index}>{i}</h1>)}
</div>
) };