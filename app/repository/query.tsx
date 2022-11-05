export const getData = async () => {
  const req = await fetch('https://reqres.in/api/users?page=2');
  const data = await req.json();

  return data;
};
