import mongoose, { Mongoose } from 'mongoose';

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is Required',
    },
    money: {
        type: Number,
        required: 'Money is Required',
    },
    lend: {
        type: Boolean,
        required: 'Required',
    },
});

const model = mongoose.model('Member', MemberSchema);

export default model;
