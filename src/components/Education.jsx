import { tw } from "twind";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdGrade } from "react-icons/md";

const Education = () => (
  <div>
    <h1 className={tw`uppercase text-4xl font-bold`}>education</h1>
    <span>B.S.</span>
    <p className={tw`capitalize`}>computer science</p>
    <p className={tw`capitalize font-bold`}>
      king mongkut's institute of technology ladkrabang
    </p>
    <ul className={tw`mt-4`}>
      <li className={tw`flex items-center space-x-2`}>
        <AiTwotoneCalendar />
        <span>2015-2019</span>
      </li>
      <li className={tw`flex items-center space-x-2`}>
        <MdGrade />
        <span>3.21</span>
      </li>
    </ul>
  </div>
);

export default Education;
