import regionService from "../services/RegionService.js";


const service = new regionService();

class RegionController{
    async searchRegion(req, res){
        try{
            const regionName = req.query.regionName;
            const result = await service.findByAttractivesByRegionName(regionName);
            if(result != null){
                res.status(200).json(result);
            }else{
                res.status(404).json({message: "404 - Not found"});
            }
        }catch(e){
            res.status(500).json({message: "500 - Internal server error"})
        }
        
    }
}


export default RegionController;