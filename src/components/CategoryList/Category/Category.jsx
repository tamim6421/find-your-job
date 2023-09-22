const Category = ({ cat }) => {
    const{availability,category_name,logo} = cat
//   console.log(cat);
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-24"
            src={logo}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{category_name}!</h2>
          <p className="text-xl font-semibold">{availability} </p>
         
        </div>
      </div>
    </div>
  );
};

export default Category;
