USE turism;
/*Insert Destiny*/



/*Palacio dos leões*/ INSERT INTO Destiny(latitude, longitude) VALUES(
    "-2.5271314638427054", 
    "-44.306753776435954"
)


/*Catedral de São luis*/INSERT INTO Destiny(latitude, longitude) VALUES(
    "-2.5280094089509864",
     "-44.30463911769424"
);

/*praia da litoranea*/INSERT INTO Destiny(latitude, longitude) VALUES(
    "-2.486843861028767", 
    "-44.276379283404395"
);



/*araçagy*/INSERT INTO Destiny(latitude, longitude) VALUES(
    "-2.465010684041222",
    "-44.19766963068573"
);

/*Teatro Arthur Azevedo*/INSERT INTO Destiny(latitude, longitude) VALUES(
    "-2.5287805561641252", 
    "-44.30251339177881"
);



/* Insert regions*/
INSERT INTO Region(region_name) VALUES("Centro Historico");
INSERT INTO Region(region_name) VALUES("Litoral");


/* Insert citys*/
INSERT INTO city(name) VALUES("São luís");


/* INSERT Attractives*/
INSERT INTO Attractive(name, type, description, cod_destiny, cod_region, cod_city) 
VALUES("Pálacio dos leões", 
"Monumento histórico", 
"Palácio dos Leões é o edifício-sede do governo do estado brasileiro do Maranhão. Localiza-se no centro histórico da cidade de São Luís, na área designada Patrimônio Mundial pela UNESCO.",
 "1",
 "1", 
 "1");
INSERT INTO Attractive(name, type, description, cod_destiny, cod_region, cod_city) VALUES (
"Catedral de São Luís",
"Monumento Histórico",
"A Catedral de São Luís do Maranhão (Catedral de Nossa Senhora da Vitória) é a sede da arquidiocese do mesmo nome. Localiza-se na Praça Pedro II, no centro de São Luís, capital do estado do Maranhão, no Brasil.",
"2",
"1",
"1"
);
INSERT INTO Attractive(name, type, description, cod_destiny, cod_region, cod_city) VALUES(
    "Praia da Litorânea",
    "Praia",
    "A praia litorânea de São Luís do Maranhão é uma atração turística importante da capital maranhense, situada no nordeste do Brasil. Conhecida por suas praias de areia dourada, águas mornas e clima tropical, oferece um cenário paradisíaco",
    "3",
    "2",
    "1");
INSERT INTO Attractive(name, type, description, cod_destiny, cod_region, cod_city) VALUES(
    "Praia do Araçagy",
    "Praia",
    "A Praia do Araçagi, em São Luís do Maranhão, é frequentada principalmente por moradores locais. Com águas calmas, é ideal para banho e atividades recreativas. Menos movimentada, oferece tranquilidade e algumas barracas que servem petiscos e bebidas.",
    "4",
    "2",
    "1");
INSERT INTO Attractive(name, type, description, cod_destiny, cod_region, cod_city) VALUES(
    "Teatro Arthur Azevedo",
    "Cultura",
    "O Teatro Arthur Azevedo, em São Luís do Maranhão, é um dos mais antigos do Brasil. Inaugurado em 1817, possui arquitetura neoclássica e uma rica programação cultural com peças teatrais, musicais e eventos.",
    "5",
    "1",
    "1"
);


/* Insert Images*/
INSERT INTO Image(cod_attractive, name, image_path) VALUES("1", "Pálcio dos Leões", 
"https://upload.wikimedia.org/wikipedia/commons/4/4f/Pal%C3%A1cio_dos_Le%C3%B5es_-_S%C3%A3o_Luis_-_Maranh%C3%A3o_-_Brasil.JPG");
