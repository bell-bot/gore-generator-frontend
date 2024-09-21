import {POSITIVE_INT_REG_EXP} from "@/util/constants";

export function validateNGores(n_gores: string) {
    return POSITIVE_INT_REG_EXP.test(n_gores);
}