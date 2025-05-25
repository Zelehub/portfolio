import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3000",
});

const getCineboxReviews = () => api.get("/cineboxreviews");
const deleteCineboxReview = (id) => api.delete(`/cineboxreviews/${id}`);
const postCineboxReview = (body) => api.post("/cineboxreviews", body);
const updateCineboxReview = (id, body) => api.patch(`/cineboxreviews/${id}`, body)

export { getCineboxReviews, deleteCineboxReview, postCineboxReview, updateCineboxReview };
