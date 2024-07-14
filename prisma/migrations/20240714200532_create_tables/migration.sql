-- CreateTable
CREATE TABLE `city` (
    `cod_city` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cod_city`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Destiny` (
    `cod_destiny` INTEGER NOT NULL AUTO_INCREMENT,
    `latitude` VARCHAR(191) NOT NULL,
    `longitude` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cod_destiny`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attractive` (
    `cod_attractive` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `cod_destiny` INTEGER NOT NULL,
    `cod_region` INTEGER NOT NULL,
    `cod_city` INTEGER NOT NULL,

    UNIQUE INDEX `Attractive_cod_destiny_key`(`cod_destiny`),
    PRIMARY KEY (`cod_attractive`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `id_image` INTEGER NOT NULL AUTO_INCREMENT,
    `cod_attractive` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `image_path` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Attractive` ADD CONSTRAINT `Attractive_cod_city_fkey` FOREIGN KEY (`cod_city`) REFERENCES `city`(`cod_city`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attractive` ADD CONSTRAINT `Attractive_cod_region_fkey` FOREIGN KEY (`cod_region`) REFERENCES `Region`(`cod_region`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attractive` ADD CONSTRAINT `Attractive_cod_destiny_fkey` FOREIGN KEY (`cod_destiny`) REFERENCES `Destiny`(`cod_destiny`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_cod_attractive_fkey` FOREIGN KEY (`cod_attractive`) REFERENCES `Attractive`(`cod_attractive`) ON DELETE RESTRICT ON UPDATE CASCADE;
