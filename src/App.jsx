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
    <div className={tw`min-h-screen p-4 space-y-4`}>
      <Bio {...data.bio} />
      <CareerObjective />
      <Education />
      <WorkExperience workExps={data.workExps} />
      <Skill skills={data.skills} />
    </div>
  );
}

export default App;
