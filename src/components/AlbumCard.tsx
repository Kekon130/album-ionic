import React from 'react';
import { IonCard, IonCardContent, IonButton } from '@ionic/react';
import './AlbumCard.css';

const AlbumCard: React.FC = () => {
	return (
		<IonCard className="album-card">
			<div className="album-cover">Album Cover</div>
			<IonCardContent>
				<p className="card-description">
					This is a wider card with supporting text below as a natural lead-in to additional
					content.
				</p>
				<div className="card-footer">
					<div className="card-buttons">
						<IonButton size="small" fill="outline">
							View
						</IonButton>
						<IonButton size="small" fill="outline">
							Edit
						</IonButton>
					</div>
					<span className="time-text">9 mins ago</span>
				</div>
			</IonCardContent>
		</IonCard>
	);
};

export default AlbumCard;
