function useFilter(data , callback){    
return data.filter((val)=>{
    return (callback==val.callback);
})
}

export default useFilter;