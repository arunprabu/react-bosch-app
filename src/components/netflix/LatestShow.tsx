const LatestShow = (props: any) => { // receiving the data from parent component
  console.log(props);

  /* props 
    * props are passed to child component
    * props are object 
    * props are read-only. 
  */

  return (
    <div className="card">
      <img src={props.thumnailUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
         {props.description}
        </p>
        <button className="btn btn-primary">Watch now</button>
      </div>
    </div>
  );
};

export default LatestShow;
