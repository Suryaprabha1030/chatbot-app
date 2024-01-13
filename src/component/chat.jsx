import React from "react"
import { useState } from "react"
import bot from "./assets/bot.jpg"
import Botmsg from "./botmsg"
import { analyze } from "../utils"


function Chat(){
    const[message,setmessage]=useState([
        {
            messages: "Hi,may i have your name?"
        }

    ])
    const [text,settext]=useState('');
    const send=()=>{
        let list=[...message,{messages:text,user:true}]
        if(list.length > 2){
            const reply=analyze(text)
            list=[
                ...list,{messages:reply}
            ]

        }else{
            list=[
                ...list,{
                    messages: `hi ${text}`
                },{
                    messages:`How can i help you?`
                },
                
            ];
           
        }
        setmessage(list);
        settext("");
        setTimeout(()=>{
            document.querySelector(".copy").scrollIntoView();
        })
    }
    return(
        <div>
        <div className="d-flex align-items-center justify-content-center">
           <img src={bot} alt="" width={200} hight={200}/> 
           <h2 className="text-primary">Chatbot</h2>
        </div>
        <div className="text-msg">
        {
            message.length>0 && message.map((msgs) =><Botmsg {...msgs}/>)
        }
       

        <div className="d-flex">
            <input type="text" value={text} onChange={(e)=>settext(e.target.value)} className="form-control"/>
            <button className=" btn ms-3 bg-primary text-white" onClick={send}>Send</button>      
        </div>
        <div className="copy mt-3">Copyrights reserverd surya</div>
          
        </div>
        </div>

    )
}

export default Chat