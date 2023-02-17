import { Category } from "../../types/Category";
import DirectoryItem from "../directoryItem/directoryItem.component";
import './directory.styles.scss';

const categories: Category[] = [
    { id: 1, title: "Beginner Programs", imageUrl: `https://imperium.coach/wp-content/uploads/2022/11/Imperium-Online-Coaching-Body-Transformation-CM_2.webp`, products: [], route: 'shop/beginner-programs'}, 
    { id: 2, title: "Intermediate Programs", imageUrl: `https://imperium.coach/wp-content/uploads/2022/11/Imperium-Online-Coaching-Body-Transformation-LK.webp`, products: [], route: 'shop/intermediate-programs'}, 
    { id: 3, title: "Advanced Programs", imageUrl: `https://imperium.coach/wp-content/uploads/2022/11/Imperium-Online-Coaching-Body-Transformation-LB.webp`, products: [], route: 'shop/advanced-programs'}]


const Directory: React.FC = () => {
     
        return (
        <div className="categories-container">
            {categories.map((category) => (
                <DirectoryItem category={category} route={category.route} key={category.id}/>
            ))}
        </div>
    );
}

export default Directory;