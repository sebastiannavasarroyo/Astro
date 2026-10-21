import { createSignal, For } from "solid-js";
import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
	return JSON.parse(localStorage.getItem("favorites") ?? "[]");
};

export const FavoritePokemons = () => {
	const [pokemons] = createSignal(getLocalStoragePokemons());

	return (
		<div class="grid grid-cols-2 sm:grid-cols-4">
			<For each={pokemons()}>
				{(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
			</For>
		</div>
	);
};