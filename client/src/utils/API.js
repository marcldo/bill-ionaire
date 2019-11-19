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

  getBills: function() {
    return Promise.resolve({
      data: [
        {
          id: 1,
          name: "visa",
          amount: 100,
          dueDate: "2019-11-16",
          paid: "yes"
        },
        {
          id: 2,
          name: "visa",
          amount: 50,
          dueDate: "2019-11-16",
          paid: "no"
        }
      ]
    });
  }
};
