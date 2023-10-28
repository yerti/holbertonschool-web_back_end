function handleResponseFromAPI(Promise) {
  return Promise
    /* Append three handlers to the function */
    .then(() => ({ // When the Promise resolves
      status: 200,
      body: 'success',
    }))
    .catch(() => Error()) // When the Promise rejects
    .finally(() => console.log('Got a response from the API')); // For every resolution
}

export default handleResponseFromAPI;
