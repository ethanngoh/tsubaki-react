import { ColorKey, getColor } from "../colors";
import { useBackgroundColor } from "../hooks/useBackgroundColor";
import { useTextColor } from "../hooks/useTextColor";
import { H1 } from "../stylePrimitives";

export const OverviewPage = () => {
  useBackgroundColor(getColor(ColorKey.BACKGROUND));
  useTextColor(getColor(ColorKey.TEXT));

  return (
    <>
      <H1>Tsubaki React</H1>
    </>
  );
};
