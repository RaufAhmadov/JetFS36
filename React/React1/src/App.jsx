import CreateHeader from "./Components/header";
import CreateFooter from "./Components/footer";
import CreateContent from  "./Components/content";
import {ContentData} from "/src/Mock/Data.js"
import "./style.css";


const App = () => {
  return(
    <div>
      <CreateHeader />
      
      <div className="cards">
          {ContentData.map(({id,title,desc,price,image})=>{
            return(
              <CreateContent 
                key={id}
                title={title}
                desc={desc}
                price={price}
                image={image}
              />
            );
          })}
        </div>

      <CreateFooter/>
    </div>
  );
};
export default App;