import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./AlbumDetail.css";
import NotFound from "./NotFound";

const AlbumDetail = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [album, setAlbum] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const albumResponse = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${albumId}`
        );

        if (!albumResponse.ok) {
          throw new Error("Album not found");
        }

        const albumData = await albumResponse.json();
        setAlbum(albumData);

        const photosResponse = await fetch(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        );
        const photosData = await photosResponse.json();
        setPhotos(photosData);

        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${albumData.userId}`
        );
        const userData = await userResponse.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching album:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumData();
  }, [albumId]);

  if (loading) return <div>Loading...</div>;

  if (notFound) {
    return <NotFound />;
  }

  return (
    <div>
      <h1>{album.title}</h1>
      {user && (
        <h2>
          Created by: <Link to={`/users/${user.id}`}>{user.name}</Link>
        </h2>
      )}
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
