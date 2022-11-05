'use client';

import { useState } from 'react';
import { createUser } from './repository/mutation';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const mut = await createUser(JSON.stringify({ name, job }));
    console.log(mut);
    alert(`${mut.id}`);
    setName('');
    setJob('');
  };
  return (
    <div className="m-4">
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="text-black"
          type="text"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="job">Job</label>
        <input
          className="text-black"
          type="text"
          id="job"
          placeholder="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>
      <button className="bg-red-500" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}
