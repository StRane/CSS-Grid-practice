import { Expand } from "./Expand";
import { Global } from "./Global";
import { Hearth } from "./Hearth";
import { Hearthfull } from "./Hearthfull";
import { Key } from "./Key";
import { Lock } from "./Lock";
import { MaleIco } from "./MaleIco";
import { Map } from "./Map";
import { Presentation } from "./Presentation";
import { Trophy } from "./Trophy";

const Icons = (props) => {
  switch (props.name.toLowerCase()) {
    case "expand":
      return <Expand {...props} />;
    case "global":
      return <Global {...props} />;
    case "hearth":
      return <Hearth {...props} />;
    case "hearthfull":
      return <Hearthfull {...props} />;
    case "key":
      return <Key {...props} />;
    case "lock":
      return <Lock {...props} />;
    case "maleico":
      return <MaleIco {...props} />;
    case "map":
      return <Map {...props} />;
    case "presentation":
      return <Presentation {...props} />;
    case "trophy":
      return <Trophy {...props} />;
  }
};

export { Icons };
