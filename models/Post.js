import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    hashtags: Array,
    status: {
        type: String,
        default: 'draft'
    },
    author: {
        type: String,
        default: 'Brian Fox'
    },
    

})


export default mongoose.model('Post', postSchema);