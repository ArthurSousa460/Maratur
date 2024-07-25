import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default class ImageService{
    async getImages(id){
        const images = prisma.image.findMany({
            where: {
                cod_attractive: Number(id)
            }
        })
        return images;
    }
}