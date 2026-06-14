import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { moon, sunny } from 'ionicons/icons';
import { useState, useEffect } from 'react';

import './Home.css';
import AlbumCard from '../components/AlbumCard';

const Home: React.FC = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.body.classList.toggle('dark', darkMode);
	}, [darkMode]);

	const cards = Array.from({ length: 9 });

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className="theme-button-container">
					<IonButton fill="clear" onClick={() => setDarkMode(!darkMode)}>
						<IonIcon icon={darkMode ? sunny : moon} />
					</IonButton>
				</div>
				<section className="hero-section">
					<h1 className="hero-title">Album example</h1>
					<p className="hero-description">
						Something short and leading about the collection below—its contents, the creator, etc.
						Make it short and sweet, but not too short so folks don&rsquo;t simply skip over it
						entirely.
					</p>
					<div className="hero-buttons">
						<IonButton>Main call to action</IonButton>
						<IonButton color="medium">Secondary action</IonButton>
					</div>
				</section>

				<IonGrid className="cards-container">
					<IonRow>
						{cards.map((_, index) => (
							<IonCol key={index} size="12" sizeSm="6" sizeMd="6" sizeLg="4" sizeXl="4">
								<AlbumCard />
							</IonCol>
						))}
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Home;
