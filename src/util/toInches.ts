const CM_CONSTANT: number = 2.54;

export function cmToInches(cm_value: number): number {
    return cm_value / CM_CONSTANT;
}

export function mmToInches(mm_value: number): number {
    return mm_value / (CM_CONSTANT * 10);
}