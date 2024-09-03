import soldier from './soldier'
import {useRoute, useRouter} from "vue-router";

const officer = {

    setup() {
        const router = useRouter();
        const route = useRoute();
        const setToRoute = async (obj) => {
            const filterStr = soldier.compressAndEncodeObject(obj);
            await router.replace({
                name: route.name,
                params: route.params,
                query: {page_state: filterStr}
            });
        }

        const getObjFromRoute = () => {
            if (!route?.query['page_state']) return {};
            return soldier.decodeAndDecompressString(route.query['page_state']);
        }
        return {
            setToRoute,
            getObjFromRoute
        }
    }
}

export const useStrRoute = () => {
    return officer.setup();
};