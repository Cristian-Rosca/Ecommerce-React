import { Category } from "../../types/Category";
import CategoryItem from "../categoryItem/categoryItem";
import './directory.styles.scss';

type DirectoryProps = {
    categories: Category[];
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem category={category} />
            ))}
        </div>
    );
}

export default Directory;