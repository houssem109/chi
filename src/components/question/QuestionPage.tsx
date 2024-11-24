import React, { useEffect, useState } from "react";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";

const QuestionPage = () => {
    const [questions, setQuestions] = useState([]);

  // Fetch questions from Firebase
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("https://cgi109-285d3-default-rtdb.firebaseio.com/UserData.json");
      const data = await response.json();
      const loadedQuestions = [];
      for (const key in data) {
        loadedQuestions.push({ id: key, ...data[key] });
        console.log(loadedQuestions)
      }
      setQuestions(loadedQuestions);
    };

    fetchQuestions();
  }, []);

  // Update the answered status
  const toggleAnswer = async (index: number) => {
    const updatedQuestions = [...questions];
    const updatedQuestion = updatedQuestions[index];
    updatedQuestion.answered = !updatedQuestion.answered;

    // Update the question in Firebase
    const response = await fetch(
      `https://cgi109-285d3-default-rtdb.firebaseio.com/UserData/${updatedQuestion.id}.json`,
      {
        method: "PATCH", // Use PATCH to update only the changed field
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answered: updatedQuestion.answered,
        }),
      }
    );

    if (response.ok) {
      setQuestions(updatedQuestions); // Update local state after successful Firebase update
    } else {
      alert("Failed to update answer status");
    }
  };
  return (
    
    <div className="flex flex-col p-0 min-h-screen overflow-hidden dark:bg-neutral-950 bg-white dark:bg-grid-white/5 bg-grid-black/[0.2]">
      {/* Navigation */}
     
      
      {/* Main Content */}
      <div className="flex-grow ">
        <Nav />
        <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold m-6 ">Les Questions</h1>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gradient-to-b from-neutral-400 to-neutral-800">
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Content</th>
              <th className="border border-gray-300 px-4 py-2">Answered or Not</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{question.email}</td>
                <td className="border border-gray-300 px-4 py-2">{question.subject}</td>
                <td className="border border-gray-300 px-4 py-2">{question.content}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="checkbox"
                    checked={question.answered}
                    onChange={() => toggleAnswer(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default QuestionPage;
