const Events=require("../eventscehma.js")


exports.getAllEvents= async(req,res)=>{
    

    try {
        const events= await Events.find()
       return  res.status(200).json({message:'successfully got the data',events})
    
    } catch (error) {
      return   res.status(500).json({message:'Internal server error'})
        
    }
        
    
    }
    
exports.createEventApp=async(req,res)=>{
        try {
            const event = await new Events({
                ...req.body
            }).save()
    
            return res.status(200).json({ message: "Booked  successfully", event })
    
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "internal server error" })
        }
    
    }