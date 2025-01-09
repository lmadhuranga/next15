import { fetchData } from "@/actions/apiRoutes";
import { HOME_PAGE } from "@/apiRoutes";
import HomePage from "@/components/HomePage";
 
const Page = async () => {
  const resJson = await fetchData({ url: HOME_PAGE });
  return (
     <>
     <HomePage data={resJson} />
     </>
  );
};

export const generateMetadata = async () => {
  return { title: 'Users Page' };
}

export default Page;