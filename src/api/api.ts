import {Units} from "@/types/Units";
import {cmToInches, mmToInches} from "@/util/toInches";

export async function GET(units: Units, radius: number, nGores: number, precision: number) {
    const radiusInInches = radiusToInches(units, radius);
    const requestHeaders = new Headers();
    requestHeaders.append('Content-Type', 'image/png')
    requestHeaders.append('Access-Control-Expose-Headers', 'Content-Disposition');
    requestHeaders.append('Access-Control-Allow-Origin', '*');

    const url = `http://127.0.0.1:5000/generate?radius=${encodeURIComponent(radiusInInches)}&n_gores=${encodeURIComponent(nGores)}&precision=${encodeURIComponent(precision)}`
    const response = await fetch(url, {headers: requestHeaders, method: "GET", mode: "cors"})

    if (response.ok) {
        return response;
    } else {
        throw new Error(response.statusText);
    }
}

function radiusToInches(units: Units, radius: number) {
    switch (units) {
        case Units.CM:
            return cmToInches(radius);
        case Units.MM:
            return mmToInches(radius);
        case Units.INCHES:
            return radius;
    }
}