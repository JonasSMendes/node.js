 import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/mysql';

interface UserInstance extends Model  {
    id:number,
    name:string
    age:number
}

export const User = sequelize.define<UserInstance>('User',{
    id:{
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING,
        get(){
            const row = this.getDataValue('name');
            return row.toUpperCase();
        }
    },
    firtNameLetter:{
        type:DataTypes.VIRTUAL,
        get(){
            let name =  this.getDataValue('name').toUpperCase()
            return name[0]
        }
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue: 18
    },
},{
    tableName:'users',
    timestamps: false
});
