const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: String
});

// Creates new collection called users, loads users INTO mongoose
mongoose.model('users', UserSchema);
