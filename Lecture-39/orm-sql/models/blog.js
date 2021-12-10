const { Sequelize, DataTypes, Model } = require('sequelize');



const Blog = sequelize.define('Blog', {
    
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING(1234)
    },
    desc: {
        type: DataTypes.TEXT
    }

});


Blog.sync()
    .then(() => {
        console.log('Blog Table Created!');
    })
    .catch((err) => {
        console.log('Table not created', err);
    });


module.exports = Blog;

