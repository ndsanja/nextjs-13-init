export const createUser = async (payload: BodyInit) => {
  const mut = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: payload,
  });
  const res = await mut.json();

  return res;
};
