import MyCardTutor from "@/atomics/molecules/MyCardTutor";
import accountService from "@/services/account";

const getTutors = async () => {
  const resTutors = await accountService.findTutors({
    limit: 5,
  });
  return resTutors?.data?.data.tutors || [];
};

const TutorsSection = async () => {
  const tutors = await getTutors();
  return (
    <div className="grid grid-cols-1 gap-3">
      {tutors.map((tutor) => (
        <MyCardTutor key={tutor.id} account={tutor} />
      ))}
    </div>
  );
};

export default TutorsSection;
