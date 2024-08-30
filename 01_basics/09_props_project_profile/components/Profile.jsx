
export default function Profile(props) {
  return (
    <div>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>{props.greeting}</p>
    </div>
  )
}
