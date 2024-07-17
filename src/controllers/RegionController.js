import regionService from "../services/RegionService.js";


const service = new regionService();

class RegionController{
    async searchRegion(req, res){
        try{
            const regionName = req.params.regionName;
            const result = await service.findByAttractiveByIdRegion(regionName);
            if(result != null){
                res.status(200).json(result);
            }else{
                res.status(400).json({message: "400 - Bad request"});
            }
        }catch(e){
            res.status(500).json({message: "500 - Internal server error"})
        }
        
    }
}


export default RegionController;