const CreateContent = ({title,desc,price,image}) => {
    return(
        <div className="card">
            <img src={image} alt="image" />
            <h3 className="title">{title}</h3>
            <h4>{price > 0 ? price + " AZN" : "Free"}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default CreateContent;