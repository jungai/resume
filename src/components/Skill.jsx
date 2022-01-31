import { tw } from "twind";

const Skill = (props) => (
  <div>
    <h1
      className={tw`text(capitalize 2xl) font-bold mb-2 inline-block border(b-4 [tomato])`}
    >
      skills
    </h1>
    <ul className={tw`grid grid-cols-3 list-disc pl-4`}>
      {(props.skills || []).map((skill) => (
        <li className={tw`col-span-1`} key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skill;
