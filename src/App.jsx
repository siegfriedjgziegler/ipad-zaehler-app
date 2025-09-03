// src/App.jsx

import { useState } from 'react';

function App() {
  // useState ist der "Hook" von React, der uns einen Zustand (count)
  // und eine Funktion zum Ändern dieses Zustands (setCount) gibt.
  // Wir starten den Zähler bei 0.
  const [count, setCount] = useState(0);

  // Dies ist eine Hilfsfunktion, die wir erstellen.
  // Sie wird jedes Mal aufgerufen, wenn der Button geklickt wird.
  const handleCountUp = () => {
    // Wir verwenden die setCount-Funktion, um den count-Wert
    // auf seinen aktuellen Wert plus 1 zu setzen.
    setCount(count + 1);
  };

  return (
    // Dies ist JSX - es sieht aus wie HTML, ist aber JavaScript.
    // Die `className`-Attribute enthalten die Styling-Anweisungen für Tailwind CSS.

    // Das äußere <div>: Unser Hauptcontainer.
    // - bg-slate-900: Dunkelgrauer Hintergrund.
    // - min-h-screen: Mindesthöhe des gesamten Bildschirms.
    // - flex, flex-col, items-center, justify-center: Zentriert den Inhalt vertikal und horizontal.
    // - text-white: Setzt die Standard-Textfarbe auf Weiß.
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white">
      
      {/* Die Überschrift */}
      {/* - text-4xl: Macht den Text sehr groß. */}
      {/* - font-bold: Macht den Text fett. */}
      {/* - mb-8: Fügt einen AUSSENabstand nach unten hinzu (Margin Bottom). */}
      <h1 className="text-4xl font-bold mb-8">
        Mein Super-Zähler
      </h1>
      
      {/* Der Button */}
      {/* - onClick={handleCountUp}: Dies ist der entscheidende Teil! Er verbindet
           einen Klick auf diesen Button mit unserer handleCountUp-Funktion. */}
      {/* - bg-sky-500: Heller, blauer Hintergrund. */}
      {/* - hover:bg-sky-600: Macht den Hintergrund etwas dunkler, wenn man mit der Maus darüberfährt. */}
      {/* - text-2xl: Macht den Text groß. */}
      {/* - font-bold: Macht den Text fett. */}
      {/* - py-4 px-8: Fügt INNENabstand hinzu (Padding) - 4 Einheiten oben/unten, 8 Einheiten links/rechts. */}
      {/* - rounded-lg: Macht die Ecken schön abgerundet. */}
      {/* - active:scale-95: Verkleinert den Button auf 95% seiner Größe, während er gedrückt wird (für Touch-Feedback). */}
      <button 
        onClick={handleCountUp}
        className="bg-sky-500 hover:bg-sky-600 text-2xl font-bold py-4 px-8 rounded-lg active:scale-95"
      >
        {/* Hier wird der aktuelle Wert der 'count'-Variable direkt im Text angezeigt. */}
        Zähler ist {count}
      </button>

    </div>
  );
}

// Dies exportiert unsere App-Komponente, damit sie in anderen Dateien
// (insbesondere in `main.jsx`) verwendet werden kann.
export default App;