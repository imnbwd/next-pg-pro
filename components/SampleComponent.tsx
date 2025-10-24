
interface SampleComponentProps {
  message1: string;
  message2: string;
  message3: string;
  message4: string;
}
export default function SampleComponent(props: SampleComponentProps) {
  return (
    <div>
      <div className="text-center">SampleComponent</div>
      <div>
        <div>{props.message1}</div>
        <div>{props.message2}</div>
        <div>{props.message3}</div>
        <div>{props.message4}</div>
      </div>
    </div>
  );
}
