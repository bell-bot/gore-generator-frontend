import { Units } from '@/types/Units';
import { cmToInches, mmToInches } from '@/util/toInches';
import { unzip } from '@/util/zip-utils';

export async function GET(
	units: Units,
	radius: number,
	nGores: string,
	precision: number
) {
	const radiusInInches = radiusToInchesString(units, radius);

	const response = await sendRequest(radiusInInches, nGores, precision);

	if (response.ok) {
		return response.arrayBuffer().then(function (buffer) {
            return unzip(buffer);
        })
	} else {
		throw new Error(response.statusText);
	}
}

function sendRequest(radius: string, nGores: string, precision: number) {
	const headers = getRequestHeaders();

	const url =
		process.env.NEXT_PUBLIC_API_ENDPOINT + getUrl(radius, nGores, precision);

	return fetch(url, {
		headers: headers,
		method: 'GET',
		mode: 'cors'
	});
}

export function getUrl(radius: string, nGores: string, precision: number) {
	return `/generate?radius=${encodeURIComponent(
		radius
	)}&n_gores=${encodeURIComponent(nGores)}&precision=${encodeURIComponent(
		precision
	)}`;
}

function getRequestHeaders() {
	const requestHeaders = new Headers();
	requestHeaders.append('Content-Type', 'zip');
	requestHeaders.append('Access-Control-Expose-Headers', 'Content-Disposition');
	requestHeaders.append('Access-Control-Allow-Origin', '*');
	return requestHeaders;
}

export function radiusToInchesString(units: Units, radius: number) {
	switch (units) {
		case Units.CM:
			return cmToInches(radius).toString();
		case Units.MM:
			return mmToInches(radius).toString();
		case Units.INCHES:
			return radius.toString();
	}
}
