import Users from "../Models/userModel.js"


export const getUsers = async (req, res)=>{
    try{

        const users = await Users.find()
        res.status(200).json(users)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

export const getUsersById = async (req, res)=>{
    try{

        const users = await Users.findById(req.params.id);
        res.status(200).json(users)
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

export const userLogin = async (req, res)=>{
    try{
const{email, password} = req.body
     const user = await Users.findOne({email})
     if (user) {

        if (user.password == password) {
            res.status(200).json(user)            
        }else{
            res.status(400).json({message: "wrong password"})
        }

     }else{
        res.status(400).json({message: "user not found"})

     }
    }catch(e){
        res.status(500).json({message: e.message})
    }
}

export const createUser = async (req, res)=>{
    try{
const{name, email, password, address} = req.body
     const isExist = await Users.findOne({email})
     if (isExist) {
        res.status(400).json({message: "user already exists"})
     }else{
        const newUser = await Users.create({
            name,
            email,
            password,
            address
        })

        res.status(201).json(newUser)
     }
    }catch(e){
        res.status(500).json({message: e.message})
    }
}


export const updateUser = async (req, res)=>{
    try{
const{name, email, password, address} = req.body
     const user = await Users.findById(req.params.id)
     if (user) {
       user.name = name
       user.email = email
       user.password = password
       user.address = address
     
       const updateUser  = await user.save()
       res.status(201).json(updateUser)
     }
    }catch(e){
        res.status(500).json({message: e.message})
    }
}