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
  },
  deleteRecurBill: function(id) {
    return axios.delete(`/api/recurbills/${id}`);
  },

  getDueBills: function(id, month) {
    return axios.get(`/api/bills/unpaid/${id}/${month}`);
  },
  getPaidBills: function(id, month) {
    return axios.get(`/api/bills/paid/${id}/${month}`);
  },
  getOverdueBills: function(id) {
    return axios.get(`/api/bills/overdue/${id}`);
  }
};
