import { createSignal, Show, type Component } from "solid-js";
import type { FavoritePokemon } from "@interfaces/favorite-pokemon";

interface Props {
	pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
	const [isVisible, setIsVisible] = createSignal(true);

	const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;

	const deleteFavorite = () => {
		const favorites: FavoritePokemon[] = JSON.parse(
			localStorage.getItem("favorites") ?? "[]",
		);

		const newFavorites = favorites.filter((p) => p.id !== props.pokemon.id);

		localStorage.setItem("favorites", JSON.stringify(newFavorites));
		setIsVisible(false);
	};

	return (
		<Show when={isVisible()}>
			<div class="flex flex-col justify-center items-center">
				<a href={`/pokemons/${props.pokemon.name}`}>
					<img
						src={imageSrc}
						alt={props.pokemon.name}
						style={{ width: "96px", height: "96px" }}
					/>
					<p class="capitalize">
						#{props.pokemon.id} {props.pokemon.name}
					</p>
				</a>

				<button class="text-red-400" onClick={deleteFavorite}>
					Borrar
				</button>
			</div>
		</Show>
	);
};