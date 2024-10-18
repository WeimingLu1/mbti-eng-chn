import { MBTIDetail } from './types';

const mbtiDetails: { [key: string]: MBTIDetail } = {
  ISTJ: {
    description: "Quiet, serious, earn success by thoroughness and dependability",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Responsible", "Reliable", "Organized", "Detail-oriented", "Practical"],
      strengths: ["Systematizing work", "Following rules", "Staying calm", "Solving practical problems", "Managing details"],
      weaknesses: ["May be too rigid", "May not adapt well", "May overlook long-term implications", "May struggle with ambiguity", "May be overly critical"],
      ideal: "Provides a stable, orderly work environment with clear rules and expectations, where they can apply their organizational skills and attention to detail"
    },
    personalGrowth: {
      traits: ["Loyal", "Traditional", "Practical", "Logical", "Dependable"],
      strengths: ["Organizational skills", "Sense of responsibility", "Reliability", "Attention to detail", "Perseverance"],
      weaknesses: ["May lack flexibility", "Resistance to change", "May be overly critical", "May neglect emotional needs", "May be stubborn"],
      ideal: "Learn to accept change, cultivate open-mindedness, balance logic with emotions, develop empathy and flexibility"
    },
    relationships: {
      traits: ["Loyal", "Reliable", "Responsible", "Practical", "Traditional"],
      strengths: ["Stable and dependable", "Takes responsibility", "Committed", "Provides security", "Solves practical problems"],
      weaknesses: ["May lack emotional expression", "May struggle with change", "May be overly critical", "May neglect partner's emotional needs", "May be inflexible"],
      ideal: "Build stable, reliable relationships while learning to express emotions, increase flexibility, and develop sensitivity to partner's emotional needs"
    }
  },
  ISFJ: {
    description: "Quiet, friendly, responsible, and conscientious",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Attentive", "Reliable", "Sympathetic", "Organized", "Practical"],
      strengths: ["Attention to detail", "Dedication", "Caring for others", "Maintaining traditions", "Solving practical problems"],
      weaknesses: ["May worry excessively", "May struggle with change", "May overwork themselves", "May have difficulty saying no", "May be overly modest"],
      ideal: "Provides a stable, orderly work environment where they can apply their attentiveness and care for others, with opportunities to serve others"
    },
    personalGrowth: {
      traits: ["Loyal", "Considerate", "Traditional", "Practical", "Kind"],
      strengths: ["Caring for others", "Attention to detail", "Reliability", "Practical skills", "Patience"],
      weaknesses: ["May worry excessively", "May struggle with criticism", "May neglect own needs", "Resistance to change", "May be overly self-sacrificing"],
      ideal: "Learn to set boundaries, cultivate self-confidence, accept change, balance others' needs with own needs, develop stress management skills"
    },
    relationships: {
      traits: ["Loyal", "Considerate", "Reliable", "Traditional", "Empathetic"],
      strengths: ["Attentive to partner's needs", "Creates comfortable environment", "Practical support", "Emotional stability", "Patient listening"],
      weaknesses: ["May worry excessively", "May struggle to express own needs", "May be overly dependent", "Sensitive to criticism", "May suppress own thoughts"],
      ideal: "Build stable, warm relationships while learning to express own needs, boost confidence, cultivate independence and ability to handle change"
    }
  },
  INFJ: {
    description: "Insightful, idealistic, and compassionate individuals",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Insightful", "Compassionate", "Idealistic", "Creative", "Visionary"],
      strengths: ["Understanding others", "Innovative thinking", "Pursuing meaning", "Solving complex problems", "Inspiring others"],
      weaknesses: ["May be overly idealistic", "May neglect details", "May be perfectionistic", "May struggle with criticism", "May overwork themselves"],
      ideal: "Provides work environment that allows realization of ideals and values, opportunities for creativity and insight, and ability to help others grow"
    },
    personalGrowth: {
      traits: ["Insightful", "Idealistic", "Compassionate", "Creative", "Determined"],
      strengths: ["Deep understanding of others", "Pursuit of personal growth", "Creative problem-solving", "Commitment to ideals", "Self-reflection"],
      weaknesses: ["May be perfectionistic", "May struggle with criticism", "May neglect practical needs", "May overwork themselves", "May be overly idealistic"],
      ideal: "Balance ideals with reality, learn to accept imperfection, develop practical skills, set healthy boundaries, develop stress management skills"
    },
    relationships: {
      traits: ["Thoughtful", "Compassionate", "Idealistic", "Insightful", "Complex"],
      strengths: ["Deep understanding of partner", "Compassion", "Pursuit of deep connection", "Creative problem-solving", "Supporting partner's growth"],
      weaknesses: ["May idealize relationships", "May struggle to express needs", "May over-analyze", "Sensitive to criticism", "May neglect own needs"],
      ideal: "Build deep, meaningful relationships while learning to express own needs, accept real-world imperfections, balance ideals with practicality"
    }
  },
  INTJ: {
    description: "Innovative thinkers with extraordinary drive for implementing their ideas",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Strategic thinker", "Independent", "Innovative", "Analytical", "Visionary"],
      strengths: ["Strategic planning", "Solving complex problems", "Innovative thinking", "Efficient execution", "Continuous learning"],
      weaknesses: ["May be overly critical", "May neglect others' feelings", "May be perfectionistic", "May struggle with authority", "May appear arrogant"],
      ideal: "Provides work environment that utilizes strategic thinking and innovation, with challenging projects and independence"
    },
    personalGrowth: {
      traits: ["Independent", "Rational", "Visionary", "Curious", "Perfectionist"],
      strengths: ["Strategic thinking", "Innovation", "Self-learning", "Pursuit of knowledge", "Efficient execution"],
      weaknesses: ["May neglect emotional needs", "May appear cold", "May be perfectionistic", "May neglect social aspects", "May be overly critical"],
      ideal: "Develop emotional intelligence and interpersonal skills, learn to express emotions, balance rationality with sensitivity, develop empathy, accept imperfection"
    },
    relationships: {
      traits: ["Independent", "Rational", "Visionary", "Complex", "Loyal"],
      strengths: ["Deep conversations", "Problem-solving ability", "Loyalty", "Pursuit of mutual growth", "Respects partner's independence"],
      weaknesses: ["May lack emotional expression", "May neglect daily details", "May be overly critical", "May appear cold", "May be overly independent"],
      ideal: "Build relationships based on mutual understanding and respect, learn to express emotions and appreciation, cultivate patience and empathy, balance independence with intimacy"
    }
  },
  ISTP: {
    description: "Bold and practical experimenters, masters of all kinds of tools",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Flexible", "Practical", "Logical", "Adventurous", "Independent"],
      strengths: ["Solving practical problems", "Crisis management", "Technical skills", "Adaptability", "Cool analysis"],
      weaknesses: ["May lack long-term planning", "May neglect others' feelings", "May get bored with routine", "May take unnecessary risks", "May appear detached"],
      ideal: "Provides work environment that utilizes practical skills and problem-solving abilities, with variety and challenges, and space for independent work"
    },
    personalGrowth: {
      traits: ["Adaptable", "Calm", "Practical", "Logical", "Independent"],
      strengths: ["Problem-solving skills", "Crisis management", "Technical skills", "Flexibility", "Observational skills"],
      weaknesses: ["May lack long-term planning", "May neglect emotional needs", "May appear detached", "May avoid commitments", "May be overly risk-taking"],
      ideal: "Develop long-term planning skills, cultivate emotional intelligence and interpersonal skills, learn to express emotions, balance risk-taking with stability, accept routine"
    },
    relationships: {
      traits: ["Independent", "Flexible", "Calm", "Practical", "Adventurous"],
      strengths: ["Solving practical problems", "Adaptability", "Respecting partner's independence", "Calm in crises", "Loyalty"],
      weaknesses: ["May lack emotional expression", "May avoid commitments", "May neglect partner's emotional needs", "May appear detached", "May lack long-term planning"],
      ideal: "Build relationships based on mutual understanding and respect, learn to express emotions and commitment, develop long-term planning skills, balance independence with intimacy"
    }
  },
  ISFP: {
    description: "Flexible and charming artists, always ready to explore and experience something new",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Compassionate", "Flexible", "Creative", "Practical", "Harmonious"],
      strengths: ["Artistic expression", "Adaptability", "Attention to detail", "Solving practical problems", "Creating harmonious environments"],
      weaknesses: ["May lack long-term planning", "May struggle with decision-making", "May be overly sensitive", "May avoid conflict", "May lack confidence"],
      ideal: "Provides work environment that allows for creative and artistic expression, with flexibility and autonomy, and opportunities to help others or create beauty"
    },
    personalGrowth: {
      traits: ["Sensitive", "Creative", "Harmonious", "Practical", "Compassionate"],
      strengths: ["Artistic expression", "Adaptability", "Strong sensibility", "Attention to detail", "Appreciation of beauty"],
      weaknesses: ["May be overly sensitive", "May avoid conflict", "May lack confidence", "May struggle with long-term planning", "May be overly idealistic"],
      ideal: "Cultivate self-confidence and decision-making skills, learn to handle conflict, develop long-term planning abilities, balance ideals with reality, accept criticism and feedback"
    },
    relationships: {
      traits: ["Sensitive", "Harmonious", "Compassionate", "Flexible", "Loyal"],
      strengths: ["Deep understanding of partner", "Creating harmonious atmosphere", "Adaptability", "Attention to detail", "Compassion"],
      weaknesses: ["May avoid conflict", "May struggle to express needs", "May be overly sensitive", "May lack long-term planning", "May be overly idealistic"],
      ideal: "Build harmonious, deep relationships while learning to express own needs, handle conflict, develop long-term planning skills, balance ideals with reality"
    }
  },
  INFP: {
    description: "Idealistic and loyal individuals, always searching for the meaning and value of life",
    image: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Idealistic", "Compassionate", "Creative", "Adaptable", "Insightful"],
      strengths: ["Creative expression", "Understanding others", "Pursuing meaning", "Flexibility", "Inspiring others"],
      weaknesses: ["May be overly idealistic", "May struggle with decision-making", "May avoid conflict", "May be overly sensitive", "May lack practical skills"],
      ideal: "Provides work environment that allows realization of personal values and ideals, with creativity and autonomy, and opportunities to help others or contribute to the world"
    },
    personalGrowth: {
      traits: ["Idealistic", "Compassionate", "Creative", "Authentic", "Harmony-seeking"],
      strengths: ["Deep self-awareness", "Creative thinking", "Understanding others", "Pursuit of personal growth", "Adaptability"],
      weaknesses: ["May be overly idealistic", "May be overly sensitive", "May avoid reality", "May struggle with decision-making", "May neglect practical needs"],
      ideal: "Balance ideals with reality, cultivate decision-making skills, learn to handle conflict, develop practical skills, accept imperfection and criticism"
    },
    relationships: {
      traits: ["Idealistic", "Compassionate", "Loyal", "Thoughtful", "Harmony-seeking"],
      strengths: ["Deep understanding of partner", "Compassion", "Loyalty", "Pursuit of deep connection", "Creating harmony"],
      weaknesses: ["May idealize relationships", "May avoid conflict", "May be overly sensitive", "May struggle to express needs", "May neglect practical issues"],
      ideal: "Build deep, meaningful relationships while learning to handle conflict, express own needs, balance ideals with reality, accept imperfection"
    }
  },
  INTP: {
    description: "Innovative logicians with a thirst for understanding how the world works",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Logical", "Innovative", "Analytical", "Independent", "Curious"],
      strengths: ["Solving complex problems", "Innovative thinking", "Theoretical analysis", "Adaptability", "Independent work"],
      weaknesses: ["May neglect details", "May struggle to complete projects", "May neglect others' feelings", "May be overly theoretical", "May appear detached"],
      ideal: "Provides work environment that utilizes logical analysis and innovative thinking, with challenging problems to solve, and space for independent thought and exploration"
    },
    personalGrowth: {
      traits: ["Logical", "Innovative", "Independent", "Curious", "Adaptable"],
      strengths: ["Analytical ability", "Innovative thinking", "Problem-solving", "Learning new knowledge", "Theoretical construction"],
      weaknesses: ["May neglect emotional needs", "May struggle to complete tasks", "May appear detached", "May be overly critical", "May neglect practical details"],
      ideal: "Cultivate emotional intelligence and interpersonal skills, learn to express emotions, develop practical skills, improve task completion ability, balance theory with practice"
    },
    relationships: {
      traits: ["Independent", "Logical", "Innovative", "Adaptable", "Curious"],
      strengths: ["Deep conversations", "Problem-solving ability", "Respecting partner's independence", "Adaptability", "Loyalty"],
      weaknesses: ["May lack emotional expression", "May neglect daily details", "May appear detached", "May be overly theoretical", "May struggle with commitment"],
      ideal: "Build relationships based on mutual understanding and respect, learn to express emotions and appreciation, cultivate patience and empathy, balance theory with practical life"
    }
  },
  ESTP: {
    description: "Smart, energetic, and very perceptive people who truly enjoy living on the edge",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Flexible", "Practical", "Adventurous", "Decisive", "Sociable"],
      strengths: ["Quick problem-solving", "Crisis management", "Negotiation skills", "Adaptability", "Practical skills"],
      weaknesses: ["May lack long-term planning", "May neglect details", "May take unnecessary risks", "May be impatient", "May neglect others' feelings"],
      ideal: "Provides dynamic and changing work environment, with opportunities to use practical skills and problem-solving abilities, and interact and collaborate with others"
    },
    personalGrowth: {
      traits: ["Flexible", "Practical", "Adventurous", "Optimistic", "Sociable"],
      strengths: ["Adaptability", "Solving practical problems", "Keen observation", "Action-oriented", "Living in the moment"],
      weaknesses: ["May lack long-term planning", "May neglect consequences", "May be overly risk-taking", "May be impatient", "May neglect others' feelings"],
      ideal: "Develop long-term planning skills, cultivate patience and empathy, learn to consider long-term impacts of decisions, balance risk-taking with stability, accept routine"
    },
    relationships: {
      traits: ["Energetic", "Flexible", "Practical", "Adventurous", "Optimistic"],
      strengths: ["Creating excitement and fun", "Adaptability", "Solving practical problems", "Optimism", "Living in the moment"],
      weaknesses: ["May lack long-term commitment", "May neglect partner's emotional needs", "May be overly risk-taking", "May be impatient", "May avoid deep emotional conversations"],
      ideal: "Build exciting and fun relationships while learning long-term commitment, cultivating patience and empathy, balancing excitement with stability, deepening emotional communication"
    }
  },
  ESFP: {
    description: "Spontaneous, energetic performers who love life and others",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Enthusiastic", "Sociable", "Practical", "Adaptable", "Optimistic"],
      strengths: ["Interpersonal skills", "Creating positive atmosphere", "Practical abilities", "Flexibility", "Teamwork"],
      weaknesses: ["May lack long-term planning", "May struggle to focus", "May avoid responsibilities", "May be impulsive", "May struggle with stress"],
      ideal: "Provides energetic and socially interactive work environment, with opportunities to use practical skills and creativity, and help and entertain others"
    },
    personalGrowth: {
      traits: ["Enthusiastic", "Optimistic", "Sociable", "Practical", "Adaptable"],
      strengths: ["Enjoying life", "Creating positive atmosphere", "Adaptability", "Practical skills", "Empathy"],
      weaknesses: ["May lack long-term planning", "May struggle to focus", "May avoid responsibilities", "May be impulsive", "May struggle with negative emotions"],
      ideal: "Develop long-term planning skills, cultivate self-discipline and focus, learn to take responsibilities, balance fun with duties, accept and process negative emotions"
    },
    relationships: {
      traits: ["Enthusiastic", "Optimistic", "Sociable", "Practical", "Empathetic"],
      strengths: ["Creating joyful atmosphere", "Adaptability", "Practical support", "Empathy", "Living in the moment"],
      weaknesses: ["May lack depth", "May avoid serious topics", "May be overly dependent on others", "May struggle with long-term commitment", "May neglect future planning"],
      ideal: "Build fun and warm relationships while learning to handle serious topics, cultivating independence, developing long-term commitment skills, balancing fun with responsibilities"
    }
  },
  ENFP: {
    description: "Enthusiastic, creative and sociable free spirits who can always find a reason to smile",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Creative", "Enthusiastic", "Flexible", "Sociable", "Insightful"],
      strengths: ["Innovative thinking", "Inspiring others", "Adaptability", "Communication skills", "Spotting potential"],
      weaknesses: ["May struggle to focus", "May be overly idealistic", "May struggle to complete tasks", "May be emotional", "May neglect details"],
      ideal: "Provides work environment that allows for creativity and interpersonal skills, with variety and challenges, and opportunities to inspire others and pursue ideals"
    },
    personalGrowth: {
      traits: ["Enthusiastic", "Creative", "Sociable", "Empathetic", "Adaptable"],
      strengths: ["Innovative thinking", "Inspiring others", "Understanding others", "Adaptability", "Optimism"],
      weaknesses: ["May struggle to focus", "May be overly idealistic", "May be emotional", "May struggle with decision-making", "May neglect practical details"],
      ideal: "Cultivate focus and self-discipline, learn to balance ideals with reality, develop decision-making skills, improve task completion ability, pay attention to practical details"
    },
    relationships: {
      traits: ["Enthusiastic", "Creative", "Sociable", "Empathetic", "Flexible"],
      strengths: ["Deep understanding of partner", "Creating romantic atmosphere", "Strong communication", "Adaptability", "Inspiring partner's potential"],
      weaknesses: ["May be emotional", "May struggle with long-term commitment", "May neglect practical needs", "May be overly idealistic", "May struggle with daily chores"],
      ideal: "Build passionate and creative relationships while learning long-term commitment, cultivating patience and stability, balancing ideals with reality, focusing on practical needs"
    }
  },
  ENTP: {
    description: "Smart and curious thinkers who cannot resist an intellectual challenge",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Innovative", "Debater", "Adaptable", "Strategic thinker", "Curious"],
      strengths: ["Innovative thinking", "Solving complex problems", "Adapting to change", "Leadership skills", "Analytical abilities"],
      weaknesses: ["May struggle to complete tasks", "May be argumentative", "May neglect details", "May struggle to follow rules", "May appear arrogant"],
      ideal: "Provides work environment full of challenges and innovation opportunities, with chances to use strategic thinking and problem-solving skills, and freedom to explore new ideas"
    },
    personalGrowth: {
      traits: ["Innovative", "Adaptable", "Curious", "Debater", "Strategic thinker"],
      strengths: ["Innovative thinking", "Adapting to change", "Learning new knowledge", "Analytical skills", "Leadership abilities"],
      weaknesses: ["May struggle to focus", "May be argumentative", "May neglect others' feelings", "May struggle to complete tasks", "May appear arrogant"],
      ideal: "Cultivate focus and task completion skills, develop empathy, learn to listen to others' viewpoints, balance innovation with execution, accept routine and details"
    },
    relationships: {
      traits: ["Creative", "Debater", "Adaptable", "Charismatic", "Independent"],
      strengths: ["Intellectual stimulation", "Adaptability", "Problem-solving skills", "Creative thinking", "Openness"],
      weaknesses: ["May be argumentative", "May lack emotional expression", "May neglect partner's feelings", "May struggle with commitment", "May appear arrogant"],
      ideal: "Build relationships full of intellectual stimulation and open communication, while learning to listen and understand partner's feelings, cultivate emotional expression, develop long-term commitment"
    }
  },
  ESTJ: {
    description: "Efficient, organized managers, with a focus on tradition and order",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Organized", "Responsible", "Practical", "Decisive", "Traditional"],
      strengths: ["Leadership skills", "Strong execution", "Following rules", "High efficiency", "Attention to detail"],
      weaknesses: ["May be inflexible", "May not adapt well", "May be overly critical", "May neglect others' feelings", "May struggle with new ideas"],
      ideal: "Provides structured and orderly work environment with clear rules and goals, where they can apply organizational and management skills, with opportunities to lead others"
    },
    personalGrowth: {
      traits: ["Organized", "Responsible", "Practical", "Decisive", "Traditional"],
      strengths: ["Leadership skills", "Strong execution", "Reliability", "High efficiency", "Decision-making abilities"],
      weaknesses: ["May be inflexible", "May not adapt well", "May be overly critical", "May neglect emotional needs", "May struggle with change"],
      ideal: "Cultivate flexibility and open-mindedness, develop empathy, learn to accept new ideas, balance tradition with innovation, focus on emotional needs of self and others"
    },
    relationships: {
      traits: ["Responsible", "Reliable", "Traditional", "Organized", "Practical"],
      strengths: ["Stable and dependable", "Problem-solving skills", "Strong organizational skills", "Clear communication", "Taking responsibility"],
      weaknesses: ["May be controlling", "May lack emotional expression", "May neglect partner's feelings", "May be inflexible", "May struggle with change"],
      ideal: "Build stable and organized relationships while learning to be flexible with changes, cultivate emotional expression, develop empathy, accept partner's different viewpoints"
    }
  },
  ESFJ: {
    description: "Caring, social, and popular people, always eager to help",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Sympathetic", "Cooperative", "Responsible", "Organized", "Practical"],
      strengths: ["Interpersonal skills", "Teamwork", "Attention to detail", "Reliability", "Serving others"],
      weaknesses: ["May worry excessively", "May be overly sensitive", "May struggle with criticism", "May be too traditional", "May struggle with conflict"],
      ideal: "Provides work environment that allows cooperation and helping others, with clear rules and expectations, where they can apply organizational skills and interpersonal abilities"
    },
    personalGrowth: {
      traits: ["Sympathetic", "Cooperative", "Responsible", "Traditional", "Sociable"],
      strengths: ["Caring for others", "Organizational skills", "Reliability", "Practical support", "Creating harmony"],
      weaknesses: ["May worry excessively", "May be overly sensitive", "May struggle with criticism", "May neglect own needs", "May be overly dependent on others' approval"],
      ideal: "Cultivate independence and self-confidence, learn to accept criticism, develop stress management skills, balance others' needs with own needs, accept change and new ideas"
    },
    relationships: {
      traits: ["Sympathetic", "Loyal", "Responsible", "Sociable", "Traditional"],
      strengths: ["Attentive to partner's needs", "Creating harmonious atmosphere", "Practical support", "Reliability", "Good communication"],
      weaknesses: ["May worry excessively", "May be overly sensitive", "May struggle to express negative emotions", "May be too traditional", "May neglect own needs"],
      ideal: "Build warm and harmonious relationships while learning to express own needs, cultivate independence, accept change and different viewpoints, balance caring for others with self-care"
    }
  },
  ENFJ: {
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Leadership", "Empathetic", "Communicative", "Visionary", "Harmony-oriented"],
      strengths: ["Inspiring others", "Team building", "Resolving interpersonal conflicts", "Creating positive atmosphere", "Spotting potential"],
      weaknesses: ["May be overly idealistic", "May struggle with tough decisions", "May neglect own needs", "May worry excessively", "May struggle with criticism"],
      ideal: "Provides work environment for leading and nurturing others, with opportunities to drive positive change and achieve shared goals"
    },
    personalGrowth: {
      traits: ["Empathetic", "Visionary", "Enthusiastic", "Responsible", "Sociable"],
      strengths: ["Understanding others", "Inspiring potential", "Strong organizational skills", "Creating harmony", "Persuasive abilities"],
      weaknesses: ["May be self-sacrificing", "May struggle with negative emotions", "May be overly idealistic", "May struggle to say no", "May worry excessively"],
      ideal: "Cultivate self-care and boundary setting, learn to accept imperfection while maintaining ability to inspire others and pursue ideals"
    },
    relationships: {
      traits: ["Enthusiastic", "Empathetic", "Loyal", "Visionary", "Supportive"],
      strengths: ["Deep understanding of partner", "Creating harmonious relationships", "Positive communication", "Supporting partner's growth", "Conflict resolution"],
      weaknesses: ["May idealize relationships", "May struggle to express personal needs", "May worry excessively", "May struggle with criticism", "May neglect own emotions"],
      ideal: "Build deep, meaningful relationships while learning to care for own needs, balance caring for others with self-realization"
    }
  },
  ENTJ: {
    description: "Bold, imaginative and strong-willed leaders, always finding a way – or making one",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    career: {
      traits: ["Leadership", "Strategic thinking", "Decisive", "Visionary", "Confident"],
      strengths: ["Organizational skills", "Decision-making", "Achieving goals", "Innovative thinking", "Inspiring others"],
      weaknesses: ["May be overly domineering", "May neglect others' feelings", "May appear arrogant", "May be overly critical", "May be impatient"],
      ideal: "Provides work environment that utilizes leadership skills and strategic thinking, with challenging long-term goals and opportunities to influence and change organizations"
    },
    personalGrowth: {
      traits: ["Leadership", "Visionary", "Confident", "Decisive", "Ambitious"],
      strengths: ["Strategic thinking", "Achieving goals", "Organizational skills", "Decision-making abilities", "Inspiring others"],
      weaknesses: ["May neglect emotional needs", "May be overly controlling", "May appear arrogant", "May be impatient", "May be overly critical"],
      ideal: "Cultivate empathy and emotional intelligence, learn to listen to others' viewpoints, develop patience and humility, balance rationality with sensitivity, accept imperfection"
    },
    relationships: {
      traits: ["Leadership", "Confident", "Visionary", "Loyal", "Decisive"],
      strengths: ["Providing direction and security", "Problem-solving skills", "Inspiring partner's growth", "Honesty and directness", "Taking responsibility"],
      weaknesses: ["May be overly controlling", "May neglect partner's emotional needs", "May appear domineering", "May be impatient", "May struggle to express tenderness"],
      ideal: "Build relationships based on mutual respect and growth, while learning to listen and understand partner's feelings, cultivate patience and gentleness, balance leadership with cooperation"
    }
  }
};

export const getMBTIDetails = (type: string): MBTIDetail => {
  return mbtiDetails[type] || mbtiDetails.ISTJ; // Default to ISTJ if type doesn't exist
};