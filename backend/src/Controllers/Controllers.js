const  { Client }  = require('../../models');




class ControlleRoutes{

    async  singUp(req,res) {
        
        const { name, email, password, occupation, address } = req.body;

        try{

            const findEmail = await Client.findOne({where: {email}});
            
            if(findEmail) return res.status(400).json({message: "email already exists"});
           
            const cl = await Client.create({
               name, 
               email,
               password,
               occupation,
               address
           })
           .then((cl)=>{
               return res.status(201).json({message: cl });
           })
           .catch((err)=>{res.status(401).json({message:err});});
        }catch(err){
              return res.status(401).json({message:err});
        }
    }

    async singIn(req,res){
          const { email, password} = req.body;
          
          try{
            const clientEmail = await Client.findOne({where:{email}});
            
            if(!clientEmail) return res.status(404).json({message:"email invalid"});
            
            const clientPassword =  await Client.findOne({where: {password}});
            
            if(!clientPassword) return res.status(404).json({message:"email invalid"});

            return res.status(200).json({clientPassword});
          }catch(err){
              return res.status(500).json({message: "indisponible service"});
          }
    }

    async delete(req, res){
        try{

           await Client.delete()
            .then(()=>{ return res.status(200).json("all clients was deleted")})
            .catch((err)=>{return res.status(401).json({message:err});})

        }catch(err){
            return res.json({message:err});
        }
    }
}




module.exports = new  ControlleRoutes();