export default function Hello({ firstname = "World", lastname = "" }) {
  let fullname = firstname;
  if (lastname !== "") {
    fullname += " " + lastname;
  }
  return <h1>Hello, {fullname}!</h1>;
}
