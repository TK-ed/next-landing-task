const ButtonType = () => {
  return (
    <>
      <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded-2xl focus:outline-none hover:bg-gray-200 hover:text-gray-700">
      Join as <pre className="text-[var(--bg)]">Individual</pre>
      </button>
      <button className="px-4 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-none rounded-2xl focus:outline-none hover:bg-indigo-500 hover:text-white">
        Join as <pre className="text-[var(--bgSoft)] hover:text-[var(--bg)]">Organisation</pre>
      </button>
    </>
  );
};

export default ButtonType;