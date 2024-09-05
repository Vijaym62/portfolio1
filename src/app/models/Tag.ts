export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly Typescript = new Tag('Typescript','darked');
    static readonly Python = new Tag('Python','pink');
    static readonly CSharp = new Tag('C#','green');
    static readonly Java = new Tag('Java','orange');
    static readonly Nodejs = new Tag('Node.js','brown');
    static readonly ASPNet = new Tag('ASP.Net','purple');
    static readonly Javascript = new Tag('Javascript','orange');
    static readonly MongoDB = new Tag('MongoDB','blue');
    static readonly Json = new Tag('db.Json','blue');
    static readonly Express = new Tag('Express','blue');
    static readonly TailwindCss = new Tag('TaiwindCss','blue');
    private constructor(private readonly key:string,public readonly color:string){

    }
    toString(){
        return this.key;
    }
}