import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  },
  loginUser: function(email, password) {
    return axios
      .post("/api/login", {
        email,
        password
      })
      .then(function() {
        console.log("logged in");
        window.location.replace("/members");
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  getUser: function() {
    return axios.get("/api/user_data");
  },
  getRecurBills: function(userId) {
    console.log(userId);
    return axios.get(`/api/recurbills/${userId}`);
  },
  postRecurBills: function(recurBills) {
    alert("posted");
    return axios.post("/api/recurbills/create", recurBills);
  }
};
