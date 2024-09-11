"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosActionTypes = void 0;
var PhotosActionTypes;
(function (PhotosActionTypes) {
    PhotosActionTypes["FETCH_PHOTOS"] = "FETCH_PHOTOS";
    PhotosActionTypes["FETCH_PHOTOS_SUCCESS"] = "FETCH_PHOTOS_SUCCESS";
    PhotosActionTypes["FETCH_PHOTOS_ERROR"] = "FETCH_PHOTOS_ERROR";
    PhotosActionTypes["SET_PHOTOS_PAGE"] = "SET_PHOTOS_PAGE";
    PhotosActionTypes["TOGGLE_LIKE"] = "TOGGLE_LIKE";
    PhotosActionTypes["REMOVE_PHOTO"] = "REMOVE_PHOTO";
    PhotosActionTypes["TOGGLE_DISPLAY_LIKED_PHOTOS"] = "TOGGLE_DISPLAY_LIKED_PHOTOS";
    PhotosActionTypes["TOGGLE_SHOW_IMAGE_POPUP"] = "TOGGLE_SHOW_IMAGE_POPUP";
})(PhotosActionTypes || (exports.PhotosActionTypes = PhotosActionTypes = {}));
