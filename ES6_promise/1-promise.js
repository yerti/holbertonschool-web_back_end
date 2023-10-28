function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({  // resolve the promise by passing an object with 2 attributes
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently')); // mensage of error
    }
  });
}

export default getFullResponseFromAPI;
