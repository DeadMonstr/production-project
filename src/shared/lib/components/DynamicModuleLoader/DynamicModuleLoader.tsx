import {FC, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager, StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";
  
export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey,Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducerList,
    removeAfterUnmount?: boolean;
}
 
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> =  (props) => {
 
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props

    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()


    useEffect(() => {
        Object.entries(reducers).forEach(([name,reducer]: ReducerListEntry) =>{
            store.reducerManager.add(name,reducer)
            dispatch({type: `@INIT ${name} reducer`})

        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) =>{
                    store.reducerManager.remove(name)
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
 
    return (
        <>
            {children}
        </>
    )
}
 