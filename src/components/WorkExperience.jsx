import { tw } from "twind";
import { AiTwotoneCalendar } from "react-icons/ai";

const WorkExperience = (props) => (
  <div>
    <h1
      className={tw`text(capitalize 2xl) font-bold mb-2 inline-block border(b-4 [tomato])`}
    >
      Working Experience
    </h1>
    {(props.workExps || []).map((workExp, index) => (
      <div key={`${index}-${workExp.role}`} className={tw`mb-4`}>
        <h2 className={tw`capitalize text-xl`}>{workExp.role}</h2>
        <div className={tw`flex justify-between items-center`}>
          <p className={tw`font-semibold text-base`}>{workExp.company}</p>
          <span>{workExp.timeline}</span>
        </div>
        <div className={tw`mb-4`}>
          <ul className={tw`list-disc pl-8`}>
            {(workExp.jobDetail || []).map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default WorkExperience;
