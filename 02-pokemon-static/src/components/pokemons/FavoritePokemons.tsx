import { createSignal, For } from "solid-js";
import type { FavoritePokemon } from "@interfaces/favorite-pokemon";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
	return JSON.parse(localStorage.getItem("favorites") ?? "[]");
};

export const FavoritePokemons = () => {
	const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

	return (
		<div class="grid grid-cols-2 sm:grid-cols-4">
			<For each={pokemons()}>
				{(pokemon) => <span>{pokemon.name}</span>}
			</For>
		</div>
	);
};