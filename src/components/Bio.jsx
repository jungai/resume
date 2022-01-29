import { tw } from "twind";

const Bio = (props) => (
  <div>
    <h1 className={tw`uppercase text-4xl font-bold`}>
      {props.firstName || "firstName"}
      <br />
      {props.lastName || "lastName"}
    </h1>
    <span className={tw`capitalize text-xl italic`}>
      {props.currentRole || "role"}
    </span>
    <ul className={tw`mt-4`}>
      {(props.contacts || []).map((contact, index) => (
        <li
          className={tw`flex items-center space-x-2`}
          key={`${index}-${contact.text}`}
        >
          {contact.icon}
          <span>{contact.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Bio;
