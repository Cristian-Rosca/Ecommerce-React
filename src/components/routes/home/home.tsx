import { Category } from "../../../types/Category";
import Directory from "../../directory/directory";

const Home = () => {
    
        const categories: Category[] = [
            { id: 1, title: "Beginner Programs", imageUrl: `https://imperium.coach/wp-content/uploads/2022/11/Imperium-Online-Coaching-Body-Transformation-CM_2.webp`, products: []}, 
            { id: 2, title: "Intermediate Programs", imageUrl: `https://imperium.coach/wp-content/uploads/2022/11/Imperium-Online-Coaching-Body-Transformation-LK.webp`, products: []}, 
            { id: 3, title: "Advanced Programs", imageUrl: `https://imperium.coach/wp-content/uploads/2022/11/Imperium-Online-Coaching-Body-Transformation-LB.webp`, products: []}]
        
          return (
            <Directory categories={categories}/>
          );

}
 
export default Home;