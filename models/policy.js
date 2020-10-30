const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PolicySchema = new Schema({
    name: { type: String, required: true }, 
    type: String,
    holder_first_name: String,
    holder_last_name: String,
    is_active: Boolean,
    has_active_claim: Boolean,
    effective_date: Date,
    termination_date: Date

});

const PolicyModel = mongoose.model( "PolicyModel", PolicySchema);

module.exports = PolicyModel;