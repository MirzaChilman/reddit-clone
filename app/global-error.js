"use client";

/**
 * @param {Object} props - The props object.
 * @param {any} props.error - The error to display.
 * @param {Function<*>} props.reset - The function to call when the "Try again" button is clicked.
 * @returns {JSX.Element} - The JSX element representing the component.
 */

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something globally wrong!</h2>
        <p>{JSON.stringify(error)}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
