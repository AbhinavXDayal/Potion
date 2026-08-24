import Divider from "../components/Divider";
import Listviews from "../components/E6.1 Listviews";
import SectionView from "../components/E6.2 Listviews";

// Creating Index component
export default function Index() {
  // Returns both list components with divider
  return (
    <>
      <Listviews />

      <Divider />

      <SectionView />
    </>
  );
}
