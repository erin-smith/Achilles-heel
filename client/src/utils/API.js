import axios from "axios";

export default {
  createUser: (userData) => {
    return axios.post("/api/user", userData);
  },
  saveUser: (displayName, userData) => {
    return axios.put(`/api/user?display_name=${displayName}`, userData);
  },
  getUser: (displayName) => {
    return axios.get(`/api/user?display_name=${displayName}`);
  },
  createOverworld: (worldData) => {
    return axios.post("/api/world", worldData);
  },
  findOverworld: (worldName) => {
    return axios.get(`/api/world?name=${worldName}`);
  },
  createArena: (arenaData) => {
    return axios.post("/api/level", arenaData);
  },
  findArena: (arenaID) => {
    return axios.get(`/api/level?id=${arenaID}`);
  },
  createQuestion: (questionData) => {
    return axios.post("/api/questions", questionData);
  },
  findQuestions: (questionTopic) => {
    return axios.get(`/api/questions?topic=${questionTopic}`);
  }
};
