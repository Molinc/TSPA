"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = require("redux");
var photosReducer_1 = require("./photosReducer");
exports.rootReducer = (0, redux_1.combineReducers)({ photos: photosReducer_1.PhotosReducer });
