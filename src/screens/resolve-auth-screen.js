import { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/auth-context";

export default function ResolveAuth({ navigation }) {

    const { autoSignin } = useContext(AuthContext)

    useEffect( () => {
        autoSignin(() => navigation.navigate('Bottom'),() => navigation.navigate('Auth'))
    },[])
    return null
}