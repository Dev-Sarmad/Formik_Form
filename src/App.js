function App() {
  return (
    <main className="App">
      <div className="flex items-center h-screen justify-center bg-slate-800">
        <form className="bg-white rounded-lg p-20 flex">
          <div>
            <h1 className="text-2xl text-center text-red-600 ">
              Registor For The Communist Party ☭
            </h1>
            <p className="text-lg mt-3 p-3 text-green-600">
              Never benefit oneself, always benefit others 😎
            </p>
            <div className="mt-3">
              <label className="block  text-blue-500">Name</label>
              <input
                className="mt-3 p-2 border-2 border-slate-500 w-full"
                name="name"
                type="text"
                w-full
                placeholder="Enter Name"
              />
            </div>
            <div className="mt-3">
              <label className="block text-blue-500">Email</label>
              <input
                className="mt-3 p-2 border-2 border-slate-500 w-full"
                name="name"
                type="text"
                w-full
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mt-3">
              <label className="block  text-blue-500">Password</label>
              <input
                className="mt-3 p-2 border-2 border-slate-500 w-full"
                name="name"
                type="text"
                w-full
                placeholder="Enter Password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 text-white hover:bg-red-500 hover:transition-all rounded-md w-full"
              >
                Submit here
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
