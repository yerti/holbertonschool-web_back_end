function singUpUser(firstName, lastName) {
  return Promise.resolve( //  returns a resolved promise
    {
      firstName,
      lastName,
    },
  );
}

export default singUpUser;
