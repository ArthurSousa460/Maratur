import { PrismaClient } from "@prisma/client";
import AttractiveService from "./AttractiveService.js";

const prisma = new PrismaClient();
const attService = new AttractiveService();

class RegionService {
    async findByRegionName(regionName){
      try{
        const result = await prisma.region.findFirst({
          where: {
            region_name: regionName
          }
        });
        return result;
      }catch(e){
        console.log(e);
      }
    }
    async findByAttractivesByRegionName(regionName){
      try{
        const resultRegionName = await this.findByRegionName(regionName); 
        const attractives = await prisma.attractive.findMany({
          where: {
            cod_region: resultRegionName.cod_region
          }
        });
        const fullAtractives = await Promise.all(attractives.map(async (elem) =>{
          const result = await attService.getContentFK(elem);
          return {
            id: elem.cod_attractive,
            name: elem.name,
            type: elem.type,
            description: elem.description,
            ...result
          }
        }));
        return fullAtractives;
      }catch(e){
        console.log(e);
      }
    }
}

export default RegionService;