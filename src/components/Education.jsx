import { tw } from "twind";

const Education = () => (
  <div>
    <h1
      className={tw`text(capitalize 2xl) font-bold mb-2 inline-block border(b-4 [tomato])`}
    >
      education
    </h1>
    <h2 className={tw`capitalize font-bold`}>
      king mongkut's institute of technology ladkrabang
    </h2>
    <div className={tw`flex items-center justify-between`}>
      <p>Computer Science, B.S.</p>
      <span>2015-2019</span>
    </div>
    <span>3.21 GPA</span>
  </div>
);

export default Education;
