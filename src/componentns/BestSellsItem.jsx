
const BestSellsItem = ({item}) => {
    const{name,image}=item ||{}
    return (
        <div>
            <div className="card w-96 h-[300px] bg-base-100 shadow-xl image-full">
  <figure><img className="h-[300px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="card-actions justify-end">
      <p className="btn btn-ghost text-2xl">{name}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default BestSellsItem;