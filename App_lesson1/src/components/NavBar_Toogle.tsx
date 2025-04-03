import { useState } from "react";

function NavBar_Toogle() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="p-4">
      {/* Menu con pulsante */}
      <button
        className="bg-blue-500 text-black px-4 py-2 rounded-lg"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Nascondi" : "Mostra"} Box
      </button>

      {/* Box da mostrare/nascondere */}
      {isVisible && (
        <div className="mt-4 p-4 bg-gray-200 rounded-lg">
          <p>Questo è il box visibile!</p>
        </div>
      )}
    </div>
  );
}

export default NavBar_Toogle;

