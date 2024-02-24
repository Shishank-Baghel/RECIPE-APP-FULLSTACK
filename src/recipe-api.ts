const apiKey = process.env.API_KEY;

const searchRepices = (searchTerm: String , page: Number)=>{
    if(!apiKey){
        throw new Error("API KEY NOT FOUND")
    }
    
}