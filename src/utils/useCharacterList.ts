import {Preferences} from '@capacitor/preferences';
import { ref, watch, onMounted } from 'vue';
import {Character} from "@/types/data";

const CHARACTERS_STORAGE = 'characters'

export const useCharacterList = () => {
    const characters = ref<Character[]>([])
    const cacheCharacters = () =>
        Preferences.set({
            key: CHARACTERS_STORAGE,
            value: JSON.stringify(characters.value)
        })

    const loadSaved = async () => {
        const characterList = await Preferences.get({ key: CHARACTERS_STORAGE });
        characters.value = characterList.value ? JSON.parse(characterList.value) : [];
    }

    watch(characters, cacheCharacters)
    onMounted(loadSaved)

    return {
        characters
    }
}

