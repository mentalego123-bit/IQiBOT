export type NavigationTab = 'home' | 'test' | 'duel' | 'games' | 'leaderboard' | 'referrals' | 'admin';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface GameLimitSettings {
  runnerDailyLimit: number; // 0 = cheksiz
  matrixDailyLimit: number;
  stroopDailyLimit: number;
  mathDailyLimit: number;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  iqScore: number;
  bestIq: number;
  duelRating: number;
  energyTickets: number;
  iqCoins: number;
  completedTestsCount: number;
  duelWins: number;
  duelLosses: number;
  isBanned: boolean;
  joinedAt: string;
  referralsCount: number;
  hasReceivedAutoReminder: boolean;
  // Gamification additions
  streakDays: number;
  lastLoginDate: string;
  streakClaimedToday: boolean;
  lastWheelSpinDate?: string;
  xp: number; // 0 to 10000+
  level: number; // 1 to 10
  levelTitle: string;
  weeklyTimeSpentSeconds: number; // weekly active time in seconds (minimum 300s = 5m)
  badges: string[]; // badge IDs unlocked
  dailyGamePlays?: {
    date: string;
    runner3d: number;
    memory4x4: number;
    stroop: number;
    speedmath: number;
    cipherCode?: number;
    laserReflex?: number;
    colorReflex?: number;
    patternMatch?: number;
  };
}

export type QuestionCategory = 'Mantiq' | 'Visual' | 'Matematik' | 'Fazoviy';

export interface Question {
  id: string;
  question: string;
  svgType?: 'matrix3x3' | 'patternSeries' | 'shapes' | 'clockMath' | 'cube';
  options: string[];
  correctIndex: number;
  explanation: string;
  category: QuestionCategory;
  difficulty?: 'Oson' | "O'rta" | 'Qiyin';
}

export interface DuelOpponent {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  speed: number;
  accuracy: number;
}

export interface ChannelSubscription {
  id: string;
  title: string;
  handleOrLink: string;
  type: 'open' | 'private';
  channelId?: string;
  subscribersCount?: string;
  isRequired: boolean;
}

export interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  city: string;
  iqScore: number;
  duelRating: number;
  rank: number;
  weeklyMinutes: number;
  weeklyPoints: number;
  isCurrentUser?: boolean;
}

export interface BroadcastNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'announcement' | 'reminder' | 'system';
}

export interface MonetizationSettings {
  isTestPaid: boolean;
  testPrice: number;
  testPriceCurrency: 'STARS' | 'UZS' | 'TON';
  paymentRecipient: string; // e.g. "8600 0423 1122 3344" or "@wallet"
  premiumGamesPaid: boolean;
  premiumGamesPrice: number;
}

export interface WeeklyPrizeSettings {
  top1Reward: string; // e.g. "15 Telegram Stars / Gift"
  top2Reward: string; // e.g. "10 Telegram Stars"
  top3Reward: string; // e.g. "5 Telegram Stars"
  minPoints: number; // e.g. 40+
  minTimeMinutes: number; // e.g. 5 minut
}

export interface AdminSettings {
  secretCode: string; // default "20120517M"
  autoReminderText: string;
  autoReminderEnabled: boolean;
  mandatorySubEnabled: boolean;
  testTimePerQuestion: number;
  monetization: MonetizationSettings;
  weeklyPrizes: WeeklyPrizeSettings;
  gameLimits?: GameLimitSettings;
}
