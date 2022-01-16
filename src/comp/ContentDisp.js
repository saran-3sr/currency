import react from "react";

const ContentDisp=(data)=>{
    
    var ele=Object.entries(data)
    console.log(ele)
    return(
        <div className="disp">
            <p>{ele[0][1][0]}</p>
            <p>{ele[0][1][1]}</p>
        </div>
        
    )
}
export default ContentDisp