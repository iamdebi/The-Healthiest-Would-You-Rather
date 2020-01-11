const baseURL = "http://localhost:3000/api";

export default {
  // get all questions
  getQuestions() {
    return fetch(baseURL + "/questions").then(res => res.json());
  },

  updateQuestionResponses(payload) {
    const id = payload._id
    return fetch(baseURL + "/questions/" + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
  },

  // get all users
  getUsers() {
    return fetch(baseURL + "/users").then(res => res.json());
  },

  // adds user to database
  postUser(payload) {
    return fetch(baseURL + "/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
  },

  // deletes user from database
  deleteUser(id) {
    return fetch(baseURL + "/users/" + id, {
      method: "DELETE"
    });
  },

  // updates user's details
  updateUser(payload) {
    const id = payload._id;
    return fetch(baseURL + "/users/" + id, {
      method: "UPDATE",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json());
  }
};
