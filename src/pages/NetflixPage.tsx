import LatestShowList from "../components/netflix/LatestShowList";

const NetflixPage = () => {
  return (
    <div className="my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Welcome to Netflix</h1>
        <p className="lead">
          Browse, Watch Netflix Originals. Manage watchlist as well!
        </p>
      </div>

      <div className="mt-3">
        <h2>Latest Shows | Props Demo</h2>
        <LatestShowList />
      </div>
    </div>


  );
};

export default NetflixPage;
