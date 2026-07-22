export const BASE_URL = "http://localhost:8800/api/v1.0";
const CLOUDINARY_CLOUD_NAME = "someone";

export const API_ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  GET_USER_INFO = "/profile",
  GET_ALL_CATEGORIES: "/categories",
  UPLOAD_IMAGE: `https://api.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image`
}