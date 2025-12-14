function getData(ID){
      return promise=new Promise((resolve, reject) => {
    setTimeout(() => {
        if(ID==3){
            reject("ID not found");
        }else{
            console.log("Data" , ID);
            resolve("Task Done");
        }
    }, 10000);});
}
const abc = getData(3);