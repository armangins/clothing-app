import { createContext ,useEffect,useState } from "react";
import { getCategoriesAndDocs ,getCategoriesAndImages} from "../utilities/firebase/firebase.utilities";

export const CategoriesContext = createContext({
    categoriesAndProducts:{},
    categoriesAndImages:{},
})

export const CategoriesProvider = ({ children }) => {
   
    const [categoriesAndProducts,setCategoriesAndProducts] = useState({});
    const [categoriesAndImages,setCategoriesAndImages] = useState({});

    useEffect(()=>{
        const getCategoriesMap = async ()=>{
           const categoryWithProducts = await getCategoriesAndDocs();
           const categoriesWithImages = await getCategoriesAndImages();
           setCategoriesAndProducts(categoryWithProducts);
           setCategoriesAndImages(categoriesWithImages);
        }
        getCategoriesMap();
    },[]);

    const value ={categoriesAndProducts,categoriesAndImages};
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}