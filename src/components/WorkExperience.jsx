import { tw } from "twind";
import { AiTwotoneCalendar } from "react-icons/ai";

const WorkExperience = (props) => (
  <div>
    <h1 className={tw`uppercase text-4xl font-bold mb-2`}>work experience</h1>
    {(props.workExps || []).map((workExp, index) => (
      <div key={`${index}-${workExp.role}`} className={tw`mb-6`}>
        <h2 className={tw`capitalize text-xl`}>{workExp.role}</h2>
        <p className={tw`font-semibold text-base`}>{workExp.company}</p>
        <div className={tw`mb-4`}>
          <div className={tw`flex items-center space-x-2`}>
            <AiTwotoneCalendar />
            <span>{workExp.timeline}</span>
          </div>
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
