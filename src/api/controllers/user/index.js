const { User } = require('../../models')

const {
    serverError
} = require('../../utils')

const userController = {
     
    createUser : async ( req, res, next )=>{
        
        try {
            
            const user = await User.create(
                req.body
            ) 
    
            await user.save()
    
            res.status(200).json({
                user,
                msg : 'User Created!'
            })
        } catch (error) {
            
            res.status(500).json(serverError)
        }
    },

    getUser : async ( req, res, next )=>{

        try {
            
            const user = await User.findById(
                req.params._id
            ) 

            if(!user){
                return res.status(404).json({
                    error: 'User not found'
                })
            }
    
            res.status(200).json({
                user
            })
        } catch (error) {
            
            res.status(500).json(serverError)
        }
    },

    updateUser : async ()=>{
        try {
            
            const user = await User.findByIdAndUpdate(
                req.params._id, req.body
            ) 

            if(!user){
                return res.status(404).json({
                    error: 'User not found'
                })
            }

            await user.save()
    
            res.status(200).json({
                user,
                msg : 'User Updated!'
            })
        } catch (error) {
            
            res.status(500).json(serverError)
        }
    },

    deleteUser : async ()=>{
        try {
            
            const user = await User.findByIdAndDelete(
                req.params._id
            ) 

            if(!user){
                return res.status(404).json({
                    error: 'User not found'
                })
            }
    
            res.status(200).json({
                msg : 'User Deleted!'
            })
        } catch (error) {
            
            res.status(500).json(serverError)
        }
    },
}

module.exports = userController