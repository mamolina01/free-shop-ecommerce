import { Grid, GridItem } from "@chakra-ui/react";
import { PreviewGalleryItem } from "./PreviewGalleryItem";

export const PreviewGallery = () => {
	return (
		<Grid
			templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
			gap="1rem"
			backgroundColor="main"
			padding="1em"
			margin="2em"
		>
			<GridItem
				colSpan={2}
				height="20rem"
				backgroundImage="./clothes.jpg"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center"
			>
				<PreviewGalleryItem name="Clothes" />
			</GridItem>
			<GridItem
				colSpan={{ base: 2, md: 1 }}
				height={{ base: "10em", md: "15em" }}
				backgroundImage="./technology.png"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center"
			>
				<PreviewGalleryItem name="Technology" />
			</GridItem>
			<GridItem
				colSpan={{ base: 2, md: 1 }}
				height={{ base: "10em", md: "15em" }}
				backgroundImage="./jewellery.jpg"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center"
			>
				<PreviewGalleryItem name="Jewellery" />
			</GridItem>
		</Grid>
	);
};
