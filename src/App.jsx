import { tw } from "twind";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Skill from "./components/Skill";
import CareerObjective from "./components/CareerObjective";
import WorkExperience from "./components/WorkExperience";
import { useData } from "./hooks/data";

function App() {
  const { data } = useData();

  return (
    <div className={tw`min-h-screen flex`}>
      <div className={tw`p-6 w-[300px] bg-[#ecf0f1] space-y-4`}>
        <Bio {...data.bio} />
        <Education />
        <Skill skills={data.skills} />
      </div>
      <div className={tw`p-6 space-y-4`}>
        <CareerObjective />
        <WorkExperience workExps={data.workExps} />
      </div>
    </div>
  );
}

export default App;
