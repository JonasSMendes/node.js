import mongoose, {connect} from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.set('strictQuery', false)
export const mongoConect = async () =>{
    try{
        console.log('conectando...')
        await connect(process.env.MONGO_URL as string)
        console.log('sucess')
    }catch(error){
        console.log('erro.', error)
    }
}