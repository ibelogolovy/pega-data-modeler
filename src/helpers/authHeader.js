const authHeader = () => {
    // let user = localStorage.getItem('user');
    let user = btoa("ibelogolovy:bll219045");
  
    if (user) {
      return { 
        'Authorization': 'Basic ' + user,
      };
    } else {
      return {};
    }
  }

export default authHeader;
  