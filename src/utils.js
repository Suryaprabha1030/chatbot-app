import moment from "moment"
export const analyze = (text)=>{ 
    if(text.includes('hi') || text.includes('hai') ||text.includes('hello'))
        return 'hi ,how can i help you?'
    else if(text.includes("date"))
        return moment().format('MMMM Do YYYY')
    else if(text.includes("time"))
        return moment().format('H:mm:ss:a')
    else if (text.includes("interest"))
        return 'Bank interest rate is 8.7'

    
    return "I can't get you.Can you rephrases the message"
}