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
    return axios.get(`/api/recurbills/${userId}`);
  },

  getRecurBills: function(userId) {
    return axios.get(`/api/recurbills/${userId}`);
  },

  getBills: function() {
    return Promise.resolve({
      data: [
        {
          UserId: 1,
          name: "visa",
          amount: 100,
          startDate: "2019-11-16",
          frequency: "monthly"
        },
        {
          UserId: 2,
          name: "visa",
          amount: 50,
          startDate: "2019-11-16",
          frequency: "bi-weekly"
        }
      ]
    });
  }
};
