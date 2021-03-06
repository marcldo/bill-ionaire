import axios from "axios";

export default {
  //user routes 
  saveUser: function (userData) {
    return axios.post("/api/signup", userData);
  },
  loginUser: function (email, password) {
    return axios
      .post("/api/login", {
        email,
        password
      });
  },
  getUser: function () {
    return axios.get("/api/user_data");
  },
  logout: function () {
    return axios
      .get("/api/logout");
  },

  //recurBill routes
  getRecurBills: function (userId) {
    console.log(userId);
    return axios.get(`/api/recurbills/${userId}`);
  },
  postRecurBills: function (recurBills) {
    console.log("Utils API Post" + recurBills);
    return axios.post("/api/recurbills/create", recurBills);
  },
  deleteRecurBill: function (id, recurBills) {
    console.log("axios id " + id, recurBills)
    return axios.put(`/api/recurbills/${id}`, recurBills);
  },

  //bill routes
  getDueBills: function (id, month, year) {
    return axios.get(`/api/bills/unpaid/${id}/${month}/${year}`);
  },
  getPaidBills: function (id, month, year) {
    console.log(`/api/bills/paid/${id}/${month}/${year}`)
    return axios.get(`/api/bills/paid/${id}/${month}/${year}`);

  },
  getOverdueBills: function (id) {
    return axios.get(`/api/bills/overdue/${id}`);
  },
  updateBills: function (id, billData) {
    console.log("axios", id, billData);
    return axios.put(`/api/bills/${id}`, billData);
  },
  getHistory: function (id) {
    return axios.get(`/api/bills/history/${id}`);
  }
};
