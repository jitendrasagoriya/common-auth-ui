export class GlobalConstants {
    public static apiURL: string = "http://localhost:8091/api/";
    public static  helpEndpoint : string = "help/";


    public static getAddHelpEndpoint():string {
        return this.apiURL + this.helpEndpoint;
    }
}
