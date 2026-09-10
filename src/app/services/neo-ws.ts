
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';



@Injectable({ providedIn: 'root' })

export class NeoWs {

    private http = inject(HttpClient);
    private apiKey = "BXzZL8lt7K3iUqHQeklJ8Jmlr7d8quuHorUdcYfF";
    getDatos(): Observable<any> {
        const today = new Date().toISOString().split('T')[0];
        const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${this.apiKey}`

        return this.http.get<any>(url).pipe(
            map(response => {
                const asteroides = response.near_earth_objects[today] || [];

                const asteroidesConDatos = asteroides.filter(
                    (a: any) => a.close_approach_data && a.close_approach_data.length > 0
                )

                if (asteroidesConDatos.length == 0) {

                    throw new Error('No hay asteroides')
                };


                return asteroidesConDatos.reduce((closest: any, current: any) => {
                    const distanciaCerca = parseFloat(closest.close_approach_data[0].miss_distance.kilometers);
                    const distanciaAcutal = parseFloat(current.close_approach_data[0].miss_distance.kilometers);

                    return distanciaAcutal < distanciaCerca ? current : closest;
                }
                )

            })
        )
    }
}
