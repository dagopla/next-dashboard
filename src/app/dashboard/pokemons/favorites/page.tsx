import { FavoritePokemon } from "@/pokemons";

const getFavorites = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
}
export default function FavoritesPage() {
  return (
    <div className="flex gap-10 flex-wrap items-center">
      <FavoritePokemon />
    </div>
  );
}