const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    c_id: { type: Number, required : true}, 
    c_adhar: { type: String, required : true},
    c_pan: { type: String, required : true},
    c_dob: { type: Date, required : true},
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', UserSchema);