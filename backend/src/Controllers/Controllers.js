const  { Client }  = require('../../models');




class ControlleRoutes{

    async  singUp(req,res) {
        
        const { name, email, password, occupation, address } = req.body;

        try{

            const findEmail = await Client.findOne({email});

            if(email) return res.status(400).json({message: "email already exists"});
           
            const cl = await Client.create({
               name, 
               email,
               password,
               occupation,
               address
           })
           .then((cl)=>{
               return res.send(201).json({message:"client created" + cl});
           })
           .catch((err)=>{res.status(401).json({message:err});});
        }catch(err){
              return res.status(401).json({message:err});
        }
    }
}




module.exports = new  ControlleRoutes();