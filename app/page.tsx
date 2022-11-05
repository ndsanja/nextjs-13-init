import CreateUser from './create-user';
import Motion from './components/motion';
import { getData } from './repository/query';

export default async function Page() {
  const data = await getData();
  const users = data?.data;

  return (
    <>
      <CreateUser />
      <h1>Hello World</h1>
      {users.map((user: any) => (
        <h1 key={user.email}>{user.email}</h1>
      ))}
      <Motion />
    </>
  );
}
