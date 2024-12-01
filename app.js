let btn = document.querySelector("button");
let par = document.querySelector("p");

let url= "https://catfact.ninja/fact"


async function getFact(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("err:",e);

    }

}
btn.addEventListener("click" ,async()=>{
    let fact= await getFact();
    par.innerText=fact;
});    

