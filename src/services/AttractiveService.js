import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

class AttractiveService{
    async findAtractiveByName(name){
        try{
            const resultAttractive = await prisma.attractive.findFirst({
                where: {
                    name: name 
                }
            })
            const resultRegion = await prisma.region.findFirst({
                where: {
                    cod_region: resultAttractive.cod_region
                }
            })
            const resultCity = await prisma.city.findFirst({
                where: {
                    cod_city: resultAttractive.cod_city
                }
            })
            const resultDestiny = await prisma.destiny.findFirst({
                where: {
                    cod_destiny: resultAttractive.cod_destiny
                }
            })
            if(resultAttractive != null && resultRegion != null && resultCity != null && resultDestiny != null){
                return {
                    name: resultAttractive.name, 
                    type: resultAttractive.type, 
                    description: resultAttractive.description,
                    latitude: resultDestiny.latitude,
                    logitude: resultDestiny.longitude,
                    city: resultCity.name,
                    region: resultRegion.region_name
                }
            }else{
                return null;
            }
        }catch(e){
            console.log(e);
        }
    }
}

export default AttractiveService;