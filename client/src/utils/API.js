import axios from "axios";

export default {
  createUser: (userData) => axios.post("/api/user", userData),
  saveUser: (displayName, userData) => axios.put(`/api/user?display_name=${displayName}`, userData),
  getUser: (displayName) => axios.get(`/api/user?display_name=${displayName}`),
  createOverworld: (worldData) => axios.post("/api/world", worldData),
  findOverworld: (worldName) => axios.get(`/api/world?name=${worldName}`),
  createArena: (arenaData) => axios.post("/api/level", arenaData),
  findArena: (arenaID) => axios.get(`/api/level?id=${arenaID}`),
  createQuestion: (questionData) => axios.post("/api/questions", questionData),
  findQuestions: (questionTopic) => axios.get(`/api/questions?topic=${questionTopic}`)
};
