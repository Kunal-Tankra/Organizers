const getApiData = async(url)=>{
    try{

        const res = await fetch(url)
        const data = await res.json()
        return data;
    }
    catch(err){
        console.log(err,"err in get api function")

        // if any error occurred 
        return []
    }
}

export default getApiData