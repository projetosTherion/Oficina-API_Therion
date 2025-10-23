function SlideBar({ setSection, current }) {
  const items = ["API-ViaCep", "API-CatApi", "API-PlaceHolder", "API-CRUD"];

  return (
    <div className="w-56 bg-pink-500 text-white flex flex-col p-5 shadow-lg rounded-r-3xl">
      <h2 className="text-2xl font-bold mb-8 text-center">Menu</h2>

      <nav className="flex flex-col space-y-4">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setSection(item)}
            className={`text-left px-4 py-2 rounded-lg transition-all duration-200 
              ${
                current === item
                  ? "bg-white text-pink-600 font-semibold"
                  : "hover:bg-pink-400"
              }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default SlideBar;