import {Sequelize} from "sequelize";

const db = new Sequelize('car_api','root','',{
    host:"localhost",
    dialect:"mysql"

});

export default db;