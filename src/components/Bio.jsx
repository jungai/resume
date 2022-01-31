import { tw } from "twind";

const Bio = (props) => (
  <div>
    <h1 className={tw`capitalize text(2xl center) font-bold`}>
      {`${props.firstName || "firstName"} ${props.lastName || "lastName"}`}
    </h1>
    <p className={tw`capitalize text(xl center) italic`}>
      {props.currentRole || "role"}
    </p>
    <ul className={tw`mt-4 flex justify-center items-center space-x-4`}>
      {(props.contacts || []).map((contact, index) => (
        <li
          className={tw`flex items-center justify-center space-x-1`}
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
