const authHeader = (credentials) => {
    // let user = localStorage.getItem('user');
    if (credentials) {
      return { 
        'Authorization': 'Basic ' + credentials,
      };
    } else {
      return {};
    }
  }

export default authHeader;
  