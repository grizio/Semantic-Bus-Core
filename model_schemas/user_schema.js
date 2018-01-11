'use strict';

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


var UserSchema = mongoose.Schema({
    credentials: {
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
                },
                message: '{VALUE} is not a valid email'
            }
        },
        hashed_password: {
            type: String,
        }
    },
    active: {
        type: Boolean,
        default: false
    },
    mailid : {
        type: Number,
    },
    resetpasswordtoken :{
        type: Number,
        default: null
    },
    resetpasswordmdp :{
        type: Number,
        default: null
    },
    job:{
         type: String,
    },
    society:{
         type: String,
    },
    name: {
        type: String,
    },
    stripeID: {
        type: String,
    },
    workspaces: [{
        _id: String,
        role: String,
    }],
    admin: {
        type: Boolean,
        default: false
    },
    dates: {
        created_at: Date,
        updated_at: Date
    },
    googleToken: {
        type: String,
        default: null
    },
    googleId: {
        type: String,
        default: null
    },
    credit: {
        type: Number,
        default: 2000
    }
});


// UserSchema.virtual('pictureUrl').get(function () {
//     return settings.files.users.url + '/' + this.picture;
// });
UserSchema.plugin(uniqueValidator);
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

module.exports = UserSchema;