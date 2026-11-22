import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustStripSection } from './components/TrustStripSection';
import { HeritagePillarsSection } from './components/HeritagePillarsSection';
import { PracticeAndTimelineSection } from './components/PracticeAndTimelineSection';
import { ShowcaseAndChallengesSection } from './components/ShowcaseAndChallengesSection';
import { TestimonialsAndCasesSection } from './components/TestimonialsAndCasesSection';
import { FaqAndSurveySection } from './components/FaqAndSurveySection';
import { FinalCtaAndFooter } from './components/FinalCtaAndFooter';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F4] text-[#1F161A]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustStripSection />
        <HeritagePillarsSection />
        <PracticeAndTimelineSection />
        <ShowcaseAndChallengesSection />
        <TestimonialsAndCasesSection />
        <FaqAndSurveySection />
      </main>
      <FinalCtaAndFooter />
    </div>
  );
}

export default App;
