
const Samsung = () => {

    fetch(`http://localhost:3000/brands/Apple`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
    return (
        <div>
         
        </div>
    );
};

export default Samsung;