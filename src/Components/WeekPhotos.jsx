import React, { useEffect, useState } from 'react';
import { getWeekPhotos } from "../Api/getWeekPhotos";
import { ItemCard } from "./ItemCard";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import 'swiper/swiper.min.css';

import "./styles.css";

import { Pagination } from "swiper";


export function WeekPhotos() {
	
	const [weekPhotos,setWeekPhotos] = useState([])

	useEffect(() => {
		getWeekPhotos()
			.then( data => setWeekPhotos(data.reverse()) )
		},[]
	)
	
	return (<div >
		<h4>Fotos de la semana</h4>
		<div className='weekPhotos'>
			
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
			
			{weekPhotos.map(
				photo => (
					<SwiperSlide>
					
					<ItemCard
						key ={photo.date}
						item={photo}
					/>
					</SwiperSlide>
				
				)
			)}
			</Swiper>
		</div>
		</div>);
};


