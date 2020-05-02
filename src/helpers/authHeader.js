const authHeader = () => {
    let user = localStorage.getItem('user');
  
    if (user) {
      return { 
        'Authorization': 'Basic ' + user,
      };
    } else {
      return {};
    }
  }

export default authHeader;
  