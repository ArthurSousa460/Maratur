import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

class AttractiveService {
    async getContentFK(attractive){
        try{
            const resultRegion = await prisma.region.findFirst({
                where: {
                    cod_region: attractive.cod_region
                }
            })
            const resultCity = await prisma.city.findFirst({
                where: {
                    cod_city: attractive.cod_city
                }
            })
            const resultDestiny = await prisma.destiny.findFirst({
                where: {
                    cod_destiny: attractive.cod_destiny
                }
            })
            if (resultRegion != null && resultCity != null && resultDestiny != null) {
                return {
                    latitude: resultDestiny.latitude,
                    longitude: resultDestiny.longitude,
                    city: resultCity.name,
                    region: resultRegion.region_name
                }}
        }catch(e){
            console.log(e);
        }
    }

    async findAttractiveByName(name){
        try{
            const result = prisma.attractive.findFirst({
                where: {
                    name: name
                }
            })
            return result
        }catch(e){
            console.log(e);
        }
    }
    async formatAttactive(name){
        const resultAttractive = await this.findAttractiveByName(name);
        const resultContentFK  = await  this.getContentFK(resultAttractive);
        return {
            name: resultAttractive.name,
            type: resultAttractive.type,
            description: resultAttractive.description,
            latitude: resultContentFK.latitude,
            longitude: resultContentFK.longitude,
            region: resultContentFK.region,
            city: resultContentFK.city
        }
    }
}




export default AttractiveService;