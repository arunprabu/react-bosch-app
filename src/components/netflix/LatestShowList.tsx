import LatestShow from "./LatestShow";

const LatestShowList = () => {

  return (
    <div className="row">
      <div className="col-sm-3">
        <LatestShow
          title="Berlin"
          thumnailUrl="https://placehold.co/400x300/ffff00/000000/png"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi"
        />
      </div>
      <div className="col-sm-3">
        <LatestShow
          title="Money Heist"
          thumnailUrl="https://placehold.co/400x300/ff0000/000000/png"
          description="consectetur adipisicing elit. sgfdd dfgdgfh blanditiis
          Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi testing wow"
        />
      </div>
    </div>
  );
};

export default LatestShowList;
