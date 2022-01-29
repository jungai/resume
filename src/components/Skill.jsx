import { tw } from "twind";

const Skill = (props) => (
  <div>
    <h1 className={tw`uppercase text-4xl font-bold mb-2`}>skills</h1>
    <ul>
      {(props.skills || []).map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skill;
