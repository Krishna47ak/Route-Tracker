import { useContext } from "react";
import { Context as TrackContext } from "../context/track-context";
import { Context as LocationContext } from "../context/location-context";
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation()
    const { createTracks } = useContext(TrackContext)
    const { state:{name, locations}, reset } = useContext(LocationContext)

    const saveTrack = async () => {
        await createTracks(name, locations)
        reset()
        navigation.navigate('Stack')
    }

return [saveTrack]

}