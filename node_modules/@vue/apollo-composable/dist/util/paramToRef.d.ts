import { Ref } from 'vue-demi';
import { ReactiveFunction } from './ReactiveFunction';
export declare function paramToRef<T>(param: T | Ref<T> | ReactiveFunction<T>): Ref<T>;
