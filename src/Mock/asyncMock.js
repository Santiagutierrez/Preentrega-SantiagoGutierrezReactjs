const products = [
    {
        id:1,
        img: "//roparevolver.com/cdn/shop/files/Remera-Insignia-Blanca_01_df13b59e-63a5-4789-8625-e08f90118a74_375x_crop_center.jpg?v=1689200085 375w,//roparevolver.com/cdn/shop/files/Remera-Insignia-Blanca_01_df13b59e-63a5-4789-8625-e08f90118a74_770x_crop_center.jpg?v=1689200085",
        insigne: "ROPAREVOLVER",
        name: "Remera insignia blanco",
        price: 15900,
        category: "REMERAS"
    },
    {
        id:2,
        img:"//roparevolver.com/cdn/shop/files/Remera-1990-Bolsillo-Cobre_01_375x_crop_center.jpg?v=1687541340 375w,//roparevolver.com/cdn/shop/files/Remera-1990-Bolsillo-Cobre_01_770x_crop_center.jpg?v=1687541340",
        insigne: "ROPAREVOLVER",
        name: "Remera 1990 bolsillo cobre",
        price: 14160,
        category: "REMERAS"
    },
    {
        id:3,
        img:"//roparevolver.com/cdn/shop/files/Remera-Rayas_01_375x_crop_center.jpg?v=1687460664 375w,//roparevolver.com/cdn/shop/files/Remera-Rayas_01_770x_crop_center.jpg?v=1687460664",
        insigne: "ROPAREVOLVER",
        name: "Remera a rayas insignia",
        price: 15500,
        category: "REMERAS"
    },
    {
        id:4,
        img:"//roparevolver.com/cdn/shop/files/Remera-perros-blanca_04_375x_crop_center.jpg?v=1682429335 375w,//roparevolver.com/cdn/shop/files/Remera-perros-blanca_04_770x_crop_center.jpg?v=1682429335",
        insigne: "ROPAREVOLVER",
        name: "Remera Kioto perros blanco",
        price:17600,
        category:"REMERAS"
    },
    {
        id:5,
        img:"//roparevolver.com/cdn/shop/files/Remera-Hongos-Negra_05_375x_crop_center.jpg?v=1684263480 375w,//roparevolver.com/cdn/shop/files/Remera-Hongos-Negra_05_770x_crop_center.jpg?v=1684263480",
        insigne: "ROPAREVOLVER",
        name: "Remera hongos negro",
        price:13500,
        category:"REMERAS"
    },
    {
        id:6,
        img:"//roparevolver.com/cdn/shop/files/Buzo-Playa-Chocolate_01_375x_crop_center.jpg?v=1689270877 375w,//roparevolver.com/cdn/shop/files/Buzo-Playa-Chocolate_01_770x_crop_center.jpg?v=1689270877",
        insigne: "ROPAREVOLVER",
        name:"Buzo playa chocolate",
        price:25600,
        category:"BUZOS"
    },
    {
        id:7,
        img:"//roparevolver.com/cdn/shop/files/Buzo-Esso-Petroleo_01_375x_crop_center.jpg?v=1689105323 375w,//roparevolver.com/cdn/shop/files/Buzo-Esso-Petroleo_01_770x_crop_center.jpg?v=1689105323",
        insigne: "ROPAREVOLVER",
        name:"Buzo petroleo",
        price:26500,
        category:"BUZOS"
    },
    {
        id:8,
        img:"//roparevolver.com/cdn/shop/files/image_f3c9189a-dfa0-43f4-bf7e-84228b8b56b3_375x_crop_center.jpg?v=1685388495 375w,//roparevolver.com/cdn/shop/files/image_f3c9189a-dfa0-43f4-bf7e-84228b8b56b3_770x_crop_center.jpg?v=1685388495",
        insigne: "ROPAREVOLVER",
        name: "Buzo hoodie frisa cobre",
        price:23000,
        category:"BUZOS"
    },
    {
        id:9,
        img:"//roparevolver.com/cdn/shop/files/image_674a2757-96d8-47b0-8731-6d63344f815d_375x_crop_center.jpg?v=1684767125 375w,//roparevolver.com/cdn/shop/files/image_674a2757-96d8-47b0-8731-6d63344f815d_770x_crop_center.jpg?v=1684767125",
        insigne: "ROPAREVOLVER",
        name: "Buzo Pull suave verde",
        price:24500,
        category:"BUZOS"
    },
    {
        id:10,
        img:"//roparevolver.com/cdn/shop/files/Buzo-Harry_02_375x_crop_center.jpg?v=1685727046 375w,//roparevolver.com/cdn/shop/files/Buzo-Harry_02_770x_crop_center.jpg?v=1685727046",
        insigne: "ROPAREVOLVER",
        name:"Buzo Harry combinado",
        price:22000,
        category:"BUZOS"
    },
    {
        id:11,
        img:"//roparevolver.com/cdn/shop/files/Campera-Carbon-Alegoria-Marron_01_375x_crop_center.jpg?v=1689012368 375w,//roparevolver.com/cdn/shop/files/Campera-Carbon-Alegoria-Marron_01_770x_crop_center.jpg?v=1689012368",
        insigne: "ROPAREVOLVER",
        name:"Campera Carbon alegoria marron",
        price:34500,
        category:"ABRIGOS"
    },
    {
        id:12,
        img:"//roparevolver.com/cdn/shop/files/Tapado-Blues-Azul_01_375x_crop_center.jpg?v=1685633180 375w,//roparevolver.com/cdn/shop/files/Tapado-Blues-Azul_01_770x_crop_center.jpg?v=1685633180",
        insigne: "ROPAREVOLVER",
        name:"TAPADO BLUES LANA AZUL",
        price:55000,
        category:"ABRIGOS"
    },
    {
        id:13,
        img:"//roparevolver.com/cdn/shop/files/Over-Jagger-Naranja_01_8bee60a0-015f-4ad9-b57f-65f0f88beb98_375x_crop_center.jpg?v=1684349309 375w,//roparevolver.com/cdn/shop/files/Over-Jagger-Naranja_01_8bee60a0-015f-4ad9-b57f-65f0f88beb98_770x_crop_center.jpg?v=1684349309",
        insigne: "ROPAREVOLVER",
        name:"SOBRECAMISA JAGGER NARANJA",
        price: 42000,
        category:"ABRIGOS"
    },
    {
        id:14,
        img:"//roparevolver.com/cdn/shop/files/Piloto-Roy-Verde_01_375x_crop_center.jpg?v=1685632680 375w,//roparevolver.com/cdn/shop/files/Piloto-Roy-Verde_01_770x_crop_center.jpg?v=1685632680",
        insigne: "ROPAREVOLVER",
        name:"PILOTO ROY VERDE",
        price:92000,
        category:"ABRIGOS"
    },
    {
        id:15,
        img:"//roparevolver.com/cdn/shop/files/Parka-Mod-Verde_01_375x_crop_center.jpg?v=1686852818 375w,//roparevolver.com/cdn/shop/files/Parka-Mod-Verde_01_770x_crop_center.jpg?v=1686852818",
        insigne: "ROPAREVOLVER",
        name:"PARKA MOD VERDE",
        price:93000,
        category:"ABRIGOS"
    },
    {
        id:16,
        img:"//roparevolver.com/cdn/shop/files/Pantalon-Kioto-Marron_01_375x_crop_center.jpg?v=1689105312 375w,//roparevolver.com/cdn/shop/files/Pantalon-Kioto-Marron_01_770x_crop_center.jpg?v=1689105312",
        insigne: "ROPAREVOLVER",
        name:"PANTALON KIOTO MARRON",
        price:36000,
        category:"PANTALONES"
    },
    {
        id:17,
        img:"//roparevolver.com/cdn/shop/files/Pantalon-Franco-Marron_01_375x_crop_center.jpg?v=1688407611 375w,//roparevolver.com/cdn/shop/files/Pantalon-Franco-Marron_01_770x_crop_center.jpg?v=1688407611",
        insigne: "ROPAREVOLVER",
        name:"PANTALON FRANCO MARRON",
        price:34000,
        category:"PANTALONES"
    },
    {
        id:18,
        img:"//roparevolver.com/cdn/shop/files/Pantalon-Bennet-Azul_01_375x_crop_center.jpg?v=1689199081 375w,//roparevolver.com/cdn/shop/files/Pantalon-Bennet-Azul_01_770x_crop_center.jpg?v=1689199081",
        insigne: "ROPAREVOLVER",
        name:"PANTALON BENNET AZUL",
        price:35500,
        category:"PANTALONES"
    },
    {
        id:19,
        img:"//roparevolver.com/cdn/shop/files/Pantalon-Kioto-Violeta_01_20x_crop_center.jpg?v=1682358124",
        insigne: "ROPAREVOLVER",
        name:"PANTALON KIOTO VIOLETA",
        price:32000,
        category:"PANTALONES"
    },
    {
        id:20,
        img:"//roparevolver.com/cdn/shop/products/Pantalon-Falu-Verde_01_20x_crop_center.png?v=1677966584",
        insigne: "ROPAREVOLVER",
        name:"PANTALON FALU VERDE",
        price:38000,
        productId:"PANTALONES"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}


export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}