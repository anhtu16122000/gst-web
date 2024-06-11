import Information from "@/screens/Information";
import classesService from "@/services/classes";
import authHandler from "@/utils/authHandler";
import { cookies } from "next/headers";

const getMyClasses = async () => {
  const cookieStore = cookies();
  authHandler.injectTokenServerSide(cookieStore);
  return await classesService.me({
    limit: 100,
    page: 1,
  });
};

const page = async (props) => {
  const resClasses = await getMyClasses();
  const classes = resClasses?.data?.data?.classes || [];
  return <Information {...props} classes={classes} />;
};
export default page;
