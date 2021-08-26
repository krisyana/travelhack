"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                name: "Museum Benteng Vredeburg Yogyakarta",
                price: 500000,
                description: "Musiyum Bètèng Vredeburg adalah sebuah benteng yang terletak di depan Gedung Agung dan Kraton Kesultanan Yogyakarta.",
                location: " Jl. Margo Mulyo No.6, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122, Indonesia",
                image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7R5kk_8_TZgyKE8M9V2JsxcPlpgfft9lAn8X9rLuRvsCigR1--u6oIvo7u81C9lTrpk_hv0l0ruXf5LY2AxpSQA",
                quota: 25,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Kampung Wisata Taman Sari",
                price: 3500000,
                description: "Taman Sari Yogyakarta atau Taman Sari Keraton Yogyakarta adalah situs bekas taman atau kebun istana Keraton Ngayogyakarta Hadiningrat,  ",
                location: " Patehan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55133, Indonesia",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenzeJblg0hdJmOdwWX0rnEmV1W5sXSd28WbknkhhNPY6i0bpXu4vRYtYZJdxDf1iDpsF_xf7pu_E7Br2WPlS0WQ",
                quota: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Situs Warungboto",
                price: 450000,
                description: "Situs Warungboto adalah salah satu bangunan cagar budaya yang terletak di Jalan Veteran No.77, Kelurahan Warungboto, Kecamatan Umbulharjo, K",
                location: "Jl. Veteran No.77, Warungboto, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55164, Indonesia",
                image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcScIg4DKinFALmB1585SmOcPlVTF45iB0NQaAhdNqgoz9EUV2yhTvQ_reXMPvxwZZq-0Hpa9JuiWjhHbQ",
                quota: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Coban Rais",
                price: 45000,
                description: "Air terjun Coban Rais merupakan air terjun yang berlokasi di Desa oro-oro Ombo, Kota Batu. ",
                location: "Jalur Lkr. Bar. No.8, Oro-Oro Ombo, Kec. Batu, Kota Batu, Jawa Timur 65316, Indonesia",
                image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ0qkRiEL3H33ompD8i08J2x3U8o3bpgg9WXaHLUGvz9hSkOhu-zGQg2Kjki0aF4RDusEx7_caFElpt9Q",
                quota: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Air Terjun Curug Nangka",
                price: 45000,
                description: "Air terjun yang indah di area hutan, dengan kolam kecil di dasar sebagai kolam ciprat.",
                location: " Sukajadi, Kec. Tamansari, Bogor, Jawa Barat 16370, Indonesia",
                image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQTCPHOemIPJPmL_1zdtzuofgrt86Bk0mwDeFt67MIRYwt8rqPwH0egKYVNt7-IAB13RCWTdp7is1J-iQ",
                quota: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Pantai pulau dua",
                price: 450000,
                description: "Di Pulau Dua, kita dapat menikmati keindahan tiada tara, hamparan laut yang biru, pasirnnya putih bersih, dan suasana patai yang tenang.",
                location: "di Gampong Ujung Pulau Rayeuk, Kecamatan Bakongan Timur, Aceh Selatan.",

                image: "https://anteroaceh.com/files/images/20201118-0f3a7408-0824-4188-affa-47ae24ab1494-copy.jpg",
                quota: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Nepal Van Java",
                price: 550000,
                description: "Desa kecil yang terkenal dengan rumah penuh warna di lereng berlatar pemandangan gunung yang dramatis.",
                location: "Dusun, Butuh, Temanggung, Kaliangkrik, Magelang, Jawa Tengah 56153, Indonesia",

                image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ53shV6Klq9WLW-48iPkbADfsogvGLE_0NxL0-SiSVwLZlFH1bp82gOO78DU7KNXAR66U3DkXAT6OKFA",
                quota: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Pantai Jimbaran Bali",
                price: 150000,
                description: "Pantai Jimbaran Bali adalah salah satu pantai pasir putih di pulau Bali yang sangat terkenal.",
                location: "di wilayah Kecamatan Kuta selatan, kabupaten Badung, Provinsi Bali.",

                image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSozMwewq2tf-OPyb25dEd7XOZ4h8a4N8fF3-WmHk7xH9hyFt4vrDjPeaT6uUZcjI1HQDB9OyeDxcycTA",
                quota: 20,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert("Places", data);
    },

    down: (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete("Places", null);
    },
};