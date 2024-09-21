import {FLOAT_REG_EXP} from "@/util/constants";

export function validateRadius(radius: string): boolean {
    return radius != "" && FLOAT_REG_EXP.test(radius) && radius != "0"
}