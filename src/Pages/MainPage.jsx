import React from 'react';
import { PhotoDayCard } from "../Components/PhotoDayCard";
import { NasaLogo } from "../Components/nasaLogo";
import { PhotoProvider } from "../Context/PhotoContext";
import { WeekPhotos } from "../Components/WeekPhotos";
import './MainPage.css'
import { OtherPhotos } from "../Components/OtherPhotos";


export function MainPage() {
	return (
		<div className='main-page-background'>
			<div  className='main-page-container'>
				<NasaLogo/>
				<PhotoProvider>
					<PhotoDayCard/>
				</PhotoProvider>
			</div>
	</div>);
}

