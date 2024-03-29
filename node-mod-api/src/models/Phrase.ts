import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instanses/mysql'

export interface PhraseInstance extends Model {
    id: number
    author: string
    txt: string
}

export const Phrase = sequelize.define<PhraseInstance>('phrase', {
    id:{
        primaryKey:true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    txt: {
        type: DataTypes.STRING
    }

},{
    tableName: 'phrases',
    timestamps: false
})
