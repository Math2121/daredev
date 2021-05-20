import "./style";
import { Section } from "./style";
interface CardsProps {
  subtitle: string;
  description: string;
}
export function Cards({ subtitle, description }: CardsProps) {
  return (
    <div className="col-md-6  ">
      <Section>
        <h2 className="text-center">{subtitle}</h2>

        <p>
          {description}
          <span>.</span>
        </p>
      </Section>
    </div>
  );
}
