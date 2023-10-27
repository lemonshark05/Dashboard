import { useParams } from 'react-router-dom';

function LoadDetails({ data }) {
  const { day } = useParams();
  const details = data.find(d => d.date === day);

  if (!details) return <div>No data found for this date</div>;

  return (
    <div>
      <h3>Date: {details.date}</h3>
      <h3>Phase: {details.phase} {details.moonphase}</h3>
      <h3>Visibility: {details.visibility} %</h3>
      <h3>Moonrise: {details.moonrise} PM</h3>
      <h3>Moonset: {details.moonset} PM</h3>
      <h3>Description: {details.description}</h3>
    </div>
  );
}

export default LoadDetails;