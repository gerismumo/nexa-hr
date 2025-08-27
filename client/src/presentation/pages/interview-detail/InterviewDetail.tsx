import { useParams } from "react-router-dom";

const InterviewDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Interview Detail - {id}</h2>
      {/* Show interview data here */}
    </div>
  );
};

export default InterviewDetail;
