import { ErrorBoundary } from "react-error-boundary";
import LatestShowList from "../components/netflix/LatestShowList";
import RecommendedShowList from "../components/netflix/RecommendedShowList";
import TrendingShowList from "../components/netflix/TrendingShowList";

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

      <div className="mt-5 pt-2">
        <hr />
        <h2>Trending Shows | States, Events Demo</h2>
        <TrendingShowList />
      </div>

      <div className="mt-5 pt-2">
        <hr />
        <h2>
          Recommended Shows | States, Events, Conditional Rendering, Lists &
          Keys Demo
        </h2>
        <ErrorBoundary
          fallback={
            <div className="alert alert-danger">
              Something went wrong! Try again later!
            </div>
          }
        >
          <RecommendedShowList />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default NetflixPage;
