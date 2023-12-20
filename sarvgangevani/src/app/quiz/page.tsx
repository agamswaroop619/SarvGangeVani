import React from "react";
import Image from "next/image";

const quizData = [
  {
    question: "What is the primary river that the Namami Gange initiative aims to clean?",
    options: ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
    answer: "Ganges",
  },
  {
    question: "In which country does the Ganges River flow?",
    options: ["China", "India", "Bangladesh", "Nepal"],
    answer: "India",
  },
  {
    question: "What is the significance of the Ganges River in Indian culture?",
    options: [
      "It is a major trade route",
      "It is considered a sacred river",
      "It is known for its hydroelectric power",
      "It is a natural border between two states",
    ],
    answer: "It is considered a sacred river",
  },
  {
    question: "What is the Namami Gange initiative's main goal?",
    options: [
      "Planting more trees along the riverbanks",
      "Cleaning and conserving the Ganges River",
      "Building dams to control water flow",
      "Promoting fishing activities",
    ],
    answer: "Cleaning and conserving the Ganges River",
  },
  {
    question: "Which Indian city is located on the banks of the Ganges and is considered one of the holiest cities in Hinduism?",
    options: ["Jaipur", "Varanasi", "Mumbai", "Kolkata"],
    answer: "Varanasi",
  },
  {
    question: "What does 'Namami Gange' translate to in English?",
    options: ["Clean Waters", "Ganges Blessings", "Salutations to the Ganges", "River Devotion"],
    answer: "Salutations to the Ganges",
  },
  {
    question: "Which government department is responsible for the implementation of the Namami Gange program?",
    options: [
      "Ministry of Health",
      "Ministry of Environment, Forest and Climate Change",
      "Ministry of Water Resources, River Development, and Ganga Rejuvenation",
      "Ministry of Transportation",
    ],
    answer: "Ministry of Water Resources, River Development, and Ganga Rejuvenation",
  },
  {
    question: "What is the main cause of pollution in the Ganges River?",
    options: ["Industrial waste", "Agricultural runoff", "Religious rituals", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which state in India is the source of the Ganges River?",
    options: ["Uttar Pradesh", "Himachal Pradesh", "Uttarakhand", "Bihar"],
    answer: "Uttarakhand",
  },
  {
    question: "What is the role of the National Mission for Clean Ganga (NMCG) in the Namami Gange initiative?",
    options: [
      "Promoting tourism along the Ganges",
      "Implementing projects for the cleaning and conservation of the Ganges",
      "Regulating fishing activities in the river",
      "Constructing new bridges across the Ganges",
    ],
    answer: "Implementing projects for the cleaning and conservation of the Ganges",
  },
  {
    question: "Which famous wildlife sanctuary is located along the banks of the Ganges River?",
    options: [
      "Jim Corbett National Park",
      "Sundarbans National Park",
      "Kaziranga National Park",
      "Ranthambhore National Park",
    ],
    answer: "Jim Corbett National Park",
  },
  {
    question: "What is the name of the campaign launched under Namami Gange to promote public awareness and participation?",
    options: [
      "Clean Ganga Champions",
      "Ganga Sankalp Abhiyan",
      "River Warriors Initiative",
      "Green Ganges Movement",
    ],
    answer: "Ganga Sankalp Abhiyan",
  },
  {
    question: "What are some of the measures taken under the Namami Gange initiative to control industrial pollution in the Ganges?",
    options: [
      "Setting up Effluent Treatment Plants (ETPs)",
      "Promoting eco-friendly industries",
      "Monitoring industrial discharge",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which of the following is NOT a tributary of the Ganges River?",
    options: ["Yamuna", "Brahmaputra", "Gandak", "Godavari"],
    answer: "Godavari",
  },
  {
    question: "What is the significance of the Ganges River in Hindu rituals?",
    options: [
      "It is used for irrigation",
      "It is considered the abode of a sacred river goddess",
      "It is a source of drinking water",
      "It is used for transportation",
    ],
    answer: "It is considered the abode of a sacred river goddess",
  },
  {
    question: "Which historical figure is associated with the cleaning and maintenance of the Ganges River?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Swami Vivekananda", "Bal Gangadhar Tilak"],
    answer: "Mahatma Gandhi",
  },
  {
    question: "What is the name of the action plan launched under the Namami Gange initiative to address the pollution in the Ganges?",
    options: [
      "Clean Ganga Project",
      "Ganga Action Plan (GAP)",
      "Ganges Conservation Initiative",
      "Ganges Revitalization Scheme",
    ],
    answer: "Ganga Action Plan (GAP)",
  },
  {
    question: "How many states does the Ganges River flow through in India?",
    options: ["4", "5", "6", "7"],
    answer: "6 (Uttarakhand, Uttar Pradesh, Bihar, Jharkhand, West Bengal, and a small part of Delhi)",
  },
  {
    question: "Which of the following is a traditional boat race that takes place on the Ganges River?",
    options: ["Kumbh Mela", "Ganga Dussehra", "Ganga Sagar Mela", "Nag Nathaiya"],
    answer: "Nag Nathaiya",
  },
  {
    question: "What is the economic significance of the Ganges River for the local communities along its banks?",
    options: ["Fishing", "Agriculture", "Tourism", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which of the following is a traditional practice associated with the Ganges River where lamps are floated on the water?",
    options: ["Ganga Aarti", "Ganges Puja", "Ganges Vandana", "Ganges Pradakshina"],
    answer: "Ganga Aarti",
  },
  {
    question: "What is the importance of the Ganges River for agriculture in the region?",
    options: ["It provides irrigation water", "It controls floods", "It serves as a barrier against pests"],
    answer: "It provides irrigation water",
  },
];

const renderOptions = (options: string[]) => {
  return options.map((option, index) => (
    <li key={index} className="text-lg">
      {option}
    </li>
  ));
};

// Main component for the quiz page
const QuizPage: React.FC = () => {
  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between min-w-[100vw] bg-[#B6D3FE]">
      {/* Quiz Container */}
      <div className="flex flex-col items-center p-8 bg-white rounded-md shadow-md mt-8">
        {/* Render questions */}
        {quizData.map((quiz, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl text-black font-bold mb-4">{`${index + 1}. ${quiz.question}`}</h2>
            <ul className="text-black">{renderOptions(quiz.options)}</ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default QuizPage;