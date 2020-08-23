import React from 'react'



const Done = ({done}:any) =>{
    const doneList = done.length ? (
        done.map((Done:any) =>{
            return(
                <div key={Done.id}>
                    <span>{Done.content}</span>    
                </div>
            )
        })
    ):(<p></p>);
    return(
        <div className="done collection">
            {doneList}
        </div>    
    )
}

export default Done