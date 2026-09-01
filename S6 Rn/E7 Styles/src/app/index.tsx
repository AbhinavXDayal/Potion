import Divider from "../components/Divider";
import LotsOfStyles from "../components/E7.1 TextStyling";
import FixedDimensions from "../components/E7.2 FixedDimensions";
import FlexDimensions from "../components/E7.3 FlexDimensions";

// Creating Index component
export default function Index() {
  // Returns both list components with divider
  return (
    <>
      <LotsOfStyles />

      <Divider />

      <FixedDimensions />

      <Divider />

      <FlexDimensions />
    </>
  );
}
