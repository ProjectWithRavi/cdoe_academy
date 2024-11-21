const Eventmodel = require('../Model/Event')
const ProjectModel = require('../Model/Project')
const projectcreate = async(req,res)=>{
    try {
        const {Tittle,Description,Text} = req.body
        const result = await ProjectModel.create({
            Tittle:Tittle,
            Description:Description,
            Text:Text
        })
        res.status(201).json({message:"created successfully"})
    } catch (error) {
        console.log(error);
        
    }
}
const Eventcreate = async(req,res)=>{
    try {
        const {Tittle,Description,} = req.body
        const result = await Eventmodel.create({
            Tittle:Tittle,
            Description:Description
        })
        res.status(201).json({message:"created successfully"})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {projectcreate,Eventcreate}