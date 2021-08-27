import axios from "axios";

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
       Authorization: 'Bearer v5btwEwkHD5NYYXAchNQAFNKVH5IWakNqhU62rUJILHKYX9EcQ-5pNqm5dmYHYi6eib07D6JxUa0kNIGow-Xjukw4ACDmTtFSYEoiQWGbrvaM5TK_q5S7CixeXfpYHYx'
   }
});