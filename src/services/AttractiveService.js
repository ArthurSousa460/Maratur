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

    async findAttractiveById(id){
        const attractive = await prisma.attractive.findFirst({
            where : {
                cod_attractive: Number(id)
            }
        })
        const contentFK = await this.getContentFK(attractive);
        const result = this.formatAttactive(attractive, contentFK);
        return result
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
    formatAttactive(attractive, contentFK){
        return {
            id: attractive.cod_attractive,
            name: attractive.name,
            type: attractive.type,
            description: attractive.description,
            latitude: contentFK.latitude,
            longitude: contentFK.longitude,
            region: contentFK.region,
            city: contentFK.city
        }
    }
    async getAttractive(name){
        const resultAttractive = await this.findAttractiveByName(name);
        const resultContentFK  = await  this.getContentFK(resultAttractive);
        const result = this.formatAttactive(resultAttractive, resultContentFK);
        return result;
    }
}




export default AttractiveService;