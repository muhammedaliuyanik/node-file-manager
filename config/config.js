const config = {
    jwtSecret: process.env.ACCESS_TOKEN_SECRET || '7a0135a37a46a64a8a8a92d2515a9afec216050ef7c6d6a4f7aec578e5ea66996e2ccf16ceaed4a5179e9b793bc38fe48443c13f4a9ac770143845d84ef4828a',
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI || 'mongodb+srv://ali:yu3cjzKkByIqHPtO@cluster0.ajnebtu.mongodb.net/'
};

module.exports = config;
