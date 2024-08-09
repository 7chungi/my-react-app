import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Bell, Home, CreditCard, Banknote, Menu } from 'lucide-react';

const HomePage = () => (
  <div className="bg-black text-white min-h-screen p-4 flex flex-col">
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-bold">볼빨간7춘기</h1>
      <div className="flex gap-4">
        <Bell size={24} />
        <Menu size={24} />
      </div>
    </header>

    <main className="flex-grow">
      <div className="bg-gray-800 rounded-lg p-4 mb-4 flex items-center justify-between">
        <div>
          <p className="text-lg">구독과 좋아요</p>
          <p className="text-blue-400">버튼 눌러서 응원하기</p>
        </div>
        <div className="text-2xl">&gt;</div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <h2 className="text-lg mb-2">볼빨간7춘기</h2>
        <div className="flex items-center mb-2">
          <div className="bg-blue-500 rounded-full w-8 h-8 mr-2"></div>
          <span>여행</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="bg-yellow-500 rounded-full w-8 h-8 mr-2"></div>
          <span>SNS</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="bg-blue-300 rounded-full w-8 h-8 mr-2"></div>
          <span>투자</span>
        </div>
        <div className="flex items-center">
          <div className="bg-purple-500 rounded-full w-8 h-8 mr-2"></div>
          <span>공부</span>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="flex items-center">
          <span>7월 결과</span>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

const Footer = () => (
  <footer className="mt-auto">
    <nav className="flex justify-between">
      <Link to="/" className="flex flex-col items-center">
        <Home size={24} />
        <span>홈</span>
      </Link>
      <Link to="/travel" className="flex flex-col items-center">
        <Banknote size={24} />
        <span>여행</span>
      </Link>
      <Link to="/sns" className="flex flex-col items-center">
        <CreditCard size={24} />
        <span>SNS</span>
      </Link>
      <Link to="/investment" className="flex flex-col items-center">
        <Banknote size={24} />
        <span>투자</span>
      </Link>
      <Link to="/study" className="flex flex-col items-center">
        <Menu size={24} />
        <span>공부</span>
      </Link>
    </nav>
  </footer>
);

const PageTemplate = ({ title }) => (
  <div className="bg-black text-white min-h-screen p-4 flex flex-col">
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex gap-4">
        <Bell size={24} />
        <Menu size={24} />
      </div>
    </header>
    <main className="flex-grow">
      {/* Empty content */}
    </main>
    <Footer />
  </div>
);

const TravelPage = () => <PageTemplate title="여행" />;
const SNSPage = () => <PageTemplate title="SNS" />;
const InvestmentPage = () => <PageTemplate title="투자" />;
const StudyPage = () => <PageTemplate title="공부" />;

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/travel" element={<TravelPage />} />
    <Route path="/sns" element={<SNSPage />} />
    <Route path="/investment" element={<InvestmentPage />} />
    <Route path="/study" element={<StudyPage />} />
  </Routes>
);

export default App;