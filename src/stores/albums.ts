import { observable, action } from "mobx";
import { createContext } from "react";
import { handleFetch } from "../helpers/fetch";

interface IAlbumPhotos {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface IAlbums {
  id: number;
  userId: number;
  title: string;
}

const savedFavorites = localStorage.getItem("favorites");
class AlbumsStore {
  @observable.ref albums: IAlbums[] = [];
  @observable.ref albumPhotos: IAlbumPhotos[] = [];
  @observable.ref favoritePhotos: IAlbumPhotos[] =
    (savedFavorites && JSON.parse(savedFavorites)) || [];

  @action getAlbums = async () => {
    this.albums = await handleFetch("albums");
  };
  @action getalbumPhotos = async (id: string) => {
    this.albumPhotos = await handleFetch(`photos?albumId=${id}`);
  };
  @action setFavoritePhoto = (id: number) => {
    const isFavorite = this.favoritePhotos.find((photo) => photo.id === id);
    if (isFavorite) {
      const updatedFavoritesList = this.favoritePhotos.filter(
        (f) => f.id !== id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavoritesList));
      this.favoritePhotos = updatedFavoritesList;
    } else {
      const currentPhoto = this.albumPhotos.find((album) => album.id === id);

      if (currentPhoto) {
        localStorage.setItem(
          "favorites",
          JSON.stringify([...this.favoritePhotos, currentPhoto])
        );
        this.favoritePhotos = [...this.favoritePhotos, currentPhoto];
      }
    }
  };
  @action clearalbumPhotos = () => {
    this.albumPhotos = [];
  };
}

const store = new AlbumsStore();

export default createContext(store);
