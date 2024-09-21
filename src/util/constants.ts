export const FLOAT_REG_EXP = new RegExp('^([0-9]+([.][0-9]*)?|[.][0-9]+)$')

export const POSITIVE_INT_REG_EXP = new RegExp('^[1-9][0-9]*$')

/*
---- Error rules
 */
export const RADIUS_ERROR_RULE = "Invalid radius: radius must be a positive number."
export const N_GORES_ERROR_RULE = "Invalid number of gores: number of gores must be a positive whole number."