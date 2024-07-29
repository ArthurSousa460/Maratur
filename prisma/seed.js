import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main(){
    const destinys = await prisma.destiny.createMany({
        data:[
            {
                latitude: "-2.5271314638427054",
                longitude: "-44.306753776435954", 
    
            },
            {
                latitude: "-2.5280094089509864",
                longitude: "-44.30463911769424"
            },
            {
                latitude: "-2.486843861028767", 
                longitude: "-44.276379283404395"
            },
            {
                latitude:     "-2.465010684041222",
                longitude: "-44.19766963068573"
            },
            {
                latitude: "-2.5287805561641252",
                longitude: "-44.30251339177881"
            }
        ]
    });
    const regions = await prisma.region.createMany({
        data:[
            {
                region_name: "Centro Histórico"
            },
            {
                region_name: "Litoral"
            }
        ]
    });
    const citys = await prisma.city.createMany({
        data: [
            {
                name: "São luís"
            },
            {
                name: "Santa Amaro"
            }
        ]   
    });
    const attractives = await prisma.attractive.createMany({
        data: [
            {
                name: "Pálacio dos leões",
                type: "Monumento histórico",
                description: "Palácio dos Leões é o edifício-sede do governo do estado brasileiro do Maranhão. Localiza-se no centro histórico da cidade de São Luís, na área designada Patrimônio Mundial pela UNESCO.",
                cod_destiny:1,
                cod_region: 1,
                cod_city: 1,
            },
            {
                name: "Catedral de São Luís",
                type: "Monumento Histórico",
                description: "A Catedral de São Luís do Maranhão (Catedral de Nossa Senhora da Vitória) é a sede da arquidiocese do mesmo nome. Localiza-se na Praça Pedro II, no centro de São Luís, capital do estado do Maranhão, no Brasil.",
                cod_destiny: 2,
                cod_region: 2,
                cod_city: 1,
            },
            {
                name: "Praia da Litorânea",
                type: "Praia",
                description: "A praia litorânea de São Luís do Maranhão é uma atração turística importante da capital maranhense, situada no nordeste do Brasil. Conhecida por suas praias de areia dourada, águas mornas e clima tropical, oferece um cenário paradisíaco",
                cod_destiny: 3,
                cod_region: 2,
                cod_city: 1,
            },
            {
                name: "Praia do Araçagy",
                type: "Praia",
                description: "A Praia do Araçagi, em São Luís do Maranhão, é frequentada principalmente por moradores locais. Com águas calmas, é ideal para banho e atividades recreativas. Menos movimentada, oferece tranquilidade e algumas barracas que servem petiscos e bebidas.",
                cod_destiny: 4,
                cod_region: 2,
                cod_city:1,
            },
            {
                name: "Teatro Arthur Azevedo",
                type: "Cultura",
                description: "O Teatro Arthur Azevedo, em São Luís do Maranhão, é um dos mais antigos do Brasil. Inaugurado em 1817, possui arquitetura neoclássica e uma rica programação cultural com peças teatrais, musicais e eventos.",
                cod_destiny: 5,
                cod_region: 1,
                cod_city: 1,
            }
        ]
    });

    const image = await prisma.image.createMany({
        data:[
            {
                cod_attractive: 1,
                name: "Pálacio dos leões",
                image_path: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Pal%C3%A1cio_dos_Le%C3%B5es_-_S%C3%A3o_Luis_-_Maranh%C3%A3o_-_Brasil.JPG"
            }
        ]
    });
}

main().then((r) =>{
    console.log("Database seeded!");
}).finally(async () =>{
    await prisma.$disconnect();
});