'use client';

import { ChangeEvent, useState } from 'react';
import { logarithm } from '../lib/utils';

export default function Home() {
  const [input, setInput] = useState(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(parseInt(e.target.value));
  };
  return (
    <main className="flex flex-col w-full items-center p-4">
      <h1 className="">Logarithm Calculator</h1>
      <label htmlFor="x">X:</label>
      <input
        type="number"
        name="x"
        placeholder="x"
        className="bg-black text-white w-8 rounded"
        id="x"
        value={input}
        onChange={handleChange}
      />
      <p>
        The result is:<span>{logarithm(input)}</span>
      </p>
    </main>
  );
}
