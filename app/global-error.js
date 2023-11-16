"use client";

/**
 * @param {Object} props - The props object.
 * @param {any} props.error - The error to display.
 * @param {Function<*>} props.reset - The function to call when the "Try again" button is clicked.
 * @returns {JSX.Element} - The JSX element representing the component.
 */

export default function GlobalError({ error, reset }) {
  return (
    <div
      className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline"> {message}</span>
    </div>
  );
}
