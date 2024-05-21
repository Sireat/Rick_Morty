import { Ref } from 'vue-demi';
import { ReactiveFunction } from './ReactiveFunction';
type TObject = object;
export declare function paramToReactive<T extends TObject>(param: T | Ref<T> | ReactiveFunction<T>): T | Ref<T>;
export {};
