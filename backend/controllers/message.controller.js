import { CallMerge } from "@material-ui/icons"

export const sendMessage  = async (req,res)=>{
    try {
        const {message} = req.body;
        const {id} = req.params;
        const senderId= req.userID;
        
    } catch (error) {
        res.status(500).json({error:'internal server error'})
        
    }
}