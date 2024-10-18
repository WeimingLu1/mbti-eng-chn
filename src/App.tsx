import React, { useState, useEffect } from 'react';
import { Brain, Zap, Users, Target, Globe } from 'lucide-react';
import QuestionList from './components/QuestionList';
import Result from './components/Result';
import { Answer, Question } from './types';
import { questions as chineseQuestions } from './questions';
import { questions as englishQuestions } from './questionsEn';
import { LanguageContext } from './LanguageContext';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [startTest, setStartTest] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState<number[]>([]);
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  useEffect(() => {
    const questions = language === 'zh' ? chineseQuestions : englishQuestions;
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
  }, [language]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (startTime && !endTime) {
      timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime.getTime()) / 1000));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTime, endTime]);

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    const unanswered = shuffledQuestions.reduce((acc, _, index) => {
      if (!answers[index]) acc.push(index + 1);
      return acc;
    }, [] as number[]);

    setUnansweredQuestions(unanswered);

    if (unanswered.length === 0) {
      setEndTime(new Date());
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setStartTest(false);
    setShuffledQuestions([...shuffledQuestions].sort(() => Math.random() - 0.5));
    setStartTime(null);
    setEndTime(null);
    setElapsedTime(0);
    setUnansweredQuestions([]);
  };

  const startTestHandler = () => {
    setStartTest(true);
    setStartTime(new Date());
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'zh' ? 'en' : 'zh');
  };

  const HomePage = () => (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-6">
        {language === 'zh' ? '免费MBTI性格测试' : 'Free MBTI Personality Test'}
      </h1>
      <p className="text-xl text-white mb-8">
        {language === 'zh' 
          ? '探索你的性格特质，了解你独特的MBTI类型' 
          : 'Explore your personality traits and discover your unique MBTI type'}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <FeatureCard
          icon={<Brain className="w-12 h-12 text-blue-400" />}
          title={language === 'zh' ? '发现真实的你' : 'Discover the Real You'}
          description={language === 'zh' 
            ? '通过回答问题，找出你的性格类型' 
            : 'Find out your personality type by answering questions'}
        />
        <FeatureCard
          icon={<Zap className="w-12 h-12 text-yellow-400" />}
          title={language === 'zh' ? '了解你的影响' : 'Understand Your Impact'}
          description={language === 'zh'
            ? '探索你的性格如何影响生活的各个方面'
            : 'Explore how your personality affects various aspects of your life'}
        />
        <FeatureCard
          icon={<Users className="w-12 h-12 text-green-400" />}
          title={language === 'zh' ? '塑造理想的自我' : 'Shape Your Ideal Self'}
          description={language === 'zh'
            ? '利用我们的见解，成为你想要成为的人'
            : 'Use our insights to become the person you want to be'}
        />
      </div>
      <button
        onClick={startTestHandler}
        className="bg-white text-green-600 px-8 py-3 rounded-full text-xl font-semibold hover:bg-green-100 transition duration-300"
      >
        {language === 'zh' ? '开始测试' : 'Start Test'}
      </button>
    </div>
  );

  const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-white bg-opacity-20 p-6 rounded-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );

  const LanguageToggle = () => (
    <button
      onClick={toggleLanguage}
      className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300 flex items-center"
    >
      <Globe className="w-5 h-5 mr-2" />
      {language === 'zh' ? 'English' : '中文'}
    </button>
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col items-center justify-center p-4">
        <LanguageToggle />
        {!startTest ? (
          <HomePage />
        ) : !showResult ? (
          shuffledQuestions.length > 0 && (
            <QuestionList
              question={shuffledQuestions[currentQuestion]}
              onAnswer={handleAnswer}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onFinish={handleFinish}
              progress={(currentQuestion + 1) / shuffledQuestions.length * 100}
              totalQuestions={shuffledQuestions.length}
              currentQuestionNumber={currentQuestion + 1}
              currentAnswer={answers[currentQuestion]}
              elapsedTime={elapsedTime}
              unansweredQuestions={unansweredQuestions}
            />
          )
        ) : (
          <Result 
            answers={answers} 
            onReset={resetTest} 
            startTime={startTime} 
            endTime={endTime}
          />
        )}
      </div>
    </LanguageContext.Provider>
  );
}

export default App;