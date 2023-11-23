interface ImageProps {
	src: string;
	alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
	return (
		<img
			src={src}
			alt={alt}
			width={'100%'}
			onLoad={(e) => {
				(e.target as HTMLImageElement).style.opacity = '1';
				(e.target as HTMLImageElement).style.height = 'auto';
			}}
			style={{opacity: 0, objectFit: 'cover', height: '200px', transition: 'opacity .5s ease-in-out'}}
		/>
	)
}

export default Image;
