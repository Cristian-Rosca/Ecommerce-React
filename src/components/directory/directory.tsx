import { Category } from "../../types/Category";
import DirectoryItem from "../directoryItem/directoryItem.component";
import './directory.styles.scss';

type DirectoryProps = {
    categories: Category[];
}

const Directory: React.FC<DirectoryProps> = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <DirectoryItem category={category} />
            ))}
        </div>
    );
}

export default Directory;