import singUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName = '', lastName = '', fileName = '') => {
  const newResult = [];
  try {
    const user = await singUpUser(firstName, lastName);
    newResult.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (error) {
    newResult.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return newResult;
};

export default handleProfileSignup;
