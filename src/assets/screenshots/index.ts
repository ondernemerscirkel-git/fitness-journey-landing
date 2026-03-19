// English screenshots
import enGuidedBenchPress from "./en/guided-bench-press.png";
import enExerciseDetail from "./en/exercise-detail.png";
import enAnalytics from "./en/analytics.png";
import enWorkoutLog from "./en/workout-log.png";
import enActiveWorkout from "./en/active-workout.png";
import enHeroDesktop from "./en/hero-desktop.png";
import enHeroMobile from "./en/hero-mobile.png";

// Dutch screenshots
import nlGuidedBenchPress from "./nl/guided-bench-press.png";
import nlExerciseDetail from "./nl/exercise-detail.png";
import nlAnalytics from "./nl/analytics.png";
import nlWorkoutLog from "./nl/workout-log.png";
import nlActiveWorkout from "./nl/active-workout.png";
import nlHeroDesktop from "./nl/hero-desktop.png";
import nlHeroMobile from "./nl/hero-mobile.png";

import type { Locale } from "@/i18n/useTranslations";

export const screenshots = {
  en: {
    heroDesktop: enHeroDesktop,
    heroMobile: enHeroMobile,
    mockups: [enGuidedBenchPress, enExerciseDetail, enAnalytics, enWorkoutLog, enActiveWorkout],
  },
  nl: {
    heroDesktop: nlHeroDesktop,
    heroMobile: nlHeroMobile,
    mockups: [nlGuidedBenchPress, nlExerciseDetail, nlAnalytics, nlWorkoutLog, nlActiveWorkout],
  },
} as const satisfies Record<Locale, {
  heroDesktop: string;
  heroMobile: string;
  mockups: string[];
}>;
