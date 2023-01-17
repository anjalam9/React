const config = {
    api : 'https://jsonplaceholder.typicode.com',
    options:{
        headers:{'content-type':'application/json'},
    }
};

const httpGet = (apiEndpoint)=>{
    return fetch(`${config.api}${apiEndpoint}`,{
        ...config.options
    })
    .then((res)=>handleResponse(res))
    .then((res)=>res)
    .catch((error)=>{
        console.error(error);
        throw Error(error);
    });
};

const handleResponse=(response)=>{
    if(response.status === 200){
        return response.json();
    }
    else{
        throw Error(response.json() | 'error');
    }
};

export default { httpGet};