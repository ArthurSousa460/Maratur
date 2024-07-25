import ImageService from "../services/ImageService.js";


const service = new ImageService();

export default class ImageController {
    async getImages(req, res) {
        try {
            const id = req.query.id;
            const result = await service.getImages(id);
            if (result != null) {
                res.status(200).json(result);
            }else{
                res.status(404).json({message: "404 - Not found"});
            }
        }catch(e){
            res.status(500).json({message: "500 - Error internal server"})
        }
        

    }
}