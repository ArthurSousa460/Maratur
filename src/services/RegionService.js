import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

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

    async findByAttractiveByIdRegion(regionName){
      try{
        const resultRegionName = await this.findByRegionName(regionName);
        const result = await prisma.attractive.findMany({
          where: {
            cod_region: resultRegionName.cod_region
          }
        })
        return result
      }catch(e){
        console.log(e);
      }
    }
}

export default RegionService;