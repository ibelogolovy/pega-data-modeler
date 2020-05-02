const getError = (error) => {
    if (
      error.response &&
      error.response.data &&
      error.response.data.errors &&
      error.response.data.errors[0]
    ) {
      return error.response.data.errors[0];
    } else {
      return error.message;
    }
  }

export default getError;
  