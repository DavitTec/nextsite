import Link from "next/link";

const people = [
  {g: 'team', name: 'david'},
  {g: 'team', name: 'john'}
];

export default function Details() {
  // body...
  return (
    <div>
      {people.map(e => (
        <div>
        <Link as={`/${e.g}/${e.name}`} href="/[group]/[person]">
          <a>Navigate to {e.name}'s Page </a>
        </Link>
        </div>
      ))}
    </div>
  );
}
