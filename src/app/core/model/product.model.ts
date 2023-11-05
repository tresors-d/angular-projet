export class Product {
    id: number;
    nom : string;
    description: string;
    prix: number;
    quantite: number;
    
    constructor(id:number, nom:string, description:string, prix:number, quantite:number) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.quantite = quantite;
    }
}