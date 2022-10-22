import { useState, useEffect } from 'react';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  return (
    <main>
      <h2>Tranding today</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
      </ul>
    </main>
  );
}
