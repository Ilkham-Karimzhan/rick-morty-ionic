import {Preferences} from '@capacitor/preferences';
import { ref, watch, onMounted } from 'vue';
import {Location} from "@/types/data";


const LOCATION_STORAGE = 'locations'

export const useLocationList = () => {
    const locations = ref<Location[]>([])
    const cacheLocations = () =>
        Preferences.set({
            key: LOCATION_STORAGE,
            value: JSON.stringify(locations.value)
        })

    const loadSaved = async () => {
        const locationsList = await Preferences.get({ key: LOCATION_STORAGE });
        locations.value = locationsList.value ? JSON.parse(locationsList.value) : [];
    }

    watch(locations, cacheLocations)
    onMounted(loadSaved)

    return {
        locations
    }
}

