import styles from './Carousel.module.scss'
import CarouselItem from './CarouselItem'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const items = [
	{
		id: '1s',
		title: 'Wiosennie niskie ceny',
		description: 'na początek sezonu',
		src: 'https://cdn.galleries.smcloud.net/t/galleries/gf-NfnN-ubES-qrrU_projekt-ogrodu-664x442-nocrop.jpg',
		alt: 'ogród',
	},
	{
		id: '2s',
		title: 'Ogród',
		description: 'w wiosennie niskich cenach',
		src: 'https://miejskieziele.pl/wp-content/uploads/2022/03/Kacik-wypoczynkowy-scaled.jpg',
		alt: 'ogród',
	},
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
}



function NextArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles['next-arrow']} onClick={onClick}>
			<FontAwesomeIcon icon={faChevronRight} className={styles['chevron-right']} />
		</div>
	)
}

function PrevArrow(props: any) {
	const { onClick } = props
	return (
		<div className={styles['prev-arrow']} onClick={onClick}>
			<FontAwesomeIcon icon={faChevronLeft} className={styles['chevron-left']} />
		</div>
	)
}



export default function Carousel() {

	return (
	
		<div className={styles.carousel}> 
                <Slider {...settings}>
                    {items.map(item => {
                        return <CarouselItem key={item.id} item={item} />
                    })}
                </Slider>
        </div>

	)
}
