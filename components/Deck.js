

export const getDeckInfo = (deckId) => {
    const URL = `https://www.keyforgegame.com/api/decks/${deckId}/?links=cards,notes`;
    return fetch(URL)
            .then((res) => res.json());
}
