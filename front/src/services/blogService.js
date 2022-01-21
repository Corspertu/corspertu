console.log('%c' + 'recipe service loaded', 'color: #0bf; font-size: 1rem; background-color:#fff');
import axios from 'axios';

const blogService = {

  getPosts: function () {
    return axios.get('https://www.weborga.co/wp-json/wp/v2/posts?per_page=100&_embed')
      .then(blogService.handleGetPostsResponse);
  },

  
  
  handleGetPostsResponse: function (response) {
    return response.data;
  },


};

export default blogService;
