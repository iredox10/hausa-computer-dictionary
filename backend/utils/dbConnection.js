import mongoose from "mongoose";

const mongoConnect = async () => {
    try {
        mongoose.set('strictQuery','true')
        // await mongoose.connect('mongodb://localhost/comp-hausa-dictionary')
        await mongoose.connect('mongodb+srv://idreesadam200:iredox79@cluster0.jcxb8on.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/comp-hausa-dictionary')
        console.log('connect to mongodb')
    } catch (error) {
        console.log(error)
    }

}

export default mongoConnect