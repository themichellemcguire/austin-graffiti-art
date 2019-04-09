import tokenService from './tokenService';

// existing code below
const BASE_URL = '/api/users/';

function getUser() {
    return tokenService.getUserFromToken();
  }
  
  // Be sure to add getUser to the export
  export default {
    signup,
    getUser
  }