import db from '../db/connection';
import {DataTypes} from 'sequelize';
const product  = db.define('product',{
        name:{
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.FLOAT,
        },
        description:{
            type: DataTypes.STRING,
        }

    },
    {createdAt: false,updatedAt: false}
);
export default product;