const { Crime } = require('../../models')

const { serverError } = require('../../utils')

const crimeController = {
     
    createCrime : async ()=>{
        
    },

    getCrime : async ()=>{

    },

    updateCrime : async ()=>{

    },

    deleteCrime : async ()=>{

    },

    crimeDuration : async ( req,res, next )=>{

        try {
            
            const {
                
                from, to
            } = req.body

            const crimes = await Crime.find({
                date: {
                    $gte: new Date(from),
                    $lt: new Date(to)
                }
            })

            res.status( 200 ).json({
                crimes
            })

        } catch (error) {
            
            res.status( 500 ).json( serverError )
        }
    }
}

module.exports = crimeController