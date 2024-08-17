import { GrFormPrevious } from "react-icons/gr";
import Paragraph from "../../SharedComponents/Paragraph";
import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
function ReadMore({ id }) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    console.log(id);
    navigate(`/news/${id}`);
  };
  return (
    <div
      className="flex gap-2 justify-end items-center text-green cursor-pointer"
      onClick={handleOnClick}
    >
      <Paragraph className="font-bold">قراءة المزيد</Paragraph>
      <GrFormPrevious size={24} />
    </div>
  );
}

export default ReadMore;
