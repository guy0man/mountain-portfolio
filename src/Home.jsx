import {Desktop, Mobile} from "@/pages"
import useMediaQuery from "@/hooks/useMediaQuery";

function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <Mobile/> : <Desktop/>;
}
export default Home