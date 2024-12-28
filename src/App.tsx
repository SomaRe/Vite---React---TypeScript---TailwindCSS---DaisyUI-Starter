import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-primary">VRTTD Template</h1>
      </header>

      <main className="w-full max-w-md p-6 bg-base-100 shadow-xl rounded-lg">
        <div className="flex justify-center items-center mb-6 space-x-4">
          <div className="w-12 h-12 bg-primary rounded-full animate-bounce"></div>
          <div className="w-12 h-12 bg-secondary rounded-full animate-bounce delay-200"></div>
          <div className="w-12 h-12 bg-accent rounded-full animate-bounce delay-400"></div>
        </div>
        <div className="text-center">
          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-primary w-full mb-4"
          >
            Click Me: Count is {count}
          </button>
          <p className="text-sm text-gray-500">
            Modify <code className="badge badge-outline">src/App.tsx</code> to see your changes live.
          </p>
        </div>
      </main>

      <footer className="mt-8 text-sm text-gray-400">
        <p>Crafted with ❤️ using Vite + React + TypeScript + TailwindCSS + DaisyUI</p>
      </footer>
    </div>
  );
}

export default App;
