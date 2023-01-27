const fs=require("fs");

let Parser=function(path){
    this.path=path;

    

    this.Parse=function(){
        

        fs.readFile(this.path,"utf8",function(err,text){
            if(err)throw err;

            

            var result=GetResult(text);

            WriteToFile(result);


            
                        
            
        }); 

        
    }

    
}


function GetCharCount(array,char){
    let count=0;
    array.forEach(item => {
        if(item==char) count++;
    });    

    return count;
}




function GetResult(text){
    let array=text.split("");
    let result={};
    array.forEach(item => {
                
        result[item]=GetCharCount(array,item);
        
    });

    return result;
}



function WriteToFile(result){
    fs.writeFileSync("result.json",JSON.stringify(result,null,"\n"));   
}















module.exports=Parser;