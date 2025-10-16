import React from "react";

export default function ReactTutorialBasic() {
  const topics = [
    "What is React?",
    "Setting up the Environment",
    "JSX Introduction",
    "Components in React",
    "Props and State",
    "Handling Events",
    "Conditional Rendering",
    "Lists and Keys",
    "React Hooks (useState, useEffect)",
    "React Router Basics"
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-2">React Tutorial</h1>
        <p className="text-gray-600">Learn the basics of React step by step</p>
      </header>

      <main className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
        <ul className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}