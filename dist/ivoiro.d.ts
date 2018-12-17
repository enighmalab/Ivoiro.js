declare class Ivoiro {
    options: Object;
    targetName: string;
    target: any;
    /**
     * Constructeur de la classe prend en paramètre l'object
     *
     * @param {object} options
     */
    constructor(options: Object);
    /**
     * Initialisation du composant html servant à gérer les données
     *
     * Cette fonction sert principalement à vérifier si le composant html
     * est récupéré par son id ou sa className ensuite elle récupère
     * l'élement par le moyen spécifié lors de l'initialisation du composant
     */
    private initialyzeProperty();
    /**
     * Formattage des valeurs en CFA
     *
     * Cette fonction sert principalement à formatter un chiffre
     * AU format CFA
     *
     * @param {string} separator
     * @param {boolean} suffix
     * @param {string} symbole
     * @return {void}
     */
    formatToCfa(separator: string, suffix?: boolean, symbole?: string): void;
    /**
     * Transforme le chiffre en fonction de sa longeur
     *
     * @param {string} number
     * @param {string} separator
     * @param {string}
     */
    private translateNumber(number, separator);
    /**
     * Permet de fair la compilation
     *
     * @param {Array} numberArray
     * @param {string} separator
     * @param {number} splicer
     * @param {string}
     */
    private translator(numberArray, separator, splicer);
    /**
     * Génère l'opérateur qui permet de savoir à quel moment mettre le separateur
     *
     * @param {number} i
     * @param {number} splicer
     * @return {number}
     */
    translatorSlicer(i: number, splicer: number): number;
    /**
     * Crée une instance de Ivoiro rapidement
     *
     * @param {Object} options
     * @return {Ivoiro}
     */
    static initialize(options: Object): Ivoiro;
}
