"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosReducer = void 0;
var photos_1 = require("../../common/types/photos");
var initialState = {
    photos: [],
    isLoading: false,
    error: null,
    page: 1,
    isDisplayLikedPhotos: false,
    popupImageUrl: null,
};
var PhotosReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case photos_1.PhotosActionTypes.FETCH_PHOTOS:
            return __assign(__assign({}, state), { isLoading: true });
        case photos_1.PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
            return __assign(__assign({}, state), { isLoading: false, error: null, photos: __spreadArray(__spreadArray([], state.photos, true), action.photos, true) });
        case photos_1.PhotosActionTypes.FETCH_PHOTOS_ERROR:
            return __assign(__assign({}, state), { isLoading: false, error: action.errorMessage });
        case photos_1.PhotosActionTypes.SET_PHOTOS_PAGE:
            return __assign(__assign({}, state), { page: action.page });
        case photos_1.PhotosActionTypes.REMOVE_PHOTO:
            return __assign(__assign({}, state), { photos: __spreadArray([], state.photos.filter(function (photo) { return photo.id !== action.id; }), true) });
        case photos_1.PhotosActionTypes.TOGGLE_LIKE:
            return __assign(__assign({}, state), { photos: __spreadArray([], state.photos.map(function (photo) {
                    if (photo.id === action.id)
                        return __assign(__assign({}, photo), { liked_by_user: !photo.liked_by_user });
                    return photo;
                }), true) });
        case photos_1.PhotosActionTypes.TOGGLE_DISPLAY_LIKED_PHOTOS:
            return __assign(__assign({}, state), { isDisplayLikedPhotos: action.displayLikedPhotos });
        case photos_1.PhotosActionTypes.TOGGLE_SHOW_IMAGE_POPUP:
            return __assign(__assign({}, state), { popupImageUrl: action.value });
        default: return state;
    }
};
exports.PhotosReducer = PhotosReducer;
