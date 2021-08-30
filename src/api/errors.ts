interface Error {
  error: string;
}

const errorHandler = (error: any): Error => {
  const err: Error = { error: 'error' };

  if (error.response) {
    // Request made and server responded
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    err.error = error.response.data.error;
  } else if (error.request) {
    // The request was made but no response was received
    // console.log(error.request);
    err.error = error.request;
  } else {
    // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message);
    err.error = error.message;
  }

  err.error = `Error: ${err.error}`;

  return err;
};

function isError(obj: any): obj is Error {
  return obj.error !== undefined;
}

export default {
  errorHandler,
  isError,
};
