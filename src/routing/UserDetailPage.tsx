import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  const userId = params.id;

  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams", searchParams.toString());
  console.log("searchParams", searchParams.get("name"));
  const location = useLocation();

  console.log("location", location);
  return (
    <div>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserDetailPage;
