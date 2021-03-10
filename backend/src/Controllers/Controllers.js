const  { Client }  = require('../../models');
require('dotenv').config();

const bcrypt = require('bcrypt');
const CreateToken = require('./Jwt');
const { Op } = require('sequelize');

class ControlleRoutes{

    async  singUp(req,res) {
        
        const { name, email, password, occupation } = req.body;
        console.log(name,email,password,occupation)

        const hash = bcrypt.hashSync(password,10);
    

        try{

            const findEmail = await Client.findOne({where: {email}});
            
            if(findEmail) return res.status(400).json({message: "email already exists"});
           
            const cl = await Client.create({
               name, 
               email,
               password: hash,
               occupation
           })
           .then((cl)=>{

              const id = cl.id;
              const token = CreateToken.create_token(id);
             
              return res.status(201).json({cl ,token});
           })
           .catch((err)=>{return res.status(401).json({message:err});});
        }catch(err){
              return res.status(401).json({message:err});
        }
    }

    async singIn(req,res){
          const { email, password} = req.body;
          
          try{
            const clientEmail = await Client.findOne({where:{email}});
            
            if(!clientEmail) return res.status(404).send({message:"email invalid"});

            const passCompare = bcrypt.compareSync(password,clientEmail.password);
        
            if(passCompare === false)
               return res.status(404).send({message:"password invalid"});
            
    
           const token = CreateToken.create_token(clientEmail.id);
            return res.status(200).json({clientEmail, token});
          }catch(err){
              return res.status(500).json({message: "indisponible service"});
          }
    }

    async get(req,res){
    
          
          try{
            const clients = await Client.findAll();
            
        
            return res.status(200).send( clients );
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
            return res.status(500).json({message:err});
        }
    }

    async sarch(req,res){

        const { name } = req.query;
      
        try{
            
          const foundName = await Client.findAll({where:{
              [Op.or]:[{ name }]
          }})
          .then(function(foundName){
             if(foundName[0] === undefined)
                return res.status(400).json({message:'user not found'});
            
             return res.status(200).json({ foundName });
          })
          .catch((err)=>{
              return res.status(400).json(err);
          })
        }
        catch(err){
            return res.status(500).json({message:"don'n connect with database"});
        }
    }

    async destroy(req,res){
       
        try{
          const data = await Client.findByPk(req.params.id)
          
          if(data){
            
              await data.destroy({where:{
                  id:data.id
              }})
              .then(function(){
                  return res.status(200).json({message:"user deleted with sucess"});
              })
              .catch((err)=>{
                  return res.status(400).json({message:"don't possible delete datas"});
              })
          }
          else{
              return res.status(400).json({message:"user not found"});
          }
        
        }
        catch(err){
            return res.status(500).json({message:"don't connect with database"})
        }
    }

    async delete(req,res){
        try{
            const data = await Client.findByPk(req.params.id)
            
            if(data){
              
                await data.destroy({where:{
                    id:data.id
                }})
                .then(function(){
                    return res.status(200).json({message:"user deleted with sucess"});
                })
                .catch((err)=>{
                    return res.status(400).json({message:"don't possible delete datas"});
                })
            }
            else{
                return res.status(400).json({message:"user not found"});
            }
          
          }
          catch(err){
              return res.status(500).json({message:"don't connect with database"})
          }
    }

    async chat(req,res){
        
        res.status(200).send('connect route socket');
    }
}




module.exports = new  ControlleRoutes();