import react, { createContext, useState } from "react";

export const PhotoContext = createContext({}, undefined);

export function PhotoProvider({children}){
	
	const [photoView, setPhotoView] = useState({})
	
	const changePhoto = ({item}) => {
		setPhotoView(item);
	}
	
	const data = {photoView, changePhoto};
	return(
		<PhotoContext.Provider value = {data}>
			{children}
		</PhotoContext.Provider>
	)
	
	
}