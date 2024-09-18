// https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user

const getData = async() =>{
    
    try{
        const res = await fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user');
        const data = await res.json();
        const req = data.find((elem)=>elem.id === "8");
        if(req){
            console.log(req);
        }
        else{
            throw new Error;
        }
    }
    catch(err){
        console.log(err);
    }
}

getData()