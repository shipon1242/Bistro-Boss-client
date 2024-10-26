
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";
import { Link } from "react-router-dom";


const PopularManu = () => {
 const [menu]=UseMenu()
 const popular=menu.filter(item=>item.category ==="popular")


    return (
        <section className="mb-6">
            <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Check it out">
                   
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-8 mt-8 md:mt-10 px-4 md:px-10">
                {
                    popular.map(item=> <MenuItem
                    key={item._id}
                    items={item}
                    ></MenuItem> )
                }
            </div>
            <Link to="/menu">
            <p className=" text-center mt-4"> <button className="btn btn-outline mt-4 border-0 border-b-4">View Full menu</button> </p>
            </Link>
        </section>
    );
};

export default PopularManu;