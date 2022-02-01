import { tw } from "twind";
import { TiLocation } from "react-icons/ti";

const Bio = (props) => (
  <div>
    <h1 className={tw`capitalize text(2xl center) font-bold`}>
      {`${props.firstName || "firstName"} ${props.lastName || "lastName"}`}
    </h1>
    <p className={tw`capitalize text(xl center) italic`}>
      {props.currentRole || "role"}
    </p>
    <span className={tw`flex items-center justify-center`}>
      <TiLocation />
      {props.address || "address"}
    </span>
    <ul className={tw`flex justify-center items-center space-x-4`}>
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
