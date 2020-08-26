import axios from "axios";

export default {
  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  saveUser: function(displayName, userData) {
    return axios.put("/api/user?display_name=" + displayName, userData);
  },
  getUser: function(displayName) {
    return axios.get("/api/user?display_name=" + displayName);
  },
  createOverworld: function(worldData) {
    return axios.post("/api/world", worldData);
  },
  findOverworld: function(worldName) {
    return axios.get("/api/world?name=" + worldName);
  },
  createArena: function(arenaData) {
    return axios.post("/api/level", arenaData);
  },
  findArena: function(arenaID) {
    return axios.get("/api/level?id=" + arenaID);
  },
  createQuestion: function(questionData) {
    return axios.post("/api/questions", questionData);
  },
  findQuestions: function(questionTopic) {
    return axios.get("/api/questions?topic=" + questionTopic);
  }
};
