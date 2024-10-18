import React, { useRef, useState, useContext } from 'react';
import { Answer } from '../types';
import { RefreshCcw, Download, Unlock, Lock, Star, Zap, Target, Heart, Briefcase, Brain, Users, Clock } from 'lucide-react';
import html2canvas from 'html2canvas';
import { getMBTIDetails } from '../mbtiDetails';
import { getMBTIDetails as getEnglishMBTIDetails } from '../mbtiDetailsEn';
import { LanguageContext } from '../LanguageContext';

interface ResultProps {
  answers: Answer[];
  onReset: () => void;
  startTime: Date | null;
  endTime: Date | null;
}

const Result: React.FC<ResultProps> = ({ answers, onReset, startTime, endTime }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const { language } = useContext(LanguageContext);

  const calculateMBTI = (answers: Answer[]): string => {
    if (answers.length === 0) return 'ISTJ'; // Default type if no answers

    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers.forEach(answer => {
      if (answer && answer.type) {
        counts[answer.type as keyof typeof counts]++;
      }
    });
    return (
      (counts.E > counts.I ? 'E' : 'I') +
      (counts.S > counts.N ? 'S' : 'N') +
      (counts.T > counts.F ? 'T' : 'F') +
      (counts.J > counts.P ? 'J' : 'P')
    );
  };

  const mbtiType = calculateMBTI(answers);
  const mbtiDetails = language === 'zh' ? getMBTIDetails(mbtiType) : getEnglishMBTIDetails(mbtiType);

  const dimensionScores = {
    EI: (answers.filter(a => a && a.type === 'E').length / 10) * 100,
    SN: (answers.filter(a => a && a.type === 'S').length / 10) * 100,
    TF: (answers.filter(a => a && a.type === 'T').length / 10) * 100,
    JP: (answers.filter(a => a && a.type === 'J').length / 10) * 100,
  };

  const handleSaveImage = async () => {
    if (resultRef.current) {
      const canvas = await html2canvas(resultRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `MBTI-Result-${mbtiType}.png`;
      link.click();
    }
  };

  const calculateTestDuration = () => {
    if (startTime && endTime) {
      const duration = endTime.getTime() - startTime.getTime();
      const minutes = Math.floor(duration / 60000);
      const seconds = Math.floor((duration % 60000) / 1000);
      return language === 'zh' ? `${minutes}分${seconds}秒` : `${minutes}m ${seconds}s`;
    }
    return language === 'zh' ? '未知' : 'Unknown';
  };

  const translations = {
    zh: {
      yourMBTIType: "你的MBTI类型是：",
      unlockMore: "解锁更多洞察",
      unlockDescription: "了解你的职业道路、个人成长和人际关系模式",
      unlock: "立即解锁",
      unlocked: "已解锁",
      retake: "重新测试",
      saveResult: "保存结果",
      testDuration: "测试用时：",
      disclaimer: "MBTI类型指示器可以帮助你更好地理解自己的性格特征和行为模式。记住，这只是一个参考，每个人都是独特的个体。",
      careerPath: "职业道路",
      personalGrowth: "个人成长",
      relationships: "人际关系",
      influentialTraits: "影响力特质",
      yourStrengths: "你的强项",
      yourWeaknesses: "你的短板",
      idealEnvironment: "理想环境：",
    },
    en: {
      yourMBTIType: "Your MBTI Type is:",
      unlockMore: "Unlock More Insights",
      unlockDescription: "Understand your career path, personal growth, and relationship patterns",
      unlock: "Unlock Now",
      unlocked: "Unlocked",
      retake: "Retake Test",
      saveResult: "Save Result",
      testDuration: "Test Duration: ",
      disclaimer: "The MBTI type indicator can help you better understand your personality traits and behavior patterns. Remember, this is just a reference, and each person is unique.",
      careerPath: "Career Path",
      personalGrowth: "Personal Growth",
      relationships: "Relationships",
      influentialTraits: "Influential Traits",
      yourStrengths: "Your Strengths",
      yourWeaknesses: "Your Weaknesses",
      idealEnvironment: "Ideal Environment: ",
    }
  };

  const t = translations[language];

  const DetailSection = ({ title, icon, traits, strengths, weaknesses, ideal }: any) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      <div className="space-y-4">
        <DetailItem title={t.influentialTraits} items={traits} icon={<Star className="w-5 h-5 text-yellow-500" />} />
        <DetailItem title={t.yourStrengths} items={strengths} icon={<Zap className="w-5 h-5 text-green-500" />} />
        <DetailItem title={t.yourWeaknesses} items={weaknesses} icon={<Target className="w-5 h-5 text-red-500" />} />
        <p className="text-gray-700"><strong className="font-semibold">{t.idealEnvironment}</strong> {ideal}</p>
      </div>
    </div>
  );

  const DetailItem = ({ title, items, icon }: any) => (
    <div>
      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {items.map((item: string, index: number) => (
          <div key={index} className="bg-gray-50 p-2 rounded-md">
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const DimensionBar = ({ dimension, score, color }: { dimension: string, score: number, color: string }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{dimension.split('-')[0]}</span>
        <span>{Math.round(score)}%</span>
        <span>{dimension.split('-')[1]}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${score}%` }}></div>
      </div>
    </div>
  );

  return (
    <div ref={resultRef} className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.yourMBTIType}</h2>
      <div className="text-5xl font-bold text-blue-600 mb-2">{mbtiType}</div>
      <p className="text-xl text-gray-600 mb-4">{mbtiDetails.description}</p>
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <img src={mbtiDetails.image} alt={mbtiType} className="w-full h-full object-cover" />
      </div>
      <div className="mb-6">
        <DimensionBar dimension="E-I" score={dimensionScores.EI} color="bg-blue-500" />
        <DimensionBar dimension="S-N" score={dimensionScores.SN} color="bg-green-500" />
        <DimensionBar dimension="T-F" score={dimensionScores.TF} color="bg-yellow-500" />
        <DimensionBar dimension="J-P" score={dimensionScores.JP} color="bg-purple-500" />
      </div>
      <div className="flex items-center justify-center mb-6 text-gray-600">
        <Clock className="w-5 h-5 mr-2" />
        <span>{t.testDuration}{calculateTestDuration()}</span>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        {t.disclaimer}
      </p>

      {isUnlocked ? (
        <div className="mt-6 text-left">
          <DetailSection
            title={t.careerPath}
            icon={<Briefcase className="w-6 h-6 text-blue-500" />}
            traits={mbtiDetails.career.traits}
            strengths={mbtiDetails.career.strengths}
            weaknesses={mbtiDetails.career.weaknesses}
            ideal={mbtiDetails.career.ideal}
          />
          <DetailSection
            title={t.personalGrowth}
            icon={<Brain className="w-6 h-6 text-green-500" />}
            traits={mbtiDetails.personalGrowth.traits}
            strengths={mbtiDetails.personalGrowth.strengths}
            weaknesses={mbtiDetails.personalGrowth.weaknesses}
            ideal={mbtiDetails.personalGrowth.ideal}
          />
          <DetailSection
            title={t.relationships}
            icon={<Users className="w-6 h-6 text-purple-500" />}
            traits={mbtiDetails.relationships.traits}
            strengths={mbtiDetails.relationships.strengths}
            weaknesses={mbtiDetails.relationships.weaknesses}
            ideal={mbtiDetails.relationships.ideal}
          />
        </div>
      ) : (
        <div className="mt-6 bg-gray-100 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">{t.unlockMore}</h3>
          <p className="text-gray-600 mb-4">{t.unlockDescription}</p>
          <button
            onClick={() => setIsUnlocked(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
          >
            {isUnlocked ? <Lock className="w-5 h-5 inline mr-2" /> : <Unlock className="w-5 h-5 inline mr-2" />}
            {isUnlocked ? t.unlocked : t.unlock}
          </button>
        </div>
      )}

      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={onReset}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <RefreshCcw className="w-5 h-5 mr-2" />
          {t.retake}
        </button>
        <button
          onClick={handleSaveImage}
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 flex items-center"
        >
          <Download className="w-5 h-5 mr-2" />
          {t.saveResult}
        </button>
      </div>
    </div>
  );
};

export default Result;