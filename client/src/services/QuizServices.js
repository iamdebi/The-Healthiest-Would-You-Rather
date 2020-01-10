const baseURL = "http://localhost:3000/api";

export default {
  // for questions
  getQuestions() {
    return fetch(baseURL + "/questions").then(res => res.json());
  },

  //   for users

  getUsers() {
    return fetch(baseURL + "/users").then(res => res.json());
  },

  postUser(payload) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
  },

  deleteUser(id) {
    return fetch(baseURL + id, {
      method: "DELETE"
    });
  },

  updateUser(payload) {
    id = payload._id;
    return fetch(baseURL + id, {
      method: "UPDATE",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
  }
};
