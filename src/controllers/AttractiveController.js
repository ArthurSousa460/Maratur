import AttractiveService from "../services/AttractiveService.js";

const service = new AttractiveService();

class AttractiveController{
    async searchAttractive(req, res){
        try{
            const name = req.query.name;
            const result  = await service.getAttractive(name);
            if(result != null){
                res.status(200).json(result);
            }else{
                res.status(400).json({message: "404 - Not found"});
            }
    
        }catch(e){
            res.status(500).json({message: "500 - Internal server error"})
        }
    
    }
    async findAttractiveByid(req, res){
        try{
            const id = req.query.id;
            const result  = await service.findAttractiveById(id);
            if(result != null){
                res.status(200).json(result);
            }else{
                res.status(400).json({message: "404 - Not found"});
            }
    
        }catch(e){
            res.status(500).json({message: "500 - Internal server error"})
        }
    }

}

export default AttractiveController;